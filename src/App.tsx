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

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
