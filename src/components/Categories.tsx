import { motion } from 'motion/react';
import { Coffee, Cookie, Croissant, Package, Gift } from 'lucide-react';
import { CATEGORIES } from '../constants'; 

const iconMap: Record<string, any> = {
  Coffee,
  Cookie,
  Croissant,
  Package,
  Gift,
};

export default function Categories() {
  const filteredCategories = CATEGORIES.filter(
    (category) => !category.name.toLowerCase().includes('acara')
  );

  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-brand-brown-dark">Pilihan Menu Kami</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (

              <a
                key={category.id}
                href={`#${category.id}`} // <--- INI BERUBAH AGAR SESUAI NAMA KATEGORI
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group cursor-pointer h-full"
                >
                  <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green-leaf transition-colors duration-300">
                    {Icon ? (
                      <Icon className="text-brand-green-leaf group-hover:text-white transition-colors duration-300" size={32} />
                    ) : (
                      <Cookie className="text-brand-green-leaf group-hover:text-white transition-colors duration-300" size={32} />
                    )}
                  </div>
                  <h4 className="font-bold text-brand-brown-dark text-lg">{category.name}</h4>
                  
                  <span className="text-[11px] text-brand-green-leaf mt-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lihat Menu {category.name}
                  </span>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
