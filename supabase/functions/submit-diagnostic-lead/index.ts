import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface DiagnosticLead {
  fullName: string;
  company: string;
  whatsapp: string;
  painPoint: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: DiagnosticLead = await req.json();

    if (!body.fullName || !body.company || !body.whatsapp || !body.painPoint) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { data, error } = await supabase
      .from('diagnostic_leads')
      .insert({
        full_name: body.fullName,
        company: body.company,
        whatsapp: body.whatsapp,
        pain_point: body.painPoint,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Unable to save your request.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email notification via Resend
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'GoFlow AI <onboarding@resend.dev>',
            to: ['davids.goflowaai@gmail.com'],
            subject: `🚀 Nuevo lead: ${body.fullName} — ${body.company}`,
            html: `
              <h2>Nuevo lead de diagnóstico</h2>
              <p><strong>Nombre:</strong> ${body.fullName}</p>
              <p><strong>Empresa:</strong> ${body.company}</p>
              <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
              <p><strong>Proceso costoso:</strong> ${body.painPoint}</p>
              <p><em>Enviado desde goflowai.com</em></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr);
      }
    }

    console.log('Diagnostic lead saved:', data.id);

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in submit-diagnostic-lead:', error);
    return new Response(
      JSON.stringify({ error: 'Unable to process your request.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
