# MQC Project Management

Next.js 16 (App Router), Tailwind v4, shadcn/ui, Auth.js v5 (Credentials) with Supabase Auth as the credential store.

## Setup

1. `npm install`
2. Start Docker Desktop, then `npx supabase start`.
3. `cp .env.example .env.local`, set `AUTH_SECRET` (`npx auth secret`), `SUPABASE_URL` (the `API_URL` from `npx supabase status`, not the postgres DB URL) and `SUPABASE_ANON_KEY` (the `PUBLISHABLE_KEY`).
4. `npm run dev` and open http://localhost:3000.

Supabase Studio runs at http://127.0.0.1:54323 (users under Authentication).

## Auth

- `/signup` creates the user in Supabase Auth, then signs in through Auth.js.
- `/login` checks credentials with `supabase.auth.signInWithPassword`; Auth.js holds the session (JWT cookie).
- `/dashboard` is protected by `auth()` in the page and redirects to `/login`.
