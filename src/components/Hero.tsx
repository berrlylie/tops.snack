import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    // pt-32: memberi ruang agar tidak tertutup navbar. pb-16: mengurangi padding bawah agar tidak terlalu tinggi.
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green-soft/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-green-leaf/10 text-brand-green-leaf text-xs font-bold tracking-widest uppercase mb-4">
              Jajanan Pasar Premium
            </span>
            
            {/* Font judul diperkecil sedikit agar tidak dominan */}
            <h1 className="text-4xl md:text-6xl font-bold text-brand-brown-dark leading-[1.1] mb-6">
              Nikmati Jajanan <span className="text-brand-green-leaf">Tradisional</span> untuk Setiap Momen
            </h1>
            
            {/* Font deskripsi dibuat lebih nyaman dibaca */}
            <p className="text-base md:text-lg text-brand-brown-medium mb-8 leading-relaxed max-w-lg">
              Tops Snack hadir dengan aneka jajanan pasar dengan cita rasa yang autentik, kualitas terjaga, dan dibuat fresh setiap harinya. Cocok untuk berbagai kebutuhan, mulai dari acara keluarga hingga hampers spesial.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center bg-brand-brown-dark text-white px-6 py-3 rounded-full font-bold text-base hover:bg-brand-brown-medium transition-all duration-300 shadow-md group"
              >
                Lihat Produk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border-2 border-brand-green-leaf text-brand-green-leaf px-6 py-3 rounded-full font-bold text-base hover:bg-brand-green-leaf hover:text-white transition-all duration-300"
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

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-md mx-auto lg:mx-0">
              <img
                src="/homepict.png"
                alt="Jajanan Pasar Tradisional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 -left-4 md:-left-6 bg-white p-4 rounded-2xl shadow-lg border border-brand-beige max-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xs">
                  5+
                </div>
                <div className="text-[10px] font-bold text-brand-brown-dark leading-tight">
                  Tahun Pengalaman
                </div>
              </div>
              <p className="text-[9px] text-brand-brown-medium">Konsisten sajikan kualitas.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
