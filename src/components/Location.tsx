import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Mail, Instagram } from 'lucide-react';
import { WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_LINK } from '../constants';

export default function Location() {
  return (
    <section id="kontak" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* BAGIAN KIRI: Peta Google Maps Interaktif */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-white relative"
          >
            {/* INI KODE EMBED GOOGLE MAPS-NYA */}
            <iframe
              src="https://maps.google.com/maps?q=Tops%20Snack%20Kutasari%20Baturaden&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Tops Snack"
            ></iframe>
          </motion.div>

          {/* BAGIAN KANAN: Detail Kontak & Sosmed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-brand-brown-dark mb-8">Kunjungi & Hubungi Kami</h3>
            
            <div className="space-y-6">
              
              {/* Info Lokasi */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Rumah Produksi</h4>
                  <p className="text-brand-brown-medium">RT.05/RW.03, Dusun II Prompong, Kutasari, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53151</p>
                </div>
              </div>

              {/* Info Telepon / WA */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Phone className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">WhatsApp / Telepon</h4>
                  <p className="text-brand-brown-medium">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>

              {/* Info Email */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Mail className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Email</h4>
                  <p className="text-brand-brown-medium">{EMAIL_ADDRESS}</p>
                </div>
              </div>

              {/* Info Sosial Media */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Instagram className="text-brand-green-leaf" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark mb-1">Instagram</h4>
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-brown-medium hover:text-brand-green-leaf font-medium transition-colors">@{INSTAGRAM_HANDLE}</a>
                </div>
              </div>

            </div>

            {/* Tombol Maps */}
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tops+Snack+Kutasari+Baturaden&query_place_id=ChIJ6dFFvixE8QoRrk_iKamulbI"
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
