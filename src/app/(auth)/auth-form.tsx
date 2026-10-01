"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, signup } from "./actions";

const modes = {
  login: {
    action: login,
    title: "Sign in",
    description: "Access your MQC project dashboard.",
    submit: "Sign in",
    passwordAutocomplete: "current-password",
    alt: { prompt: "No account yet?", href: "/signup", label: "Create one" },
  },
  signup: {
    action: signup,
    title: "Create an account",
    description: "Minimum 8 characters for the password.",
    submit: "Create account",
    passwordAutocomplete: "new-password",
    alt: { prompt: "Already registered?", href: "/login", label: "Sign in" },
  },
} as const;

export function AuthForm({ mode }: { mode: keyof typeof modes }) {
  const m = modes[mode];
  const [state, formAction, pending] = useActionState(m.action, undefined);
  const errorId = state?.error ? "form-error" : undefined;

  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground">
            MQC Project Management
          </p>
          <CardTitle>{m.title}</CardTitle>
          <CardDescription>{m.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid gap-4" aria-describedby={errorId}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                // Remount so the echoed email becomes a fresh uncontrolled default.
                key={state?.email ?? ""}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                defaultValue={state?.email}
                aria-invalid={!!state?.error}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={m.passwordAutocomplete}
                required
                minLength={mode === "signup" ? 8 : undefined}
                aria-invalid={!!state?.error}
              />
            </div>
            {state?.error && (
              <p id="form-error" role="alert" className="text-sm font-medium text-destructive">
                {state.error}
              </p>
            )}
            <Button type="submit" disabled={pending}>
              {pending ? "Please wait…" : m.submit}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          {m.alt.prompt}&nbsp;
          <Link href={m.alt.href} className="font-semibold text-foreground underline underline-offset-4">
            {m.alt.label}
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
