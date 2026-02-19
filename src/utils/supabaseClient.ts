import { createClient } from '@supabase/supabase-js';

// Ensure these names match your Vercel Environment Variables EXACTLY
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_PUBLIC_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are missing! Check your .env or Vercel settings.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);