import "server-only";
import { createClient } from "@supabase/supabase-js";

// Auth.js owns the session; Supabase Auth only stores and verifies credentials.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
