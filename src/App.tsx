import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import HowToOrder from './components/HowToOrder';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTAWhatsApp from './components/CTAWhatsApp';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Admin from './components/Admin'; // 1. Tambahkan import ini

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname); // 2. Tambahkan untuk deteksi /admin

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // 3. Cek jika user membuka /admin
  if (currentRoute === '/admin') {
    return <Admin />;
  }

  const catalogPages = ['#katalog', '#kue-basah', '#kue-kering', '#snack', '#snack-box', '#hampers'];
  const isCatalogPage = catalogPages.includes(currentPath);

  if (isCatalogPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          <Catalog currentPath={currentPath} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <FeaturedProducts />
        <Advantages />
        <Testimonials />
        <HowToOrder />
        <Location />
        <FAQ />
        <CTAWhatsApp />
      </main>
      <Footer />
    </div>
  );
}
