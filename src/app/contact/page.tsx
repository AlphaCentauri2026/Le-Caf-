import React from 'react';
import companyData from '../../data/company.json';
import GlassCard from '../../components/GlassCard';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Header */}
      <header className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="content-max-width mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 readable-text">Contact Us</h1>
            <p className="text-2xl text-gray-700 readable-text">We&apos;d love to hear from you</p>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <section className="relative section-spacing px-6 bg-white">
        <div className="content-max-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <div className="clean-card animate-slide-in-left p-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 readable-text">Get In Touch</h2>
              <form className="space-y-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-lg transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-lg transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-lg transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <GlassCard
                imageSrc="/Le Café images/pexels-pavel-danilyuk-6612575.jpg"
                title="Visit Our Location"
                description={companyData.contact.address}
                variant="clean"
              >
                <div className="mt-6 space-y-4 text-gray-700 readable-text">
                  <p className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <span className="text-lg">{companyData.contact.phone}</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-2xl">✉️</span>
                    <span className="text-lg">{companyData.contact.email}</span>
                  </p>
                </div>
              </GlassCard>

              <div className="clean-card p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-4 text-gray-700 readable-text">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-lg">Monday - Friday</span>
                    <span className="text-lg">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-lg">Saturday</span>
                    <span className="text-lg">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-lg">Sunday</span>
                    <span className="text-lg">7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="clean-card p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110 text-3xl">
                    📘
                  </a>
                  <a href="#" className="text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110 text-3xl">
                    📷
                  </a>
                  <a href="#" className="text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-110 text-3xl">
                    🎵
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="clean-card p-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center readable-text">Find Us</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <GlassCard
                  imageSrc="/Le Café images/pexels-pavel-danilyuk-6612573.jpg"
                  title="Location Overview"
                  description="Our cafe is conveniently located in the heart of Long Island, easily accessible by car or public transportation."
                  variant="clean"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Directions</h3>
                  <div className="text-gray-700 readable-text space-y-4 text-lg">
                    <p className="flex items-start space-x-4">
                      <span className="text-amber-500 text-xl mt-1">•</span>
                      <span>Take the Long Island Expressway (I-495) to exit 52</span>
                    </p>
                    <p className="flex items-start space-x-4">
                      <span className="text-amber-500 text-xl mt-1">•</span>
                      <span>Head north on Broadway for 2 miles</span>
                    </p>
                    <p className="flex items-start space-x-4">
                      <span className="text-amber-500 text-xl mt-1">•</span>
                      <span>Turn left onto Main Street</span>
                    </p>
                    <p className="flex items-start space-x-4">
                      <span className="text-amber-500 text-xl mt-1">•</span>
                      <span>We&apos;re located at 123 Main Street on your right</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Parking</h4>
                  <p className="text-gray-700 readable-text text-lg">Free parking available on-site and street parking nearby.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
