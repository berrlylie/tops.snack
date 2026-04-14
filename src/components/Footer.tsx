import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown-dark text-brand-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-bold text-white mb-6 block font-serif">
              Asosiasi <span className="text-brand-green-soft">Tops Snack</span>
            </a>
            <p className="text-brand-beige/70 mb-8 leading-relaxed">
              Penyedia jajanan pasar tradisional premium yang mengutamakan rasa autentik, kebersihan, dan pelayanan terbaik untuk setiap pelanggan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-green-leaf transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Menu Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Produk', 'Tentang', 'Testimoni', 'Lokasi', 'Kontak'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-brand-beige/70 hover:text-brand-green-soft transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">
                    Jl. Tradisi No. 123, Kel. Rasa, Kec. Nikmat, Kota Kuliner, 12345
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">+{WHATSAPP_NUMBER}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">halo@topssnack.com</p>
                </div>
                <div className="flex gap-4">
                  <Instagram className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">@topssnack_official</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-sm text-brand-beige/50">
          <p>© {currentYear} Asosiasi Tops Snack. Seluruh Hak Cipta Dilindungi.</p>
          <p className="mt-2">Dibuat dengan ❤️ untuk pecinta kuliner tradisional.</p>
        </div>
      </div>
    </footer>
  );
}
