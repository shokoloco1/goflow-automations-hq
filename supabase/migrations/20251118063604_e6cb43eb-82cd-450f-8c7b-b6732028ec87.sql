-- Create enum for inquiry status
CREATE TYPE public.inquiry_status AS ENUM ('new', 'contacted', 'closed');

-- Create contact_inquiries table
CREATE TABLE public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  description TEXT,
  status inquiry_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy: Only service role can read inquiries (for admin access later)
-- For now, no public access - only backend functions with service role can insert
CREATE POLICY "Service role can manage all inquiries"
  ON public.contact_inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_contact_inquiries_created_at ON public.contact_inquiries(created_at DESC);
CREATE INDEX idx_contact_inquiries_status ON public.contact_inquiries(status);