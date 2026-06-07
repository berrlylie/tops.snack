import { motion } from 'motion/react';
import { Quote, User } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-4">Apa Kata Mereka?</h3>
          <p className="text-sm md:text-base text-brand-brown-medium max-w-2xl mx-auto px-4">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka memesan di Asosiasi Tops Snack.
          </p>
        </div>

        {/* grid-cols-1 di HP (1 kolom), md:grid-cols-3 di desktop (sejajar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Padding dikurangi (p-6) agar tidak terasa terlalu lebar/besar di HP
              className="bg-white p-6 md:p-10 rounded-3xl shadow-sm relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Ikon quote diperkecil untuk mobile */}
              <div className="absolute top-4 right-6 md:top-6 md:right-8 text-brand-green-leaf/20 group-hover:text-brand-green-leaf/40 transition-colors">
                <Quote size={32} md:size={48} fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 mb-6">
                {/* Avatar */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-beige flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 md:w-7 md:h-7 text-brand-brown-medium" strokeWidth={1.5} />
                </div>
                
                <div>
                  <h4 className="font-bold text-brand-brown-dark text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-[10px] md:text-xs text-brand-green-leaf font-semibold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              {/* Teks testimoni dengan ukuran font responsif */}
              <p className="text-sm md:text-base text-brand-brown-medium italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
