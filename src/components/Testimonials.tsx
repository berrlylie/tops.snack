import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-brand-brown-dark mb-4">Apa Kata Mereka?</h3>
          <p className="text-brand-brown-medium max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka memesan di Asosiasi Tops Snack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm relative group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-brand-green-leaf/20 group-hover:text-brand-green-leaf/40 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-brand-beige overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/150?u=${testimonial.id}`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark">{testimonial.name}</h4>
                  <p className="text-xs text-brand-green-leaf font-semibold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-brand-brown-medium italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
