import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Call to Action Section with Hero Image */}
      <section className="relative section-spacing px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Le Café images/pexels-igor-haritanovich-814387-1695052.jpg"
            alt="Cozy cafe interior with warm lighting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-amber-900/30" />
        </div>

        <div className="relative z-10 content-max-width mx-auto">
          <div className="text-center mb-16">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 readable-text drop-shadow-2xl">
                Discover Le Café
              </h2>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto readable-text leading-relaxed drop-shadow-lg">
                Explore our world of artisanal coffee, delicious pastries, and the warm community that makes Le Café special.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover-effect border border-white/50 hover:bg-white">
                <div className="text-5xl mb-6">🏪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">About Us</h3>
                <p className="text-gray-700 readable-text text-lg leading-relaxed">Learn about our story and what makes Le Café special</p>
              </div>
            </Link>

            <Link href="/menu" className="group">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover-effect border border-white/50 hover:bg-white">
                <div className="text-5xl mb-6">☕</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Our Menu</h3>
                <p className="text-gray-700 readable-text text-lg leading-relaxed">Discover our selection of coffees, pastries, and treats</p>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover-effect border border-white/50 hover:bg-white">
                <div className="text-5xl mb-6">📸</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Gallery</h3>
                <p className="text-gray-700 readable-text text-lg leading-relaxed">See the moments and creations that define our café</p>
              </div>
            </Link>

            <Link href="/testimonials" className="group">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover-effect border border-white/50 hover:bg-white">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Testimonials</h3>
                <p className="text-gray-700 readable-text text-lg leading-relaxed">Read what our community has to say about us</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
