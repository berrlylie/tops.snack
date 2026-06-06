import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Products', href: '#katalog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    // top-4 tetap ada untuk memberikan jarak dari tepi atas layar
    <nav className="fixed w-full z-50 top-2 px-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-4 transition-all duration-300 rounded-full bg-brand-beige/95 backdrop-blur-md shadow-sm border border-brand-brown-dark/5 ${isScrolled ? 'py-1.5' : 'py-2'}`}>
        <div className="flex justify-between items-center">
          
          {/* Logo - Dikecilkan sedikit agar navbar tidak terlihat gemuk */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="/Logotopssnack.png"
                alt="Logo Tops Snack" 
                className="h-9 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-brand-brown-dark hover:text-brand-green-leaf font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green-leaf text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-green-soft transition-all shadow-sm flex items-center gap-2"
            >
              <ShoppingBag size={16} />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4 bg-brand-beige/95 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-brand-brown-dark/5">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
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
