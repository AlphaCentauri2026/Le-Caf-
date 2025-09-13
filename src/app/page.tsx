import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Call to Action Section */}
      <section className="relative section-spacing px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="content-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 readable-text">
              Discover Le Café
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto readable-text leading-relaxed">
              Explore our world of artisanal coffee, delicious pastries, and the warm community that makes Le Café special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect border border-gray-100">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">About Us</h3>
                <p className="text-gray-600 readable-text">Learn about our story and what makes Le Café special</p>
              </div>
            </Link>

            <Link href="/menu" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect border border-gray-100">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Our Menu</h3>
                <p className="text-gray-600 readable-text">Discover our selection of coffees, pastries, and treats</p>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect border border-gray-100">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Gallery</h3>
                <p className="text-gray-600 readable-text">See the moments and creations that define our café</p>
              </div>
            </Link>

            <Link href="/testimonials" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect border border-gray-100">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Testimonials</h3>
                <p className="text-gray-600 readable-text">Read what our community has to say about us</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
