-- Consultation requests from the home page contact form.
create table public.enquiries (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  organisation text check (char_length(organisation) <= 160),
  message text not null check (char_length(message) between 1 and 4000),
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- Visitors may submit; nobody reads through the anon key.
create policy "anyone can submit an enquiry"
  on public.enquiries for insert to anon
  with check (true);
