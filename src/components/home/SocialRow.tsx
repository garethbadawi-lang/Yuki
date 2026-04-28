import Link from "next/link";
import type { ReactNode } from "react";

type SocialItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-11 items-center justify-center sm:size-12">
      {children}
    </span>
  );
}

const items: SocialItem[] = [
  {
    href: "#",
    label: "TikTok",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="currentColor"
          aria-hidden
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "X",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="currentColor"
          aria-hidden
        >
          <path d="M18.22 3H21l-6.68 7.64L22 21h-6.15l-4.8-5.93L6.2 21H3l7.15-8.16L3 3h6.15l4.35 5.34L18.22 3zm-2.15 16h1.75L8.1 5H6.27l9.8 14z" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4.25" />
          <circle cx="17.25" cy="6.75" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="currentColor"
          aria-hidden
        >
          <path d="M21.8 8.001a2.7 2.7 0 0 0-1.89-1.9C18.15 5.75 12 5.75 12 5.75s-6.15 0-7.91.351A2.7 2.7 0 0 0 2.2 8v8a2.7 2.7 0 0 0 1.89 1.9c1.76.35 7.91.35 7.91.35s6.15 0 7.91-.35a2.7 2.7 0 0 0 1.89-1.9V8zM10 14.596V9.404L14.827 12 10 14.596z" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "Email",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" strokeLinecap="round" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "Cash or tip",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </IconWrap>
    ),
  },
  {
    href: "#",
    label: "Link",
    icon: (
      <IconWrap>
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-violet-300 transition-colors group-hover:text-fuchsia-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <path d="M10 14h4a4 4 0 0 0 0-8h-4M14 10h-4a4 4 0 0 0 0 8h4" />
          <path d="M8 12h8" strokeLinecap="round" />
        </svg>
      </IconWrap>
    ),
  },
];

export function SocialRow() {
  return (
    <div className="relative z-10 px-4">
      <nav
        aria-label="Social links"
        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-8"
      >
        {items.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            className="group flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-violet-500/25 bg-violet-950/30 text-violet-200 shadow-[0_0_18px_-10px_rgba(167,139,250,0.5)] transition-colors duration-150 hover:border-fuchsia-400/40 hover:bg-violet-900/40 sm:transition sm:hover:shadow-[0_0_32px_-6px_rgba(236,72,153,0.55)] active:scale-[0.97]"
          >
            <span className="sr-only">{label}</span>
            {icon}
          </a>
        ))}
      </nav>

      <nav
        aria-label="Primary actions"
        className="mx-auto mt-6 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        <Link
          href="/members"
          prefetch
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_26px_-14px_rgba(192,132,252,0.62)] transition-transform duration-150 hover:scale-[1.01] sm:transition sm:hover:shadow-[0_0_56px_-8px_rgba(236,72,153,0.55)]"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          Enter Members Area
        </Link>
        <Link
          href="/rates"
          prefetch
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-black/25 px-4 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          View Plans
        </Link>
        <Link
          href="/booking"
          prefetch
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-black/25 px-4 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          Book Now
        </Link>
        <Link
          href="/login"
          prefetch
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-black/25 px-4 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          Login
        </Link>
        <Link
          href="/register"
          prefetch
          className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-black/25 px-4 text-sm font-medium text-violet-100/85 transition hover:bg-black/35 hover:text-violet-100"
        >
          Join Now
        </Link>
      </nav>
    </div>
  );
}
