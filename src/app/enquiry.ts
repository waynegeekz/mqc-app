"use server";

import { supabase } from "@/lib/supabase";

type Field = "name" | "email" | "organisation" | "message";

export type EnquiryState =
  | { ok: true }
  | { ok: false; error: string; fields?: Partial<Record<Field, string>>; values: Record<Field, string> }
  | undefined;

export async function submitEnquiry(_: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: Field) => String(formData.get(k) ?? "").trim();
  const values = { name: get("name"), email: get("email"), organisation: get("organisation"), message: get("message") };

  const fields: Partial<Record<Field, string>> = {};
  if (!values.name || values.name.length > 120) fields.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length > 254) fields.email = "Enter a valid email address.";
  if (values.organisation.length > 160) fields.organisation = "Keep this under 160 characters.";
  if (!values.message || values.message.length > 4000) fields.message = "Tell us a little about your project.";
  if (Object.keys(fields).length) return { ok: false, error: "Check the highlighted fields.", fields, values };

  const { error } = await supabase.from("enquiries").insert({ ...values, organisation: values.organisation || null });
  if (error) return { ok: false, error: "We couldn't send your request. Please try again in a moment.", values };

  return { ok: true };
}
