import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengatur kapan transisi (blur & warna) navbar terjadi
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
    // DESAIN NAVBAR: Melekat penuh di atas dengan efek kaca (Sticky Frosted)
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // Saat di-scroll: latar belakang beige/putih dengan blur & bayangan
        isScrolled ? 'bg-brand-beige/95 backdrop-blur-md shadow-md py-2 border-b border-brand-brown-light/10' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* BAGIAN LOGO & NAMA BRAND - DIKEMBALIKAN */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              {/* Ukuran logo ramping untuk navbar yang melekat penuh */}
              <img 
                src="/Logotopssnack.png"
                alt="Logo Tops Snack" 
                className="h-12 w-auto object-contain"
              />
              {/* Teks "Tops Snack" dikembalikan dengan warna cokelat tua & hijau */}
              <span className="text-2xl font-bold text-brand-brown-dark tracking-tight font-serif">
                Tops <span className="text-brand-green-leaf">Snack</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu - JARAK DIRAPATKAN (space-x-5) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-5">
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown-dark hover:text-brand-green-leaf p-2 rounded-lg"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Diubah agar melekat penuh di bawah navbar utama) */}
      {isOpen && (
        <div className="md:hidden bg-brand-beige backdrop-blur-md shadow-xl border-t border-brand-brown-light/10">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-brand-brown-dark hover:text-brand-green-leaf font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full text-center bg-brand-green-leaf text-white px-6 py-3 rounded-xl font-semibold mt-6 shadow-sm mx-auto"
            >
              <ShoppingBag size={18} />
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
