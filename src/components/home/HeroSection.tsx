"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/** Matches the vivid pink used in the hero photography / site accents */
const HERO_HOT_PINK = "#ec4899";

const CREATOR_NAME = "Yuki";

const slides = [
  {
    src: "/homepage-hero-main.png",
    alt: `${CREATOR_NAME} — featured`,
    title: "Exclusive members preview",
    subtitle: `${CREATOR_NAME} · premium studio`,
  },
  {
    src: "/homepage-hero-side-left.png",
    alt: `${CREATOR_NAME} — portrait`,
    title: "Side portrait — left",
    subtitle: `${CREATOR_NAME} · look one`,
  },
  {
    src: "/homepage-hero-side-right.png",
    alt: `${CREATOR_NAME} — portrait`,
    title: "Side portrait — right",
    subtitle: `${CREATOR_NAME} · look two`,
  },
  {
    src: "/homepage-featured-portrait.png",
    alt: `${CREATOR_NAME} — portrait`,
    title: "Studio session",
    subtitle: `${CREATOR_NAME} · featured set`,
  },
] as const;

const INTERVAL_MS = 4500;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(goNext, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [goNext, reduceMotion]);

  return (
    <section
      className="relative z-10 w-full px-0 pt-2 sm:pt-3"
      style={{ backgroundColor: HERO_HOT_PINK }}
      aria-label="Featured hero"
    >
      <div
        className="relative w-full overflow-hidden border-t border-white/15 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.35)] sm:border-x-0 sm:border-t-0 sm:border-white/12"
        style={{ backgroundColor: HERO_HOT_PINK }}
      >
        <div
          className="relative h-[min(72vh,820px)] min-h-[280px] w-full sm:min-h-[340px]"
          style={{ backgroundColor: HERO_HOT_PINK }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === index ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              {/* Full-bleed image area; caption is overlaid so the photo isn’t cropped above the bar */}
              <div className="absolute inset-0 px-3 pt-4 sm:px-6 sm:pt-6">
                <div className="relative mx-auto h-full w-full max-w-5xl">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80rem"
                    className="object-contain object-center"
                    priority={i === 0}
                    draggable={false}
                  />
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 -bottom-px z-[5] bg-black/70 px-4 py-3 sm:px-6 sm:py-4"
                aria-live={i === index ? "polite" : "off"}
                aria-atomic="true"
              >
                <p className="text-left font-sans text-[calc(0.875rem*1.55)] font-bold leading-snug text-white sm:text-[calc(1rem*1.55)]">
                  {slide.title}
                </p>
                <p
                  className="mt-1 text-left font-sans text-[calc(0.875rem*1.55)] font-normal leading-snug sm:text-[calc(0.95rem*1.55)]"
                  style={{ color: HERO_HOT_PINK }}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
