
CREATE TABLE public.audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  website_url text NOT NULL,
  whatsapp text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_insert_audit" ON public.audit_requests FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_role_select_audit" ON public.audit_requests FOR SELECT TO service_role USING (true);
CREATE POLICY "service_role_update_audit" ON public.audit_requests FOR UPDATE TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_delete_audit" ON public.audit_requests FOR DELETE TO service_role USING (true);
