import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.PUBLIC_SUPABASE_URL ||
  'https://buhoqypmlzczfheikpfp.supabase.co';

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_cChImdII0p7WSG9yJ5QMEQ_1dmckeZF';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
