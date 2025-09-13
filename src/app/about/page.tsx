import React from 'react';
import companyData from '../../data/company.json';
import GlassCard from '../../components/GlassCard';
import Navigation from '../../components/Navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Header */}
      <header className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="content-max-width mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 readable-text">About {companyData.name}</h1>
            <p className="text-2xl text-gray-700 readable-text">{companyData.tagline}</p>
          </div>
        </div>
      </header>

      {/* About Content */}
      <section className="relative section-spacing px-6 bg-white">
        <div className="content-max-width mx-auto">
          {/* Story Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200/50 rounded-3xl p-12 shadow-xl">
              <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center readable-text">Our Story</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed readable-text">
                    {companyData.description}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed readable-text">
                    Founded with a passion for exceptional coffee and genuine hospitality, Le Café has become
                    a beloved gathering place for our community. Every cup we serve tells a story of quality,
                    care, and connection.
                  </p>
                </div>
                <div>
                  <GlassCard
                    imageSrc="/Le Café images/pexels-roman-odintsov-5836516.jpg"
                    title="Our Space"
                    description="A warm and inviting atmosphere perfect for any occasion"
                    variant="clean"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            <div className="animate-fade-in-up">
              <GlassCard
                imageSrc="/Le Café images/pexels-orlovamaria-4946715.jpg"
                title="Premium Beans"
                description="Carefully sourced and expertly roasted coffee beans from around the world"
                variant="clean"
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <GlassCard
                imageSrc="/Le Café images/pexels-shkrabaanthony-6281459.jpg"
                title="Expert Baristas"
                description="Our skilled baristas craft each drink with passion and precision"
                variant="clean"
              />
            </div>
            <div className="animate-fade-in-up delay-500">
              <GlassCard
                imageSrc="/Le Café images/pexels-orlovamaria-4947415.jpg"
                title="Community Focus"
                description="A welcoming space where friendships are made and memories created"
                variant="clean"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center readable-text">Visit Us</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Location & Contact</h3>
                  <div className="space-y-4 text-gray-700 readable-text text-lg">
                    <p className="flex items-start space-x-4">
                      <span className="text-2xl">📍</span>
                      <span>{companyData.contact.address}</span>
                    </p>
                    <p className="flex items-center space-x-4">
                      <span className="text-2xl">📞</span>
                      <span>{companyData.contact.phone}</span>
                    </p>
                    <p className="flex items-center space-x-4">
                      <span className="text-2xl">✉️</span>
                      <span>{companyData.contact.email}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h4>
                  <div className="text-gray-700 readable-text space-y-2 text-lg">
                    <p><span className="font-semibold">Monday - Friday:</span> 6:00 AM - 8:00 PM</p>
                    <p><span className="font-semibold">Saturday - Sunday:</span> 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <GlassCard
                  imageSrc="/Le Café images/pexels-pavel-danilyuk-6612573.jpg"
                  title="Find Us"
                  description="Located in the heart of Long Island, easily accessible and perfect for a quick stop or a leisurely visit"
                  variant="clean"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
