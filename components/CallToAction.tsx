"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 flex flex-col items-start justify-center space-y-6 px-6 md:px-12 lg:px-16"
    >
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-primary text-lg md:text-xl font-semibold tracking-wide uppercase"
      >
        Transform Your Vision
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl"
      >
        Build the Future with{" "}
        <span className="text-primary">Innovation</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed"
      >
        Elevate your business with cutting-edge solutions designed to scale,
        perform, and deliver exceptional results. Join industry leaders who
        trust our platform.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
          Learn More
        </button>
      </motion.div>
    </motion.div>
  );
}
