import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-md rounded-[1.75rem] border border-white/12 bg-black/30 p-6 shadow-[0_0_80px_-16px_rgba(168,85,247,0.55)] backdrop-blur-xl sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% -10%, rgba(236,72,153,0.12), transparent 58%), radial-gradient(ellipse 80% 50% at 50% 120%, rgba(139,92,246,0.16), transparent 62%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1]">
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-violet-200/80 sm:text-xs">
          Member access
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-violet-100/80 sm:text-base">
          {subtitle}
        </p>

        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}
