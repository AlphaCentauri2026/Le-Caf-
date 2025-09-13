"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white drop-shadow-lg hover:text-amber-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Le Café
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-amber-400 px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/menu">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20">
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-400 hover:bg-white/20 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden backdrop-blur-md bg-black/30 border-t border-white/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            href="/testimonials"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-amber-400 block px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-white/10"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <div className="pt-4 pb-2">
            <Link href="/menu" onClick={closeMenu}>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
