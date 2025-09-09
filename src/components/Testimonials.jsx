import React from 'react';
import Image from 'next/image';
import testimonialsData from '../data/testimonials.json';
import GlassCard from './GlassCard';

const Testimonials = () => {
  // Map testimonials to customer images
  const testimonialImages = [
    "/images/Happy_customer_smiling_with_a_cup_of_coffee_1.jpg",
    "/images/Happy_customer_smiling_with_a_cup_of_coffee_2.jpg",
    "/images/Happy_customer_smiling_with_a_cup_of_coffee_3.jpg"
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Friends_laughing_together_at_a_caf_table_st_1.jpg"
          alt="Happy customers background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 inline-block shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <GlassCard
                imageSrc={testimonialImages[index]}
                title={testimonial.name}
                className="h-full"
                noBlur={true}
              >
                <div className="flex text-amber-400 mb-4 drop-shadow-lg">
                  ★★★★★
                </div>
                <p className="text-white/90 italic text-lg drop-shadow-md">
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







