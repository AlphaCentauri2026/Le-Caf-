import React from 'react';
import Image from 'next/image';
import companyData from '../../data/company.json';
import GlassCard from '../../components/GlassCard';
import Navigation from '../../components/Navigation';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Header */}
      <header className="relative h-64 overflow-hidden pt-16">
        <Image
          src="/Le Café images/pexels-pavel-danilyuk-6612573.jpg"
          alt="Cafe location"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">Contact Us</h1>
            <p className="text-xl drop-shadow-lg">We&apos;d love to hear from you</p>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl">Get In Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-white/90 font-medium mb-2 drop-shadow-md">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2 drop-shadow-md">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2 drop-shadow-md">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right">
              <GlassCard
                imageSrc="/Le Café images/pexels-pavel-danilyuk-6612575.jpg"
                title="Visit Our Location"
                description={companyData.contact.address}
              >
                <div className="mt-4 space-y-2 text-white/90 drop-shadow-md">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    {companyData.contact.phone}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span>
                    {companyData.contact.email}
                  </p>
                </div>
              </GlassCard>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-2xl">Business Hours</h3>
                <div className="space-y-2 text-white/90 drop-shadow-md">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-2xl">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 drop-shadow-md">
                    📘 Facebook
                  </a>
                  <a href="#" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 drop-shadow-md">
                    📷 Instagram
                  </a>
                  <a href="#" className="text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 drop-shadow-md">
                    🎵 TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl text-center">Find Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <GlassCard
                  imageSrc="/Le Café images/pexels-pavel-danilyuk-6612573.jpg"
                  title="Location Overview"
                  description="Our cafe is conveniently located in the heart of Long Island, easily accessible by car or public transportation."
                >
                </GlassCard>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">Directions</h3>
                <div className="text-white/90 drop-shadow-md space-y-2">
                  <p>• Take the Long Island Expressway (I-495) to exit 52</p>
                  <p>• Head north on Broadway for 2 miles</p>
                  <p>• Turn left onto Main Street</p>
                  <p>• We&apos;re located at 123 Main Street on your right</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">Parking</h4>
                  <p className="text-white/90 drop-shadow-md">Free parking available on-site and street parking nearby.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
