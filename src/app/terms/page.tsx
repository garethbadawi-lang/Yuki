import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using this members platform.",
};

export default function TermsPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
          These terms outline member responsibilities, account expectations, and
          acceptable use of this platform.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        This is placeholder legal copy and should be reviewed by a qualified
        legal professional before launch.
      </section>

      <section className="mt-6 space-y-4">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Acceptance of terms
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            By using this website, you agree to comply with the current terms of
            service, applicable local laws, and all stated platform policies.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Member conduct
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Members are expected to communicate respectfully, avoid harassment,
            and refrain from abusive, unlawful, or exploitative behavior.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Account and access
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Account access may be limited, suspended, or terminated in cases of
            policy violations, misuse, or safety concerns.
          </p>
        </article>
      </section>
    </main>
  );
}
