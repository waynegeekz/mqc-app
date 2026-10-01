import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { logout } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Dashboard | MQC Project Management" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-12 sm:px-6">
      <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground">Dashboard</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Welcome back</h1>
      <div className="mt-4 h-2 w-12 bg-primary" aria-hidden />
      <p className="mt-6 text-lg text-muted-foreground">Signed in as {session.user.email}</p>
      <form action={logout} className="mt-8">
        <Button type="submit" variant="secondary">Sign out</Button>
      </form>
    </main>
  );
}
