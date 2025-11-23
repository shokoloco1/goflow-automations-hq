-- Create table for lead magnet subscribers
CREATE TABLE public.lead_magnet_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending',
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.lead_magnet_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to insert
CREATE POLICY "service_role_insert_lead_magnet" 
ON public.lead_magnet_subscribers 
FOR INSERT 
TO service_role
WITH CHECK (true);

-- Create policy for service role to select
CREATE POLICY "service_role_select_lead_magnet" 
ON public.lead_magnet_subscribers 
FOR SELECT 
TO service_role
USING (true);

-- Create policy for service role to update
CREATE POLICY "service_role_update_lead_magnet" 
ON public.lead_magnet_subscribers 
FOR UPDATE 
TO service_role
USING (true)
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_lead_magnet_email ON public.lead_magnet_subscribers(email);

-- Create index on created_at for analytics
CREATE INDEX idx_lead_magnet_created_at ON public.lead_magnet_subscribers(created_at DESC);