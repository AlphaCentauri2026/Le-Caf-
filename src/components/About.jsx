import React from 'react';
import Image from 'next/image';
import companyData from '../data/company.json';
import GlassCard from './GlassCard';

const About = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Le Café images/pexels-igor-haritanovich-814387-1695052.jpg"
          alt="Cozy cafe interior background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                About {companyData.name}
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6 drop-shadow-lg">
                {companyData.description}
              </p>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-lg">Our Philosophy</h3>
                <p className="text-white/90 drop-shadow-md">
                  We believe that great coffee is about more than just the drink—it's about
                  creating moments of connection, comfort, and inspiration for our community.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-6">
              <GlassCard
                imageSrc="/Le Café images/pexels-pavel-danilyuk-6612661.jpg"
                title="Our Space"
                description="A warm and inviting atmosphere perfect for any occasion"
              />
              <GlassCard
                imageSrc="/Le Café images/pexels-roman-odintsov-5836516.jpg"
                title="Rustic Charm"
                description="Authentic wooden tables and cozy seating arrangements"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








