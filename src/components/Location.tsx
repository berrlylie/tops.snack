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
            {/* EMBED GOOGLE MAPS */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.721288596274!2d109.23355448769152!3d-7.385098133471206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf1442cbe45d1e9%3A0xb295aea929e24fae!2sTops%20Snack!5e0!3m2!1sid!2sid!4v1779442514585!5m2!1sid!2sid"
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
