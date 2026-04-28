import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA",
  description: "Copyright and DMCA policy guidance.",
};

export default function DmcaPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          DMCA Policy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
          This section outlines placeholder procedures for copyright notices,
          review workflow, and takedown handling.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        This is placeholder legal copy and should be reviewed by a qualified
        legal professional before launch.
      </section>

      <section className="mt-6 space-y-4">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Filing a notice
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: rights holders may submit a notice with
            identifying details, ownership statement, and requested action.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Review and action
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: notices are reviewed in good faith and may
            result in temporary restriction or removal while assessed.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Counter-notice process
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: account holders may submit a counter-notice
            when they believe removal occurred in error.
          </p>
        </article>
      </section>
    </main>
  );
}
