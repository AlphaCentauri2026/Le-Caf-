import React from 'react';
import Image from 'next/image';
import menuData from '../data/menu.json';
import GlassCard from './GlassCard';

const Menu = () => {
  // Map menu items to appropriate images
  const menuImages = {
    "Espresso": "/Le Café images/pexels-natri-129207.jpg",
    "Cappuccino": "/Le Café images/pexels-juanpphotoandvideo-894695.jpg",
    "Latte": "/Le Café images/pexels-pixabay-414630.jpg",
    "Croissant": "/Le Café images/pexels-ketut-subiyanto-4350068.jpg",
    "Muffin": "/Le Café images/pexels-ketut-subiyanto-4350068.jpg"
  };

  return (
    <section className="relative section-spacing px-6 bg-white">
      <div className="content-max-width mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 readable-text">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto readable-text leading-relaxed">
            Freshly brewed coffee and baked goods made with love every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {menuData.map((item, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
              <GlassCard
                imageSrc={menuImages[item.name]}
                title={item.name}
                description={item.description}
                variant="clean"
                className="h-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
                  Add to Order
                </button>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Special Offers</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Coffee of the Month</h4>
                <p className="text-gray-700 readable-text">Try our seasonal Ethiopian blend - $2 off this month!</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Loyalty Program</h4>
                <p className="text-gray-700 readable-text">Buy 5 coffees, get your 6th free!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;








