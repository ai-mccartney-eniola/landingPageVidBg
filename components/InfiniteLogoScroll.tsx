"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Amazon Web Services", logo: "/logos/logos_aws.png" },
  { name: "Microsoft Azure", logo: "/logos/logos_microsoft-azure.png" },
  { name: "Google Cloud", logo: "/logos/logos_google.png" },
  { name: "NVIDIA", logo: "/logos/logos_nvidia.png" },
  { name: "Meta", logo: "/logos/logos_meta.png" },
  { name: "IBM", logo: "/logos/logos_ibm.png" },
  { name: "OpenAI", logo: "/logos/logos_openai.png" },
];

export default function InfiniteLogoScroll() {
  return (
    <div className="relative z-20 w-full py-6 overflow-hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider mb-6">
          Cloud Partners
        </h3>

        {/* Scrolling container */}
        <div className="relative flex overflow-hidden select-none">
          {/* First set of logos */}
          <div className="flex animate-scroll gap-6 md:gap-8 pr-6 md:pr-8">
            {companies.map((company, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0"
              >
                {/* Small glassmorphic box like macOS icons */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-2xl hover:bg-white/60 transition-all duration-300 shadow-lg border border-white/20">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={40}
                    height={40}
                    className="object-contain w-9 h-9 md:w-10 md:h-10"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex animate-scroll gap-6 md:gap-8 pr-6 md:pr-8" aria-hidden="true">
            {companies.map((company, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0"
              >
                {/* Small glassmorphic box like macOS icons */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-2xl hover:bg-white/60 transition-all duration-300 shadow-lg border border-white/20">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={40}
                    height={40}
                    className="object-contain w-9 h-9 md:w-10 md:h-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
