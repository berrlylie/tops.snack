import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_LINK, FACEBOOK_LINK, FACEBOOK_HANDLE, WHATSAPP_LINK } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: INSTAGRAM_LINK },
    { icon: Facebook, href: FACEBOOK_LINK },
    { icon: MessageCircle, href: WHATSAPP_LINK },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Products', href: '#katalog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <footer className="bg-brand-brown-dark text-brand-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-bold text-white mb-6 block font-serif">
              Tops <span className="text-brand-green-soft">Snack</span>
            </a>
            <p className="text-brand-beige/70 mb-8 leading-relaxed">
              Penyedia jajanan pasar tradisional premium yang mengutamakan rasa autentik, kebersihan, dan pelayanan terbaik untuk setiap pelanggan.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
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
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-beige/70 hover:text-brand-green-soft transition-colors"
                  >
                    {link.name}
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
                    RT.05/RW.03, Dusun II Prompong, Kutasari, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail className="text-brand-green-soft flex-shrink-0" size={20} />
                  <p className="text-brand-beige/70 text-sm">{EMAIL_ADDRESS}</p>
                </div>
                <div className="flex gap-4">
                  <Instagram className="text-brand-green-soft flex-shrink-0" size={20} />
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-beige/70 text-sm hover:text-brand-green-soft transition-colors"
                  >
                    @{INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Facebook className="text-brand-green-soft flex-shrink-0" size={20} />
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-beige/70 text-sm hover:text-brand-green-soft transition-colors"
                  >
                    {FACEBOOK_HANDLE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-sm text-brand-beige/50">
          <p>© {currentYear} Tops Snack. Seluruh Hak Cipta Dilindungi.</p>
          <p className="mt-2">Dibuat dengan ❤️ untuk pecinta kuliner tradisional.</p>
        </div>
      </div>
    </footer>
  );
}
