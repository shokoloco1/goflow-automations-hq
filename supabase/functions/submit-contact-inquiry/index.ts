import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { Resend } from 'https://esm.sh/resend@2.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));
const NOTIFICATION_EMAIL = 'davids@goflowaai.com';

interface ContactInquiry {
  fullName: string;
  businessName?: string;
  email: string;
  phone?: string;
  service: string;
  description?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const inquiry: ContactInquiry = await req.json();

    console.log('Received contact inquiry:', { 
      email: inquiry.email, 
      service: inquiry.service 
    });

    // Validate required fields
    if (!inquiry.fullName || !inquiry.email || !inquiry.service) {
      console.error('Validation failed: missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create Supabase client with service role key
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert inquiry into database
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert({
        full_name: inquiry.fullName,
        business_name: inquiry.businessName || null,
        email: inquiry.email,
        phone: inquiry.phone || null,
        service: inquiry.service,
        description: inquiry.description || null,
        status: 'new'
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save inquiry' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Inquiry saved successfully:', data.id);

    // Send email notification
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Nueva Inquiry de Contacto 📬
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-top: 0;">Información del Cliente</h3>
            
            <p><strong>Nombre:</strong> ${inquiry.fullName}</p>
            ${inquiry.businessName ? `<p><strong>Empresa:</strong> ${inquiry.businessName}</p>` : ''}
            <p><strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
            ${inquiry.phone ? `<p><strong>Teléfono:</strong> ${inquiry.phone}</p>` : ''}
            <p><strong>Servicio solicitado:</strong> ${inquiry.service}</p>
            
            ${inquiry.description ? `
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <strong>Descripción:</strong>
                <p style="white-space: pre-wrap;">${inquiry.description}</p>
              </div>
            ` : ''}
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Inquiry ID: ${data.id}<br>
            Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })}
          </p>
        </div>
      `;

      const emailResult = await resend.emails.send({
        from: 'GoFlow AI <onboarding@resend.dev>',
        to: [NOTIFICATION_EMAIL],
        subject: `🔔 Nueva Inquiry: ${inquiry.fullName} - ${inquiry.service}`,
        html: emailHtml,
      });

      console.log('Email notification sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails, inquiry is already saved
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in submit-contact-inquiry function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});