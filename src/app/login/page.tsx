import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Member login for adults 18+.",
};

export default function LoginPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center px-4 py-14 sm:px-6">
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to your member account. This site is intended for consenting adults aged 18+."
      >
        <AuthForm mode="login" />
      </AuthCard>
    </main>
  );
}
