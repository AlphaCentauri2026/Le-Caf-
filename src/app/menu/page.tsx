import React from 'react';
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
      <header className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="content-max-width mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 readable-text">Our Menu</h1>
            <p className="text-2xl text-gray-700 readable-text">Freshly brewed coffee and baked goods made with love</p>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <section className="relative section-spacing px-6 bg-white">

        <div className="content-max-width mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
            {menuData.map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
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
          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 readable-text">Special Offers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Coffee of the Month</h3>
                  <p className="text-gray-700 readable-text text-lg">Try our seasonal Ethiopian blend - $2 off this month!</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Loyalty Program</h3>
                  <p className="text-gray-700 readable-text text-lg">Buy 5 coffees, get your 6th free!</p>
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
