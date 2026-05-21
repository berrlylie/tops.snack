import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Mail, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="kontak" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* BAGIAN KIRI: Peta (Maps) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-white relative"
          >
            {/* Animasi Peta Bawaan Kamu */}
            <div className="absolute inset-0 bg-brand-beige/50 flex flex-col items-center justify-center p-8 text-center">
              <MapPin size={64} className="text-brand-green-leaf mb-4 opacity-20" />
              <p className="text-brand-brown-medium font-medium">
                Peta interaktif akan muncul di sini.<br />Kami berlokasi di pusat kota untuk memudahkan akses.
              </p>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-brand-green-leaf rounded-full animate-ping absolute opacity-20"></div>
                <div className="w-12 h-12 bg-brand-green-leaf rounded-full flex items-center justify-center text-white shadow-lg relative">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: Detail Kontak & Sosmed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-green-leaf uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-brand-brown-dark mb-8">Kunjungi & Hubungi Kami</h3>
            
            <div className="space-y-6">
              
              {/* Info Lokasi */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Lokasi Toko</h4>
                  <p className="text-brand-brown-medium">Jl. Tradisi No. 123, Kel. Rasa, Kec. Nikmat, Kota Kuliner, 12345</p>
                </div>
              </div>

              {/* Info Telepon / WA */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Phone className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">WhatsApp / Telepon</h4>
                  <p className="text-brand-brown-medium">+62 812-3456-7890</p>
                </div>
              </div>

              {/* Info Email */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Mail className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Email</h4>
                  <p className="text-brand-brown-medium">halo@topssnack.com</p>
                </div>
              </div>

              {/* Info Sosial Media */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Instagram className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Sosial Media</h4>
                  <a href="#" className="text-brand-brown-medium hover:text-brand-green-leaf font-medium transition-colors">@topssnack</a>
                </div>
              </div>

            </div>

            {/* Tombol Maps */}
            <div className="mt-10">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-brown-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-brown-medium transition-all shadow-md"
              >
                Buka di Google Maps
                <Navigation size={18} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}