-- Drop ALL existing policies on contact_inquiries
DROP POLICY IF EXISTS "Service role can manage all inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only service role can insert inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only service role can read inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only service role can update inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only service role can delete inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Service role insert only" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Service role read only" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Service role update only" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Service role delete only" ON public.contact_inquiries;

-- Create PERMISSIVE policies that grant access to service_role
-- These are NOT restrictive - they explicitly grant access

-- Allow service_role to INSERT (edge function can save contact form submissions)
CREATE POLICY "service_role_insert_inquiries"
  ON public.contact_inquiries
  AS PERMISSIVE
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow service_role to SELECT (backend can read inquiries)
CREATE POLICY "service_role_select_inquiries"
  ON public.contact_inquiries
  AS PERMISSIVE
  FOR SELECT
  TO service_role
  USING (true);

-- Allow service_role to UPDATE (backend can update status)
CREATE POLICY "service_role_update_inquiries"
  ON public.contact_inquiries
  AS PERMISSIVE
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Allow service_role to DELETE (backend can delete if needed)
CREATE POLICY "service_role_delete_inquiries"
  ON public.contact_inquiries
  AS PERMISSIVE
  FOR DELETE
  TO service_role
  USING (true);

-- Result:
-- ✅ Contact form works (edge function with service_role can insert)
-- ✅ Data is protected (only service_role has access, no public/anon access)
-- ✅ Backend can manage inquiries (CRUD operations available)