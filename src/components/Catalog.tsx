import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

export default function Catalog() {
  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack, saya ingin memesan *${productName}* (Rp ${price}). Bagaimana cara pemesanannya?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brand-brown-dark mb-4">Kue Basah & Kering</h1>
          <p className="text-brand-brown-medium text-lg">
            Pilihan jajanan pasar terfavorit yang selalu dibuat fresh dan tanpa pengawet.
          </p>
        </div>

        {/* Desain Grid Produk Mirip Figma */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-brand-beige/10 rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden bg-brand-beige/30 p-2 rounded-t-2xl">
                <img
                  src={(product as any).image || `https://picsum.photos/seed/${product.name}/600/600`}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h4 className="font-bold text-brand-brown-dark text-sm mb-1 line-clamp-1">{product.name}</h4>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-brand-brown-dark text-sm">Rp {product.price}</span>
                  <a
                    href={getProductWhatsAppLink(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green-leaf/20 text-brand-green-leaf p-2 rounded-lg hover:bg-brand-green-leaf hover:text-white transition-colors duration-300"
                  >
                    <ShoppingCart size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
