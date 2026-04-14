import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green-leaf uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold text-brand-brown-dark mb-4">Pertanyaan Umum</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="border-2 border-brand-beige rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-beige/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="text-brand-green-leaf" size={20} />
                  <span className="font-bold text-brand-brown-dark">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`text-brand-brown-medium transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-brand-brown-medium leading-relaxed">
                      <div className="h-px bg-brand-beige mb-4"></div>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
