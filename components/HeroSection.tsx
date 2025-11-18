"use client";

import VideoBackground from "./VideoBackground";
import HeroContent from "./HeroContent";
import InfiniteLogoScroll from "./InfiniteLogoScroll";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Video Background */}
      <VideoBackground />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-24 md:py-32">
        <HeroContent />
      </div>

      {/* Bottom: Logo Scroll - Fixed at bottom */}
      <div className="relative z-20 mt-auto">
        <InfiniteLogoScroll />
      </div>
    </section>
  );
}
