import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6">
      <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-violet-200/80">
        Error 404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-violet-200/75 sm:text-base">
        The page you tried to reach has moved or no longer exists. Use the links
        below to keep exploring.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          prefetch
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          prefetch
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-black/25 px-6 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
