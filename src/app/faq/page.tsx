import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions and site guidance.",
};

export default function FaqPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        FAQ
      </h1>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-violet-200/70 sm:text-base">
        Quick answers about scheduling, messaging, and general site info.
      </p>

      <section className="mt-10 space-y-5 rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-8">
        <div>
          <h2 className="text-lg font-bold text-white">How do I get in touch?</h2>
          <p className="mt-2 text-sm leading-relaxed text-violet-200/75">
            Use the <Link className="underline underline-offset-4" href="/contact" prefetch>Contact</Link> page and
            send a general inquiry. You&apos;ll receive a response when your
            message is reviewed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Do you offer quotes?</h2>
          <p className="mt-2 text-sm leading-relaxed text-violet-200/75">
            For verified quotes, follow the process described on the{" "}
            <Link className="underline underline-offset-4" href="/rates" prefetch>
              Membership Plans
            </Link>{" "}
            page.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Where are your legal pages?</h2>
          <p className="mt-2 text-sm leading-relaxed text-violet-200/75">
            Terms, Privacy, DMCA, and reporting are available in the footer links.
          </p>
        </div>
      </section>
    </main>
  );
}

