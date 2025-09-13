"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Le Café images/pexels-pavel-danilyuk-6612661.jpg",
      alt: "Cozy cafe interior with warm lighting"
    },
    {
      image: "/Le Café images/pexels-shkrabaanthony-6281459.jpg",
      alt: "Expert barista crafting perfect espresso"
    },
    {
      image: "/Le Café images/pexels-orlovamaria-4947415.jpg",
      alt: "Friends enjoying coffee together"
    },
    {
      image: "/Le Café images/pexels-pavel-danilyuk-6612573.jpg",
      alt: "Beautiful outdoor cafe seating"
    },
    {
      image: "/Le Café images/pexels-orlovamaria-4946715.jpg",
      alt: "Premium roasted coffee beans"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Clean Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200"></div>

        {/* Clean Content */}
        <div className="relative z-10 content-max-width mx-auto text-center px-6 animate-fade-in-up">
          <div className="bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 animate-slide-in-left readable-text">
              Le Café
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-10 max-w-3xl mx-auto animate-slide-in-right readable-text font-light">
              Where Every Cup Tells a Story
            </p>
            <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto animate-fade-in-up delay-300 readable-text leading-relaxed">
              Experience the perfect blend of artisanal coffee, freshly baked pastries,
              and warm hospitality in our cozy neighborhood café.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-500">
              <Link href="/menu">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                  Order Online
                </button>
              </Link>
              <Link href="/menu">
                <button className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-10 rounded-xl border-2 border-gray-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">☕</span>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float delay-1000">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🥐</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;








