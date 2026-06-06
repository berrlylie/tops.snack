import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    // pt-32 memberikan ruang agar tidak tertutup navbar fixed/sticky
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green-soft/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green-leaf/10 text-brand-green-leaf rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Jajanan Pasar Premium
            </span>
            
            {/* Ukuran font disesuaikan agar lebih elegan */}
            <h1 className="text-4xl md:text-6xl font-bold text-brand-brown-dark leading-[1.1] mb-6">
              Nikmati Jajanan <span className="text-brand-green-leaf">Tradisional</span> untuk Setiap Momen
            </h1>
            
            <p className="text-base md:text-lg text-brand-brown-medium mb-10 leading-relaxed max-w-lg">
              Tops Snack hadir dengan aneka jajanan pasar dengan cita rasa yang autentik, kualitas terjaga, dan dibuat fresh setiap harinya. Cocok untuk berbagai kebutuhan acara keluarga hingga hampers spesial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center bg-brand-brown-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-brown-medium transition-all duration-300 shadow-md group"
              >
                Lihat Produk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-brand-green-leaf text-brand-green-leaf px-8 py-3 rounded-full font-bold hover:bg-brand-green-leaf hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={18} />
                Hubungi Kami
              </a>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-6">
              {['Fresh Setiap Hari', 'Cocok Untuk Acara', 'Partai Kecil & Besar'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-brand-brown-dark font-medium text-sm">
                  <CheckCircle2 className="text-brand-green-leaf" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/homepict.png"
                alt="Jajanan Pasar Tradisional"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
