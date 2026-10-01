"use client";

import { useActionState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitEnquiry } from "@/app/enquiry";

const iconProps = { strokeWidth: 2, strokeLinecap: "square", strokeLinejoin: "miter" } as const;

const fields = [
  { name: "name", label: "Full name", autoComplete: "name", required: true },
  { name: "email", label: "Work email", type: "email", autoComplete: "email", required: true },
  { name: "organisation", label: "Company", hint: "Optional", autoComplete: "organization" },
] as const;

export function ContactForm({ cta }: { cta: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, undefined);

  if (state?.ok)
    return (
      <div role="status" className="border border-border bg-card p-6 sm:p-8">
        <span className="inline-flex size-10 items-center justify-center rounded-md bg-[var(--success-tint)] text-[var(--success)]">
          <Check className="size-5" {...iconProps} aria-hidden />
        </span>
        <p className="mt-4 font-heading text-xl font-bold">Thank you. Your request is in.</p>
        <p className="mt-2 text-muted-foreground">We&apos;ll reply by email to arrange a time to talk.</p>
      </div>
    );

  const err = state?.ok === false ? state : undefined;
  const fieldClass = "mt-2 h-11";

  return (
    <form action={action} noValidate className="grid gap-5 border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
      {fields.map((f) => {
        const msg = err?.fields?.[f.name];
        return (
          <div key={f.name} className={f.name === "organisation" ? "sm:col-span-2" : ""}>
            <Label htmlFor={f.name} className="font-semibold">
              {f.label}
              {"hint" in f && <span className="font-normal text-muted-foreground">{f.hint}</span>}
            </Label>
            <Input
              // Remount when the server echoes values back; Base UI warns on changing defaultValue.
              key={err?.values[f.name] ?? ""}
              id={f.name}
              name={f.name}
              type={"type" in f ? f.type : "text"}
              autoComplete={f.autoComplete}
              required={"required" in f}
              defaultValue={err?.values[f.name] ?? ""}
              aria-invalid={msg ? true : undefined}
              aria-describedby={msg ? `${f.name}-error` : undefined}
              className={fieldClass}
            />
            {msg && <p id={`${f.name}-error`} className="mt-1.5 text-sm font-medium text-destructive">{msg}</p>}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <Label htmlFor="message" className="font-semibold">About your project</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Type of build, stage, location, and what you'd like help with."
          defaultValue={err?.values.message}
          aria-invalid={err?.fields?.message ? true : undefined}
          aria-describedby={err?.fields?.message ? "message-error" : undefined}
          className="mt-2 block min-h-28 w-full resize-y rounded-md border border-input bg-card px-3 py-2.5 text-base placeholder:text-muted-foreground aria-invalid:border-2 aria-invalid:border-destructive"
        />
        {err?.fields?.message && <p id="message-error" className="mt-1.5 text-sm font-medium text-destructive">{err.fields.message}</p>}
      </div>
      <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">We reply by email. Your details are only used to respond to this request.</p>
        <button type="submit" disabled={pending} className={`${buttonVariants()} h-12 shrink-0 px-7 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground`}>
          {pending ? "Sending…" : cta} {!pending && <ArrowRight className="size-4" {...iconProps} aria-hidden />}
        </button>
      </div>
      {err && !err.fields && <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">{err.error}</p>}
      {err?.fields && <p role="alert" className="sr-only">{err.error}</p>}
    </form>
  );
}
