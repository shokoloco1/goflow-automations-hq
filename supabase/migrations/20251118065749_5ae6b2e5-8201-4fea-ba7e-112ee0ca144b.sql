-- Drop the existing restrictive policy that doesn't properly protect data
DROP POLICY IF EXISTS "Service role can manage all inquiries" ON public.contact_inquiries;

-- Create proper PERMISSIVE policies that explicitly control access

-- Policy 1: Only service role can INSERT (for edge function submissions)
CREATE POLICY "Only service role can insert inquiries"
  ON public.contact_inquiries
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy 2: Only service role can SELECT (read) inquiries
CREATE POLICY "Only service role can read inquiries"
  ON public.contact_inquiries
  FOR SELECT
  TO service_role
  USING (true);

-- Policy 3: Only service role can UPDATE inquiries
CREATE POLICY "Only service role can update inquiries"
  ON public.contact_inquiries
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy 4: Only service role can DELETE inquiries
CREATE POLICY "Only service role can delete inquiries"
  ON public.contact_inquiries
  FOR DELETE
  TO service_role
  USING (true);

-- These policies ensure:
-- 1. No anonymous/public access - blocks all unauthorized users
-- 2. Only the backend (service_role) can access data
-- 3. All customer data (emails, phones, names) is fully protected