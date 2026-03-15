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

    // Send email notification to both addresses via Resend
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      const timestamp = new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' });
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0A0A0A; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #00C2FF; margin-bottom: 20px;">🔥 Nuevo lead GoFlow AI</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888;">Nombre:</td><td style="padding: 8px 0; color: #fff;">${body.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Empresa:</td><td style="padding: 8px 0; color: #fff;">${body.company}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">WhatsApp:</td><td style="padding: 8px 0; color: #fff;">${body.whatsapp}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Proceso manual:</td><td style="padding: 8px 0; color: #fff;">${body.painPoint}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Fecha:</td><td style="padding: 8px 0; color: #fff;">${timestamp}</td></tr>
          </table>
          <hr style="border: 1px solid #222; margin: 16px 0;" />
          <p style="color: #666; font-size: 12px;">Fuente: Landing goflowai.com</p>
        </div>
      `;

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'GoFlow AI <onboarding@resend.dev>',
            to: ['davidshawcontreras@gmail.com', 'davidshawcc@gmail.com'],
            subject: `🔥 Nuevo lead GoFlow AI — ${body.fullName} de ${body.company}`,
            html: emailHtml,
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
