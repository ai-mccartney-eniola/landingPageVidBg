"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
            Eleventh House
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#vault"
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Vault Coming Soon
            </Link>
            <Link
              href="#login"
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="#investor-relations"
              className="text-gray-300 hover:text-white transition-colors font-medium px-6 py-2 border-2 border-orange-500 rounded-full hover:bg-orange-500"
            >
              Investor Relations
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#vault"
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Vault Coming Soon
              </Link>
              <Link
                href="#login"
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#investor-relations"
                className="text-gray-300 hover:text-white transition-colors font-medium text-center px-6 py-2 border-2 border-orange-500 rounded-full hover:bg-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Investor Relations
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
