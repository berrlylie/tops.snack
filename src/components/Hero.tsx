import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    // Mengubah min-h-[90vh] jadi lebih fleksibel, dan mengurangi padding bawah
    <section id="home" className="relative flex items-center pt-28 pb-10 overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green-soft/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green-leaf/10 text-brand-green-leaf text-[10px] font-bold tracking-widest uppercase mb-4">
              Jajanan Pasar Premium
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown-dark leading-[1.1] mb-5">
              Nikmati Jajanan <span className="text-brand-green-leaf">Tradisional</span> untuk Setiap Momen
            </h1>
            
            <p className="text-sm md:text-base text-brand-brown-medium mb-8 leading-relaxed max-w-md">
              Tops Snack hadir dengan aneka jajanan pasar dengan cita rasa yang autentik, kualitas terjaga, dan dibuat fresh setiap harinya. Cocok untuk berbagai kebutuhan acara keluarga hingga hampers spesial.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center bg-brand-brown-dark text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-brown-medium transition-all duration-300 shadow-md"
              >
                Lihat Produk
                <ArrowRight className="ml-2" size={16} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-brand-green-leaf text-brand-green-leaf px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-green-leaf hover:text-white transition-all"
              >
                <MessageCircle className="mr-2" size={16} />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {['Fresh Setiap Hari', 'Cocok Untuk Acara', 'Partai Kecil & Besar'].map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-brand-brown-dark font-medium text-xs">
                  <CheckCircle2 className="text-brand-green-leaf" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white max-w-sm mx-auto lg:mx-0">
              <img
                src="/homepict.png"
                alt="Jajanan Pasar Tradisional"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 -left-2 md:-left-4 bg-white p-3 rounded-2xl shadow-md border border-brand-beige max-w-[140px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-[10px]">5+</div>
                <div className="text-[9px] font-bold text-brand-brown-dark">Tahun Pengalaman</div>
              </div>
              <p className="text-[8px] text-brand-brown-medium">Konsisten sajikan kualitas.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
