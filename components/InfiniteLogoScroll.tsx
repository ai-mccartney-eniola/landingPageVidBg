"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Amazon Web Services", logo: "/logos/aws.svg" },
  { name: "Microsoft Azure", logo: "/logos/azure.svg" },
  { name: "Google Cloud Platform", logo: "/logos/gcp.svg" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Netflix", logo: "/logos/netflix.svg" },
  { name: "Spotify", logo: "/logos/spotify.svg" },
];

export default function InfiniteLogoScroll() {
  return (
    <div className="relative z-10 w-full py-12 overflow-hidden bg-gradient-to-b from-transparent via-gray-950/80 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-gray-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </h3>

        {/* Scrolling container */}
        <div className="relative flex overflow-hidden select-none">
          {/* First set of logos */}
          <div className="flex animate-scroll gap-16 pr-16">
            {companies.map((company, idx) => (
              <div
                key={`first-${idx}`}
                className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-white text-xs md:text-sm font-medium text-center px-2">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex animate-scroll gap-16 pr-16" aria-hidden="true">
            {companies.map((company, idx) => (
              <div
                key={`second-${idx}`}
                className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-white text-xs md:text-sm font-medium text-center px-2">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
