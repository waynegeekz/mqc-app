import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 py-24 sm:px-6">
      <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground">
        MQC Project Management
      </p>
      <h1 className="mt-2 text-5xl font-extrabold tracking-tight">Every phase accounted for.</h1>
      <div className="mt-4 h-2 w-12 bg-primary" aria-hidden />
      <p className="mt-6 max-w-[720px] text-lg text-muted-foreground">Built to schedule. Delivered to budget.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/login" className={buttonVariants()}>Sign in</Link>
        <Link href="/dashboard" className={buttonVariants({ variant: "outline" })}>Dashboard</Link>
      </div>
    </main>
  );
}
