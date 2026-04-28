const HEADLINE_PINK = "#ec4899";

export function HeroTagline() {
  return (
    <section
      className="relative z-10 w-full bg-[#0a0a0a] px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20"
      aria-labelledby="hero-tagline-heading"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2
          id="hero-tagline-heading"
          className="text-balance font-[family-name:var(--font-fraunces)] text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl"
          style={{ color: HEADLINE_PINK }}
        >
          All The Hottest Videos in Crystal Clear Ultra-HD Quality.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-balance font-sans text-base font-normal leading-relaxed text-white sm:mt-5 sm:text-lg md:text-xl">
          Enjoy unlimited access to download and stream every update on your
          desktop, laptop or favorite mobile device.
        </p>
      </div>
    </section>
  );
}
