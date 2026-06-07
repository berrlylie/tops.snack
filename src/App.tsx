import { useState, useEffect, useLayoutEffect } from 'react';
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
import Admin from './components/Admin';

export default function App() {
  // Gunakan state untuk memicu re-render saat lokasi berubah
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Fungsi scroll yang lebih stabil
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Jalankan scroll saat path berubah (tetapi bukan saat masuk ke katalog)
  useLayoutEffect(() => {
    const catalogPages = ['#katalog', '#kue-basah', '#kue-kering', '#snack', '#snack-box', '#hampers'];
    if (currentPath && !catalogPages.includes(currentPath)) {
      scrollToSection(currentPath);
    } else if (!currentPath || currentPath === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  if (window.location.pathname === '/admin') return <Admin />;

  const catalogPages = ['#katalog', '#kue-basah', '#kue-kering', '#snack', '#snack-box', '#hampers'];
  // DETEKSI LANGSUNG: Gunakan hash saat ini, jangan cuma state
  const isCatalogPage = catalogPages.includes(window.location.hash);

  if (isCatalogPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Catalog currentPath={window.location.hash} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about-us"><About /></section>
        <section id="categories"><Categories /></section>
        <FeaturedProducts />
        <Advantages />
        <section id="testimonials"><Testimonials /></section>
        <HowToOrder />
        <Location />
        <section id="faq"><FAQ /></section>
        <CTAWhatsApp />
      </main>
      <Footer />
    </div>
  );
}
