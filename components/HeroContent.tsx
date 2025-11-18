"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto px-6 md:px-12"
    >
      {/* Main hero content */}
      <div className="text-center space-y-8">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          Where Industries Meet{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Intelligence
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-light max-w-4xl mx-auto"
        >
          10,000x Faster. Infinitely Smarter.{" "}
          <span className="text-white font-medium">One Platform.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Turning Computational Power into Industrial Revolution
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-orange-500/50 hover:scale-105 min-w-[200px]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-lg rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 min-w-[200px]">
            Learn More
          </button>
        </motion.div>

        {/* Stats or features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">10,000x</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">99.9%</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500">24/7</div>
            <div className="text-sm md:text-base text-gray-400 mt-2">Support</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
