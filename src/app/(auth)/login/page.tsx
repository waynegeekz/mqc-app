import { AuthForm } from "../auth-form";

export const metadata = { title: "Sign in | MQC Project Management" };

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
