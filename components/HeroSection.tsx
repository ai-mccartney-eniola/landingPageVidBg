"use client";

import VideoBackground from "./VideoBackground";
import CallToAction from "./CallToAction";
import InfiniteLogoScroll from "./InfiniteLogoScroll";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground />

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto min-h-screen flex flex-col justify-between py-12">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side: Call to Action */}
            <CallToAction />

            {/* Right side: Could add additional content or keep empty for asymmetric design */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Bottom: Logo Scroll */}
        <div className="mt-auto">
          <InfiniteLogoScroll />
        </div>
      </div>
    </section>
  );
}
