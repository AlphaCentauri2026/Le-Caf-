import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Cozy Interior",
      image: "/Le Café images/pexels-igor-haritanovich-814387-1695052.jpg",
      description: "Our warm and inviting cafe space"
    },
    {
      id: 2,
      title: "Fresh Brew",
      image: "/Le Café images/pexels-shkrabaanthony-6281459.jpg",
      description: "Expert baristas crafting perfect espresso"
    },
    {
      id: 3,
      title: "Morning Light",
      image: "/Le Café images/pexels-pavel-danilyuk-6612573.jpg",
      description: "Beautiful outdoor seating area"
    },
    {
      id: 4,
      title: "Artisan Pastries",
      image: "/Le Café images/pexels-ketut-subiyanto-4350068.jpg",
      description: "Freshly baked goods made daily"
    },
    {
      id: 5,
      title: "Coffee Beans",
      image: "/Le Café images/pexels-orlovamaria-4946715.jpg",
      description: "Premium roasted coffee beans"
    },
    {
      id: 6,
      title: "Community Space",
      image: "/Le Café images/pexels-orlovamaria-4947415.jpg",
      description: "Where friends and memories are made"
    },
    {
      id: 7,
      title: "Latte Art",
      image: "/Le Café images/pexels-natri-129207.jpg",
      description: "Beautiful latte art in every cup"
    },
    {
      id: 8,
      title: "Outdoor Seating",
      image: "/Le Café images/pexels-pavel-danilyuk-6612575.jpg",
      description: "Perfect spot for people watching"
    },
    {
      id: 9,
      title: "Happy Customers",
      image: "/Le Café images/pexels-bianca-gasparoto-834990-1752806.jpg",
      description: "Satisfied customers enjoying their coffee"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({length: 64}).map((_, i) => (
              <div key={i} className="border border-amber-200" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the warm atmosphere and delicious creations at Le Café
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <GlassCard
                imageSrc={item.image}
                title={item.title}
                description={item.description}
                className="h-full transform transition-all duration-500 hover:scale-105"
              >
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm">
                  View Details
                </button>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;








