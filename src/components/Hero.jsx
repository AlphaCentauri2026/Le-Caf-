"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Wideangle_shot_of_caf_interior_with_cozy_se_3.jpg",
      alt: "Cozy cafe interior with warm lighting"
    },
    {
      image: "/images/Smiling_barista_behind_an_espresso_machine_0.jpg",
      alt: "Expert barista crafting perfect espresso"
    },
    {
      image: "/images/Friends_laughing_together_at_a_caf_table_st_0.jpg",
      alt: "Friends enjoying coffee together"
    },
    {
      image: "/images/Exterior_of_a_charming_caf_with_outdoor_sea_0.jpg",
      alt: "Beautiful outdoor cafe seating"
    },
    {
      image: "/images/Closeup_of_roasted_coffee_beans_spilling_fr_0.jpg",
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
        {/* Rotating Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-amber-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Glass Card Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in-up">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-slide-in-left">
              Le Café
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg animate-slide-in-right">
              Where Every Cup Tells a Story
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto drop-shadow-md animate-fade-in-up delay-300">
              Experience the perfect blend of artisanal coffee, freshly baked pastries,
              and warm hospitality in our cozy neighborhood café.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <Link href="/menu">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-white/20">
                  Order Online
                </button>
              </Link>
              <Link href="/menu">
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm">
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







