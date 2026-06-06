import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center pt-28 pb-12 overflow-hidden w-full">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green-soft/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Flexbox agar konten saling mendekat di tengah */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content (Teks) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:max-w-xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-green-leaf/10 text-brand-green-leaf text-xs font-bold tracking-widest uppercase mb-4">
              Jajanan Pasar Premium
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-brand-brown-dark leading-[1.1] mb-6">
              Nikmati Jajanan <span className="text-brand-green-leaf">Tradisional</span> untuk Setiap Momen
            </h1>
            
            <p className="text-base md:text-lg text-brand-brown-medium mb-8 leading-relaxed">
              Tops Snack menyediakan berbagai pilihan jajanan pasar, kue basah, kue kering, snack box, hampers, dan aneka camilan lainnya yang dibuat fresh setiap hari. Dengan cita rasa yang terjaga dan kualitas terbaik, kami siap melengkapi berbagai momen spesial, mulai dari acara keluarga, rapat kantor, syukuran, hingga perayaan bersama orang terdekat.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center bg-brand-brown-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-brown-medium transition-all duration-300 shadow-md"
              >
                Lihat Produk
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border-2 border-brand-green-leaf text-brand-green-leaf px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-green-leaf hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Fresh Setiap Hari', 'Cocok Untuk Acara', 'Partai Kecil & Besar'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-brand-brown-dark font-medium text-sm">
                  <CheckCircle2 className="text-brand-green-leaf" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content (Gambar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0 w-full lg:w-[500px]"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full">
              <img
                src="/homepict.png"
                alt="Jajanan Pasar Tradisional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card - Digeser ke kiri dengan -left-16 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 -left-16 md:-left-20 bg-white p-5 rounded-2xl shadow-xl border border-brand-beige max-w-[190px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                  5+
                </div>
                <div className="text-xs font-bold text-brand-brown-dark leading-tight">
                  Tahun Pengalaman
                </div>
              </div>
              <p className="text-[10px] text-brand-brown-medium font-medium">Konsisten sajikan kualitas.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
