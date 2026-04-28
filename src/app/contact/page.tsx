import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "General inquiries and support.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-violet-200/70 sm:text-base">
        Use the form below to send a general inquiry. For your safety, please keep
        messages respectful and non-graphic.
      </p>

      <section className="mt-10 rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-8">
        <form method="post" className="grid grid-cols-1 gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-violet-200/80">Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-violet-200/80">
              Email
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-violet-200/80">
              Subject
            </span>
            <input
              name="subject"
              type="text"
              className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-violet-200/80">
              Message
            </span>
            <textarea
              name="message"
              rows={6}
              className="min-h-[140px] resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-violet-200/40 focus:border-violet-500/40 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-violet-600/20 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_48px_-8px_rgba(192,132,252,0.65)] transition hover:bg-violet-600/30 hover:shadow-[0_0_64px_-6px_rgba(236,72,153,0.55)] active:scale-[0.98]"
          >
            Send inquiry
          </button>

          <p className="text-xs leading-relaxed text-violet-200/55">
            This demo form currently doesn&apos;t submit to a backend. Connect it
            to your email/API handler when you&apos;re ready.
          </p>
        </form>
      </section>
    </main>
  );
}

