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
      title: "Latte Art",
      image: "/Le Café images/pexels-natri-129207.jpg",
      description: "Beautiful latte art in every cup"
    },
    {
      id: 6,
      title: "Happy Customers",
      image: "/Le Café images/pexels-bianca-gasparoto-834990-1752806.jpg",
      description: "Satisfied customers enjoying their coffee"
    }
  ];

  return (
    <section className="relative section-spacing px-6 overflow-hidden bg-gray-50">
      <div className="content-max-width mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 readable-text">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto readable-text leading-relaxed">
            Experience the warm atmosphere and delicious creations at Le Café
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <GlassCard
                imageSrc={item.image}
                title={item.title}
                description={item.description}
                variant="clean"
                className="h-full"
              >
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
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








