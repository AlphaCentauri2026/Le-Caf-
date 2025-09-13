import React from 'react';
import Testimonials from '../../components/Testimonials';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <header className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="content-max-width mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 readable-text">What Our Customers Say</h1>
            <p className="text-2xl text-gray-700 readable-text">Hear from the community that loves Le Café</p>
          </div>
        </div>
      </header>

      {/* Testimonials Content */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
