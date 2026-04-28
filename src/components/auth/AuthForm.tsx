"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type AuthMode = "login" | "register";
type UiState = "idle" | "success" | "error";

type AuthFormProps = {
  mode: AuthMode;
};

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [uiState, setUiState] = useState<UiState>("idle");
  const [message, setMessage] = useState("");

  const content = useMemo(() => {
    if (mode === "login") {
      return {
        submitText: "Login",
        altText: "Need an account?",
        altHref: "/register",
        altLinkText: "Register",
      };
    }

    return {
      submitText: "Register",
      altText: "Already have an account?",
      altHref: "/login",
      altLinkText: "Login",
    };
  }, [mode]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setUiState("error");
      setMessage("Please complete all required fields.");
      return;
    }

    if (mode === "register") {
      if (password.length < 8) {
        setUiState("error");
        setMessage("Password must be at least 8 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setUiState("error");
        setMessage("Passwords do not match.");
        return;
      }
    }

    setUiState("success");
    setMessage(
      mode === "login"
        ? `Frontend-only demo: login form accepted for ${email}.`
        : `Frontend-only demo: registration form accepted for ${email}.`,
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-violet-200/85">Password</span>
        <input
          name="password"
          type="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
          placeholder="Enter your password"
          required
        />
      </label>

      {mode === "register" ? (
        <label className="grid gap-2">
          <span className="text-sm font-medium text-violet-200/85">
            Confirm password
          </span>
          <input
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="h-11 rounded-xl border border-white/10 bg-black/35 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/45 focus:outline-none"
            placeholder="Confirm your password"
            required
          />
        </label>
      ) : null}

      {mode === "login" ? (
        <label className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-violet-100/80">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="size-4 rounded border-white/20 bg-black/40 accent-violet-500"
          />
          <span>Remember me</span>
        </label>
      ) : null}

      <button
        type="submit"
        className="mt-1 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_48px_-8px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_64px_-6px_rgba(236,72,153,0.6)] active:scale-[0.98]"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
        }}
      >
        {content.submitText}
      </button>

      {uiState !== "idle" ? (
        <p
          className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${
            uiState === "success"
              ? "border-emerald-300/20 bg-emerald-500/10 text-emerald-100"
              : "border-rose-300/20 bg-rose-500/10 text-rose-100"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}

      <p className="text-sm text-violet-200/70">
        {content.altText}{" "}
        <Link
          href={content.altHref}
          className="text-violet-100 underline decoration-violet-300/70 underline-offset-4 transition hover:text-white"
        >
          {content.altLinkText}
        </Link>
      </p>
    </form>
  );
}
