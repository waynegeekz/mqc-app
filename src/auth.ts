import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (typeof email !== "string" || typeof password !== "string") return null;

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error || !data.user) return null;

        return { id: data.user.id, email: data.user.email };
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
  },
});
