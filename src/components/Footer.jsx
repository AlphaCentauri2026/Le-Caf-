"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '../data/company.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Coffee facts that rotate
  const coffeeFacts = [
    "☕ Did you know? Coffee is the second most traded commodity in the world after oil!",
    "🌱 A single coffee tree can produce up to 10 pounds of coffee cherries per year",
    "⚡ Coffee contains over 1,000 chemical compounds and is technically a fruit",
    "🏃 Coffee can improve physical performance by up to 11% according to studies",
    "🧠 Coffee may reduce risk of Parkinson's disease by up to 60%",
    "🌍 There are over 120 species of coffee plants worldwide"
  ];

  const [currentFact, setCurrentFact] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % coffeeFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [coffeeFacts.length]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900">

      <div className="relative z-20 py-16 px-4">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-2xl">
                ☕ Stay Brewed Up!
              </h3>
              <p className="text-white/90 mb-6 drop-shadow-lg max-w-2xl mx-auto">
                Get weekly coffee tips, special offers, and the latest from Le Café delivered to your inbox
              </p>

              {isSubscribed ? (
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-green-300 font-semibold">✨ Thanks for subscribing! Welcome to our coffee family!</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">

            {/* Company Info */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-2xl">{companyData.name}</h3>
              <p className="text-white/90 mb-4 leading-relaxed drop-shadow-lg text-sm">
                {companyData.description}
              </p>
              <p className="text-amber-400 font-medium drop-shadow-lg text-sm">{companyData.tagline}</p>

              {/* Coffee Fact */}
              <div className="mt-6 p-4 bg-amber-500/20 rounded-lg border border-amber-400/30">
                <p className="text-amber-200 text-xs leading-relaxed">
                  {coffeeFacts[currentFact]}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in-up delay-300">
              <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-2xl">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/menu" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 inline-block drop-shadow-md text-sm">🍽️ Our Menu</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 inline-block drop-shadow-md text-sm">🏢 About Us</Link></li>
                <li><Link href="/" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 inline-block drop-shadow-md text-sm">📸 Gallery</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 inline-block drop-shadow-md text-sm">📞 Contact</Link></li>
              </ul>
            </div>

            {/* Hours & Location */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in-up delay-500">
              <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-2xl">Visit Us</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-amber-400 font-medium mb-2">🕒 Hours Today</h5>
                  <div className="text-white/80 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Mon-Fri:</span>
                      <span className="text-green-400">6AM - 8PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat-Sun:</span>
                      <span className="text-green-400">7AM - 9PM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-amber-400 font-medium mb-2">📍 Location</h5>
                  <p className="text-white/80 text-sm">{companyData.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in-up delay-700">
              <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-2xl">Connect</h4>

              {/* Contact Info */}
              <div className="mb-4 space-y-2">
                <p className="text-white/80 text-sm">📞 {companyData.contact.phone}</p>
                <p className="text-white/80 text-sm">✉️ {companyData.contact.email}</p>
              </div>

              {/* Social Links */}
              <div className="mb-4">
                <p className="text-amber-400 font-medium mb-2 text-sm">Follow Our Journey</p>
                <div className="flex space-x-3">
                  {companyData.socials.facebook && (
                    <a href={companyData.socials.facebook} className="text-white/80 hover:text-blue-400 transition-all duration-300 hover:scale-110 drop-shadow-md">
                      📘
                    </a>
                  )}
                  {companyData.socials.instagram && (
                    <a href={companyData.socials.instagram} className="text-white/80 hover:text-pink-400 transition-all duration-300 hover:scale-110 drop-shadow-md">
                      📷
                    </a>
                  )}
                  {companyData.socials.tiktok && (
                    <a href={companyData.socials.tiktok} className="text-white/80 hover:text-black transition-all duration-300 hover:scale-110 drop-shadow-md bg-white/20 rounded p-1">
                      🎵
                    </a>
                  )}
                </div>
              </div>

              {/* Instagram Preview */}
              <div>
                <p className="text-amber-400 font-medium mb-2 text-sm">Latest Posts</p>
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded flex items-center justify-center text-xs">
                      📷
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl animate-fade-in-up delay-1000">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/80 text-sm drop-shadow-lg">
                  © {currentYear} {companyData.name}. Crafted with the finest coffee beans in town.
                </p>
                <p className="text-amber-400 text-xs mt-1">
                  "Where Every Cup Tells a Story" ✨
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-white/60">
                <span>Privacy</span>
                <span>•</span>
                <span>Terms</span>
                <span>•</span>
                <span>Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








