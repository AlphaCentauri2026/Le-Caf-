import React from 'react';
import Image from 'next/image';
import menuData from '../../data/menu.json';
import GlassCard from '../../components/GlassCard';
import Navigation from '../../components/Navigation';

const MenuPage = () => {
  // Map menu items to appropriate images
  const menuImages: Record<string, string> = {
    "Espresso": "/Le Café images/pexels-natri-129207.jpg",
    "Cappuccino": "/Le Café images/pexels-juanpphotoandvideo-894695.jpg",
    "Latte": "/Le Café images/pexels-pixabay-414630.jpg",
    "Croissant": "/Le Café images/pexels-ketut-subiyanto-4350068.jpg",
    "Muffin": "/Le Café images/pexels-ketut-subiyanto-4350068.jpg"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Header */}
      <header className="relative h-64 overflow-hidden pt-16">
        <Image
          src="/Le Café images/pexels-roman-odintsov-5836516.jpg"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">Our Menu</h1>
            <p className="text-xl drop-shadow-lg">Freshly brewed coffee and baked goods made with love</p>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {Array.from({length: 144}).map((_, i) => (
                <div key={i} className="border border-amber-200" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <GlassCard
                  imageSrc={menuImages[item.name]}
                  title={item.name}
                  description={item.description}
                  className="h-full"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-400 drop-shadow-lg">
                      {item.price}
                    </span>
                  </div>
                  <button className="w-full bg-amber-600/90 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-white/20">
                    Add to Order
                  </button>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Special Offers Section */}
          <div className="mt-16 text-center">
            <div className="backdrop-blur-md bg-black/30 border border-white/30 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl text-shadow-strong">Special Offers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3 text-shadow-strong">Coffee of the Month</h3>
                  <p className="text-white/95 text-shadow-strong leading-relaxed">Try our seasonal Ethiopian blend - $2 off this month!</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3 text-shadow-strong">Loyalty Program</h3>
                  <p className="text-white/95 text-shadow-strong leading-relaxed">Buy 5 coffees, get your 6th free!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
