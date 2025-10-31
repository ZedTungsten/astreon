import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // keep it quiet in production, but helpful locally
  console.warn('Missing NEXT_PUBLIC_SUPABASE_* env vars. Set them in .env.local or Vercel.');
}

export const supabase = createClient(url || '', anonKey || '');
