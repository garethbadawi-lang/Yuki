import { HeroSection } from "./HeroSection";
import { HeroTagline } from "./HeroTagline";
import { AccessPassCta } from "./AccessPassCta";
import { VideoGridSection } from "./VideoGridSection";
import { ParticleBackdrop } from "./ParticleBackdrop";

export function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden pb-2">
      <ParticleBackdrop />
      <main>
        <HeroSection />
        <HeroTagline />
        <VideoGridSection />
        <AccessPassCta />
      </main>
    </div>
  );
}
