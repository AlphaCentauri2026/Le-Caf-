import React from 'react';
import Image from 'next/image';
import companyData from '../data/company.json';
import GlassCard from './GlassCard';

const About = () => {
  return (
    <section className="relative section-spacing px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="content-max-width mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 readable-text">
                About {companyData.name}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed readable-text max-w-2xl">
                {companyData.description}
              </p>
            </div>

            <div className="bg-white border border-gray-200/50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
              <p className="text-gray-700 readable-text leading-relaxed">
                We believe that great coffee is about more than just the drink—it's about
                creating moments of connection, comfort, and inspiration for our community.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-8">
              <GlassCard
                imageSrc="/Le Café images/pexels-pavel-danilyuk-6612661.jpg"
                title="Our Space"
                description="A warm and inviting atmosphere perfect for any occasion"
                variant="clean"
              />
              <GlassCard
                imageSrc="/Le Café images/pexels-roman-odintsov-5836516.jpg"
                title="Rustic Charm"
                description="Authentic wooden tables and cozy seating arrangements"
                variant="clean"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








