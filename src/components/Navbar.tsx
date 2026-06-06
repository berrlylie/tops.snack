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
    <nav className="fixed w-full z-50 top-3 px-4 transition-all duration-300">
      {/* py-2.5 memberikan ketinggian yang pas: tidak terlalu tipis, tidak terlalu besar */}
      <div className="max-w-7xl mx-auto px-6 transition-all duration-300 rounded-full bg-brand-beige/95 backdrop-blur-md shadow-md border border-brand-brown-dark/5 py-2.5">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="/Logotopssnack.png"
                alt="Logo Tops Snack" 
                // Ukuran logo sedikit dibesarkan dari 9 ke 11
                className="h-10 md:h-11 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] text-brand-brown-dark hover:text-brand-green-leaf font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              // Padding tombol sedikit ditambah agar seimbang dengan tinggi navbar
              className="bg-brand-green-leaf text-white px-6 py-2.5 rounded-full text-[15px] font-semibold hover:bg-brand-green-soft transition-all shadow-sm flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Pesan Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown-dark p-2"
            >
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
