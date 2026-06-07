import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function CTAWhatsApp() {
  return (
    <section id="contact-us" className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-brand-green-leaf rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
        {/* Decorative Circles - Dikecilkan ukurannya agar tidak terlalu ramai */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-brown-dark/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Siap Menghadirkan Kelezatan di Acara Anda?
          </h2>
          
          <p className="text-sm md:text-lg text-brand-beige/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Jangan ragu bertanya mengenai menu, budget, atau jadwal pengiriman. Kami siap membantu melengkapi acara Anda.
          </p>
          
          <div className="flex justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-green-leaf px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-beige transition-all shadow-lg group"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat via WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
          
          <p className="mt-6 text-xs text-brand-beige/60">
            Respon cepat di jam operasional: 09.00 - 17.00 WIB
          </p>
        </motion.div>
      </div>
    </section>
  );
}
