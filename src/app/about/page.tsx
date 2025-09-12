import React from 'react';
import Image from 'next/image';
import companyData from '../../data/company.json';
import GlassCard from '../../components/GlassCard';
import Navigation from '../../components/Navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Header */}
      <header className="relative h-64 overflow-hidden pt-16">
        <Image
          src="/Le Café images/pexels-igor-haritanovich-814387-1695052.jpg"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">About {companyData.name}</h1>
            <p className="text-xl drop-shadow-lg">{companyData.tagline}</p>
          </div>
        </div>
      </header>

      {/* About Content */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="mb-16">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl text-center">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 drop-shadow-lg">
                    {companyData.description}
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed drop-shadow-lg">
                    Founded with a passion for exceptional coffee and genuine hospitality, Le Café has become
                    a beloved gathering place for our community. Every cup we serve tells a story of quality,
                    care, and connection.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <GlassCard
                    imageSrc="/Le Café images/pexels-roman-odintsov-5836516.jpg"
                    title="Our Space"
                    description="A warm and inviting atmosphere perfect for any occasion"
                  >
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="animate-fade-in-up">
              <GlassCard
                imageSrc="/Le Café images/pexels-orlovamaria-4946715.jpg"
                title="Premium Beans"
                description="Carefully sourced and expertly roasted coffee beans from around the world"
              >
              </GlassCard>
            </div>
            <div className="animate-fade-in-up delay-300">
              <GlassCard
                imageSrc="/Le Café images/pexels-shkrabaanthony-6281459.jpg"
                title="Expert Baristas"
                description="Our skilled baristas craft each drink with passion and precision"
              >
              </GlassCard>
            </div>
            <div className="animate-fade-in-up delay-500">
              <GlassCard
                imageSrc="/Le Café images/pexels-orlovamaria-4947415.jpg"
                title="Community Focus"
                description="A welcoming space where friendships are made and memories created"
              >
              </GlassCard>
            </div>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl text-center">Visit Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">Location & Hours</h3>
                <div className="space-y-2 text-white/90 drop-shadow-md">
                  <p>📍 {companyData.contact.address}</p>
                  <p>📞 {companyData.contact.phone}</p>
                  <p>✉️ {companyData.contact.email}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">Hours:</h4>
                  <div className="text-white/90 drop-shadow-md space-y-1">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <GlassCard
                  imageSrc="/Le Café images/pexels-pavel-danilyuk-6612573.jpg"
                  title="Find Us"
                  description="Located in the heart of Long Island, easily accessible and perfect for a quick stop or a leisurely visit"
                >
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
