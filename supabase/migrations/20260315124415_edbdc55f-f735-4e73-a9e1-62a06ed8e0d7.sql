CREATE TABLE public.diagnostic_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  pain_point TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnostic_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.diagnostic_leads
  FOR INSERT TO anon WITH CHECK (true);
