import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menentukan apakah user sedang di halaman Katalog
  const isCatalogPage = window.location.pathname !== '/';

  const navLinks = [
    { name: 'Home', href: isCatalogPage ? '/#home' : '#home' },
    { name: 'About Us', href: isCatalogPage ? '/#about-us' : '#about-us' },
    { name: 'Products', href: isCatalogPage ? '/#katalog' : '#katalog' },
    { name: 'Testimonials', href: isCatalogPage ? '/#testimonials' : '#testimonials' },
    { name: 'Contact Us', href: isCatalogPage ? '/#contact-us' : '#contact-us' },
  ];

  const handleNavClick = (e, href) => {
    // Jika di Katalog dan mengklik link utama, biarkan browser pindah ke '/'
    if (isCatalogPage && !href.includes('#katalog')) {
      return; // Biarkan link bekerja secara default untuk pindah halaman
    }
    
    // Jika di halaman utama, gunakan scroll halus
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 top-3 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 rounded-full bg-brand-beige/95 backdrop-blur-md shadow-md border border-brand-brown-dark/5 py-2.5">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/Logotopssnack.png" alt="Logo" className="h-10 md:h-11 w-auto object-contain" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] text-brand-brown-dark hover:text-brand-green-leaf font-semibold transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green-leaf text-white px-6 py-2.5 rounded-full text-[15px] font-semibold hover:bg-brand-green-soft transition-all shadow-sm flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Pesan Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-brown-dark p-2">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 mx-4 bg-brand-beige/95 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-brand-brown-dark/5">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-brand-brown-dark hover:bg-brand-green-leaf/10 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
