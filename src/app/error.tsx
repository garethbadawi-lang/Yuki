"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6">
      <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-rose-200/80">
        Something went wrong
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        We hit a small bump
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-violet-200/75 sm:text-base">
        An unexpected error occurred while loading this page. Try again, or
        head back to the home page.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_44px_-10px_rgba(192,132,252,0.65)] transition hover:scale-[1.01] hover:shadow-[0_0_60px_-8px_rgba(236,72,153,0.58)] active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-black/25 px-6 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
