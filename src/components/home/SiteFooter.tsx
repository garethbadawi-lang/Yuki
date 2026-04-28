import Link from "next/link";
import { SocialRow } from "./SocialRow";

const footerLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/dmca", label: "DMCA" },
  { href: "/report", label: "Report A Profile" },
  { href: "/rates", label: "Membership Plans" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-violet-500/15 bg-black/25 px-4 py-10 sm:bg-black/20 sm:py-12 sm:backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <SocialRow />

        <Link
          href="/register"
          prefetch
          className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full border border-white/15 px-10 py-4 text-base font-semibold tracking-wide text-white shadow-[0_0_30px_-16px_rgba(192,132,252,0.65)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] sm:min-h-[56px] sm:text-lg"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a21caf 45%, #5b21b6 100%)",
          }}
        >
          Join Now
        </Link>

        <p className="text-sm text-violet-300/55">
          © {year}. All rights reserved.
        </p>
        <nav
          aria-label="Legal"
          className="flex flex-col flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-violet-200/65 sm:flex-row sm:gap-y-0"
        >
          {footerLinks.map((link, i) => (
            <span key={link.label} className="contents">
              {i > 0 ? (
                <span
                  className="hidden text-violet-500/30 sm:inline"
                  aria-hidden
                >
                  ·
                </span>
              ) : null}
              <Link
                href={link.href}
                prefetch
                className="transition hover:text-violet-100/90 hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
