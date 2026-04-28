import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";

const incallPlans = [
  {
    duration: "60 minutes",
    rate: "£250",
    notes: "Private incall appointment in a secure, respectful setting.",
  },
  {
    duration: "2 hours",
    rate: "£450",
    notes: "Extended session with extra time for a relaxed pace.",
  },
  {
    duration: "Overnight (10 hours)",
    rate: "£1,600",
    notes: "Overnight booking with agreed schedule and boundaries.",
  },
];

const outcallPlans = [
  {
    duration: "60 minutes",
    rate: "£300",
    notes: "Outcall within approved service zones.",
  },
  {
    duration: "2 hours",
    rate: "£550",
    notes: "Extended outcall with travel and arrival window included.",
  },
  {
    duration: "Overnight (10 hours)",
    rate: "£1,900",
    notes: "Overnight outcall with prior verification and deposit.",
  },
];

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a face-to-face appointment with incall and outcall options.",
};

export default function BookingPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <header className="text-center">
        <h1 className="text-balance font-[family-name:var(--font-fraunces)] text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Booking
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-violet-200/75 sm:text-base">
          Request a face-to-face booking using the options below. All bookings are
          handled with clear boundaries, mutual respect, and advance confirmation.
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-amber-200/20 bg-amber-400/10 px-5 py-4 text-sm leading-relaxed text-amber-100 sm:px-6">
        Booking requests are reviewed before confirmation. Availability, location,
        and screening requirements may apply.
      </section>

      <section className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-white/12 bg-black/30 p-5 shadow-[0_0_60px_-16px_rgba(168,85,247,0.62)] backdrop-blur-xl sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Incall Rates
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-violet-100/75">
            Hosted appointments at a private location.
          </p>
          <ul className="mt-5 space-y-3">
            {incallPlans.map((plan) => (
              <li
                key={`incall-${plan.duration}`}
                className="rounded-xl border border-white/10 bg-black/25 px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{plan.duration}</p>
                  <p className="text-sm font-extrabold tracking-wide text-violet-100">
                    {plan.rate}
                  </p>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-violet-200/70">
                  {plan.notes}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 shadow-[0_0_44px_-16px_rgba(167,139,250,0.5)] backdrop-blur-sm sm:p-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white">
            Outcall Rates
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-violet-100/75">
            Travel-based appointments to your agreed location.
          </p>
          <ul className="mt-5 space-y-3">
            {outcallPlans.map((plan) => (
              <li
                key={`outcall-${plan.duration}`}
                className="rounded-xl border border-white/10 bg-black/25 px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{plan.duration}</p>
                  <p className="text-sm font-extrabold tracking-wide text-violet-100">
                    {plan.rate}
                  </p>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-violet-200/70">
                  {plan.notes}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-8">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight text-white">
          Booking Request Form
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-violet-200/70">
          Share your preferred arrangement and you will receive a confirmation or
          follow-up question once your request has been reviewed.
        </p>

        <BookingForm />
      </section>
    </main>
  );
}
