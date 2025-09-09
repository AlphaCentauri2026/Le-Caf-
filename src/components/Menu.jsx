import React from 'react';
import Image from 'next/image';
import menuData from '../data/menu.json';
import GlassCard from './GlassCard';

const Menu = () => {
  // Map menu items to appropriate images
  const menuImages = {
    "Espresso": "/images/Closeup_of_latte_art_in_a_ceramic_cup_on_a_0.jpg",
    "Cappuccino": "/images/Barista_serving_cappuccino_in_a_ceramic_cup_0.jpg",
    "Latte": "/images/Topdown_view_of_caf_table_with_cappuccino_c_0.jpg",
    "Croissant": "/images/Flat_lay_of_caf_menu_items_latte_muffins_an_0.jpg",
    "Muffin": "/images/Flat_lay_of_caf_menu_items_latte_muffins_an_1.jpg"
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Cozy_caf_interior_with_rustic_wooden_tables_c_0.jpg"
          alt="Cozy cafe interior background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 inline-block shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Our Menu
            </h2>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Freshly brewed coffee and baked goods made with love every day
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
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
      </div>
    </section>
  );
};

export default Menu;







