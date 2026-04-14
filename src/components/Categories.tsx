import { motion } from 'motion/react';
import { Coffee, Cookie, Package, Gift, Calendar } from 'lucide-react';
import { CATEGORIES } from '../constants';

const iconMap: Record<string, any> = {
  Coffee,
  Cookie,
  Package,
  Gift,
  Calendar,
};

export default function Categories() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green-leaf uppercase tracking-widest mb-4">Kategori</h2>
          <h3 className="text-4xl font-bold text-brand-brown-dark">Pilihan Menu Kami</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green-leaf transition-colors duration-300">
                  <Icon className="text-brand-green-leaf group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h4 className="font-bold text-brand-brown-dark text-lg">{category.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
