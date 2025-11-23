import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.81.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get client info for tracking
    const userAgent = req.headers.get('user-agent') || 'unknown';
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

    console.log('Attempting to save lead magnet subscriber:', { email, ipAddress });

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('lead_magnet_subscribers')
      .select('id, email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing subscriber:', checkError);
      throw checkError;
    }

    if (existingSubscriber) {
      console.log('Email already subscribed:', email);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Already subscribed',
          alreadyExists: true 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Insert new subscriber
    const { data, error } = await supabase
      .from('lead_magnet_subscribers')
      .insert({
        email: email.toLowerCase(),
        ip_address: ipAddress,
        user_agent: userAgent,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting lead magnet subscriber:', error);
      throw error;
    }

    console.log('Successfully saved lead magnet subscriber:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email successfully saved',
        data 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in submit-lead-magnet function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
