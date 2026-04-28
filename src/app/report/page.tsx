import type { Metadata } from "next";
import { ReportForm } from "@/components/legal/ReportForm";

export const metadata: Metadata = {
  title: "Report A Profile",
  description: "Submit a content, safety, or account concern report.",
};

export default function ReportPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Report A Profile
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-violet-100/80 sm:text-base">
          Use this form to report concerns related to safety, account conduct, or
          platform content for review.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        This is placeholder legal copy and should be reviewed by a qualified
        legal professional before launch.
      </section>

      <section className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
          Submit a report
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-violet-100/75">
          Frontend-only form preview. Submissions are not connected to a backend yet.
        </p>
        <ReportForm />
      </section>
    </main>
  );
}
