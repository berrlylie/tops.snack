import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

export default function FeaturedProducts() {
  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack, saya ingin memesan *${productName}* (Mulai dari Rp ${price}). Bagaimana cara pemesanannya?`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  const bestSellerProducts = PRODUCTS.filter(
    (product) => product.isBestSeller === true
  ).slice(0, 8);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-bold text-brand-brown-dark mb-4">
              Produk Unggulan
            </h3>

            <p className="text-brand-brown-medium text-lg">
              Jajanan pasar terfavorit yang paling banyak dipesan oleh pelanggan
              setia kami.
            </p>
          </div>

          <a
            href="#katalog"
            className="text-brand-green-leaf font-bold flex items-center gap-2 hover:underline"
          >
            Lihat Semua Produk
            <ShoppingCart size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellerProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-beige/30 rounded-3xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={
                    (product as any).image ||
                    `https://picsum.photos/seed/${product.name}/600/600`
                  }
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    Best Seller
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-green-leaf px-3 py-1 rounded-full text-xs font-bold">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-brand-brown-dark mb-2">
                  {product.name}
                </h4>

                <p className="text-sm text-brand-brown-medium whitespace-pre-line min-h-[80px]">
                  {product.description}
                </p>

                <div className="flex justify-between items-end mt-auto pt-4">
                  <div>
                    <span className="text-xs text-brand-brown-medium block">
                      Mulai dari
                    </span>

                    <span className="text-lg font-bold text-brand-brown-dark">
                      Rp {product.price}
                    </span>
                  </div>

                  <a
                    href={getProductWhatsAppLink(
                      product.name,
                      product.price
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green-leaf text-white p-3 rounded-2xl hover:bg-brand-brown-dark transition-colors duration-300 shadow-md flex items-center gap-1"
                    title={`Pesan ${product.name}`}
                  >
                    <span className="text-xs font-semibold px-1">Pesan</span>
                    <ShoppingCart size={18} />
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
