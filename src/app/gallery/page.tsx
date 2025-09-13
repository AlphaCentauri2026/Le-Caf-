import React from 'react';
import Gallery from '../../components/Gallery';
import Navigation from '../../components/Navigation';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <header className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
        <div className="content-max-width mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 readable-text">Our Gallery</h1>
            <p className="text-2xl text-gray-700 readable-text">Explore the moments and creations that make Le Café special</p>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
