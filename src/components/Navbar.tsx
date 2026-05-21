import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#produk' },
    { name: 'About Us', href: '#tentang' },
    { name: 'Testimonials', href: '#testimoni' },
    { name: 'Contact Us', href: '#kontak' },
  ];

  return (
    // Bagian ini diubah untuk memberi jarak dari atas layar (top-4)
    <nav className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      
      {/* Kotak kapsulnya diberi efek melengkung (rounded-full) */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 rounded-full ${
          isScrolled ? 'bg-brand-beige/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* BAGIAN LOGO & NAMA BRAND */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src="/Logotopssnack.png"
                alt="Logo Tops Snack" 
                className="w-20 h-20 object-contain"
              />
              <span className="text-2xl font-bold text-brand-brown-dark tracking-tight font-serif">
                Tops <span className="text-brand-green-leaf">Snack</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-brown-dark hover:text-brand-green-leaf font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green-leaf text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-green-soft transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <ShoppingBag size={18} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown-dark hover:text-brand-green-leaf p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Diubah jadi melengkung ala kartu melayang) */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-brand-beige/95 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-brand-brown-dark hover:text-brand-green-leaf hover:bg-white/50 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-green-leaf text-white px-6 py-3 rounded-xl font-semibold mt-6 shadow-sm"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
