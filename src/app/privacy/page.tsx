import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information and data handling overview.",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
          This page explains how account information and activity data are
          handled within the member experience.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        This is placeholder legal copy and should be reviewed by a qualified
        legal professional before launch.
      </section>

      <section className="mt-6 space-y-4">
        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Information collected
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: this section may describe information such
            as email, subscription preferences, and limited technical analytics.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Data usage
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: data may be used to operate the service,
            maintain security, and improve member support.
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Retention and requests
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/75">
            Placeholder policy text: members may request access, correction, or
            deletion of personal information according to applicable law.
          </p>
        </article>
      </section>
    </main>
  );
}
