"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/photos", label: "Photos" },
  { href: "/movies", label: "Movies" },
  { href: "/booking", label: "Booking" },
] as const;

const authLinks = [
  { href: "/login", label: "Sign In" },
  { href: "/register", label: "Join Now" },
] as const;

const linkClass =
  "text-[calc(0.875rem*1.4)] font-medium text-neutral-300 transition-colors duration-150 hover:text-white";

const mobileLinkClass =
  "inline-flex min-h-14 w-full items-center justify-start border-b border-white/10 px-0 py-2 text-left text-[calc(1rem*1.4)] font-medium text-neutral-200 transition-colors hover:text-white";

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 md:py-4">
        <Link
          href="/"
          prefetch
          className="shrink-0 font-[family-name:var(--font-fraunces)] text-[calc(1.125rem*1.4)] font-extrabold tracking-tight text-white sm:text-[calc(1.25rem*1.4)]"
        >
          Yuki
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-6 md:flex md:gap-8 lg:gap-10">
          <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} prefetch className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Account" className="flex shrink-0 items-center gap-4 lg:gap-5">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={
                  link.href === "/register"
                    ? "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white px-5 text-[calc(0.875rem*1.4)] font-semibold text-black transition-colors hover:bg-neutral-200"
                    : `${linkClass} whitespace-nowrap`
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-black px-3 text-[calc(0.875rem*1.4)] font-medium text-neutral-200 transition-colors hover:border-white/25 hover:text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="site-nav-links"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-neutral-200" />
            <span className="block h-0.5 w-5 rounded-full bg-neutral-200" />
            <span className="block h-0.5 w-5 rounded-full bg-neutral-200" />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/80 transition-opacity duration-150 ease-out md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <nav
          id="site-nav-links"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-black px-6 py-6 transition-transform duration-150 ease-out will-change-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="font-[family-name:var(--font-fraunces)] text-[calc(1.25rem*1.4)] font-bold text-white">
              Menu
            </p>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 px-4 text-[calc(0.875rem*1.4)] font-medium text-neutral-200 transition-colors hover:border-white/25 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                prefetch
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={`mobile-auth-${link.href}`}
                href={link.href}
                prefetch
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
