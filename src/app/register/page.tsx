import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a member account for adults 18+.",
};

export default function RegisterPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center px-4 py-14 sm:px-6">
      <AuthCard
        title="Create your account"
        subtitle="Register to access subscriber areas. Membership is for consenting adults aged 18+."
      >
        <AuthForm mode="register" />
      </AuthCard>
    </main>
  );
}
