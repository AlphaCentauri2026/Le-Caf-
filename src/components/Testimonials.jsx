import React from 'react';
import Image from 'next/image';
import testimonialsData from '../data/testimonials.json';
import GlassCard from './GlassCard';

const Testimonials = () => {
  // Map testimonials to customer images
  const testimonialImages = [
    "/Le Café images/pexels-bianca-gasparoto-834990-1752806.jpg",
    "/Le Café images/pexels-chevanon-324028.jpg",
    "/Le Café images/pexels-jayoke-851555.jpg"
  ];

  return (
    <section className="relative section-spacing px-6 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="content-max-width mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 readable-text">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto readable-text leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
              <GlassCard
                imageSrc={testimonialImages[index]}
                title={testimonial.name}
                variant="clean"
                className="h-full"
              >
                <div className="flex text-amber-400 mb-6 justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg readable-text leading-relaxed text-center">
                  "{testimonial.feedback}"
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;








