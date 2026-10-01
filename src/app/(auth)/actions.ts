"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { supabase } from "@/lib/supabase";

export type FormState = { error?: string; email?: string } | undefined;

function readCredentials(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  return { email, password };
}

async function signInWith(email: string, password: string): Promise<FormState> {
  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    // signIn throws a redirect on success; only swallow auth failures.
    if (error instanceof AuthError) return { error: "Invalid email or password.", email };
    throw error;
  }
}

export async function login(_: FormState, formData: FormData): Promise<FormState> {
  const { email, password } = readCredentials(formData);
  if (!email || !password) return { error: "Enter your email and password.", email };
  return signInWith(email, password);
}

export async function signup(_: FormState, formData: FormData): Promise<FormState> {
  const { email, password } = readCredentials(formData);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Enter a valid email address.", email };
  if (password.length < 8) return { error: "Password must be at least 8 characters.", email };

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message, email };

  return signInWith(email, password);
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}
