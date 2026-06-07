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
import Admin from './components/Admin';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [currentRoute] = useState(window.location.pathname);

  // 1. Pantau perubahan hash saat user sudah di dalam aplikasi
  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // 2. Fungsi untuk melakukan scroll ke elemen target
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // 3. Jalankan scroll saat path atau hash berubah
  useEffect(() => {
    if (currentPath && currentRoute === '/') {
      scrollToSection(currentPath);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath, currentRoute]);

  // 4. Jalankan scroll saat halaman pertama kali dimuat (mencegah navigasi gagal saat reload)
  useEffect(() => {
    if (window.location.hash) {
      scrollToSection(window.location.hash);
    }
  }, []);

  if (currentRoute === '/admin') return <Admin />;

  const catalogPages = ['#katalog', '#kue-basah', '#kue-kering', '#snack', '#snack-box', '#hampers'];
  const isCatalogPage = catalogPages.includes(currentPath);

  if (isCatalogPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
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
