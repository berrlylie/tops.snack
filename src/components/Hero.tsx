import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green-soft/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green-leaf/10 text-brand-green-leaf rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Jajanan Pasar Premium
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-brown-dark leading-tight mb-6">
              Nikmati Jajanan <span className="text-brand-green-leaf">Tradisional</span> untuk Setiap Momen
            </h1>
            <p className="text-lg md:text-xl text-brand-brown-medium mb-10 leading-relaxed max-w-lg">
              Tops Snack hadir dengan aneka jajanan pasar dengan cita rasa yang autentik, kualitas terjaga, dan dibuat fresh setiap harinya. Cocok untuk berbagai kebutuhan, mulai dari acara keluarga, konsumsi kantor, arisan, hingga hampers untuk moment moment spesial lainnya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produk"
                className="inline-flex items-center justify-center bg-brand-brown-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-brown-medium transition-all duration-300 shadow-lg group"
              >
                Lihat Produk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border-2 border-brand-green-leaf text-brand-green-leaf px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green-leaf hover:text-white transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="mr-2" size={20} />
                Hubungi WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                'Fresh Setiap Hari',
                'Cocok Untuk Acara',
                'Partai Kecil & Besar',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-brand-brown-dark font-medium">
                  <CheckCircle2 className="text-brand-green-leaf" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/snack/800/800"
                alt="Jajanan Pasar Tradisional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-beige max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                  6+
                </div>
                <div className="text-xs font-bold text-brand-brown-dark leading-tight">
                  Tahun Pengalaman
                </div>
              </div>
              <p className="text-[10px] text-brand-brown-medium">
                Menjaga resep warisan keluarga tetap autentik.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
