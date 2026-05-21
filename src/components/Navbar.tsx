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
    { name: 'Beranda', href: '#home' },
    { name: 'Produk', href: '#produk' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-beige/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* BAGIAN LOGO & NAMA BRAND YANG DIUBAH */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src="/Logotopssnack.png"
                alt="Logo Tops Snack" 
                className="w-10 h-10 object-contain"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-beige shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-brand-brown-dark hover:text-brand-green-leaf font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-green-leaf text-white px-6 py-3 rounded-lg font-semibold mt-4"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
