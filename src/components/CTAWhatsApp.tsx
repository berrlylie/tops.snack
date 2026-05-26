import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function CTAWhatsApp() {
  return (
    <section id="contact-us" className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-brand-green-leaf rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-brown-dark/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Siap Menghadirkan Kelezatan di Acara Anda?
          </h2>
          
          <p className="text-lg md:text-xl text-brand-beige/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Jangan ragu untuk menghubungi kami mengenai pilihan menu, budget, maupun jadwal pengiriman. Kami siap membantu melengkapi acara Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-brand-green-leaf px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-beige transition-all shadow-xl group"
            >
              <MessageCircle className="mr-3" size={24} />
              Chat via WhatsApp
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </a>
          </div>
          
          <p className="mt-8 text-sm text-brand-beige/60">
            Respon cepat di jam operasional: 07.00 - 18.00 WIB
          </p>
        </motion.div>
      </div>
    </section>
  );
}
