# Astreon — Next.js + Supabase Starter

Minimal starter for the Astreon accounting web app.

What this contains
- Next.js app (pages router)
- Supabase client wrapper (client-side)
- Basic pages: Home, Login (magic link), Protected Dashboard (client guard)
- Example of using NEXT_PUBLIC_* env vars
- Vercel deployment ready

Quick start (local)
1. Copy repository to your GitHub account and import to Vercel (or deploy locally).
2. Create `.env.local` with:
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
3. Install & run:
   npm install
   npm run dev
4. Open http://localhost:3000

Deploy to Vercel
- Connect this GitHub repo in Vercel and choose the Next.js preset.
- Add environment variables in Vercel (Project Settings -> Environment Variables):
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
- Deploy — Vercel will run `next build`.

Notes
- Do NOT store SUPABASE_SERVICE_ROLE_KEY in client env vars. Use server-only environment variables in API routes if you need server privileged operations.
- This starter is intentionally minimal. I can add auth session persistence, server-side rendering, RLS guidance, migrations, or an Edge Function scaffold next.

If you'd like, I can push these files into your repository or provide step-by-step copy/paste instructions for adding them via the GitHub web editor.
