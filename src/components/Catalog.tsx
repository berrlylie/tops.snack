import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Catalog({ currentPath }: { currentPath: string }) {
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setDbProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Error:', err));
  }, []);

  const allProducts = useMemo(() => {
    return [...PRODUCTS, ...dbProducts].map((p: any) => ({
      id: p.id || p.id_produk,
      name: p.name || p.nama,
      description: p.description || p.deskripsi,
      price: p.price || p.harga,
      image: p.image || p.gambar,
      isBestSeller: !!p.isBestSeller,
      category: p.category || p.kategori,
      hasStartingPrice: p.hasStartingPrice || false 
    }));
  }, [dbProducts]);

  const activeId = currentPath?.replace('#', '') || '';

  const displayedCategories = useMemo(() => {
    return CATEGORIES.filter((cat) => !activeId || activeId === 'katalog' || cat.id === activeId);
  }, [activeId]);

  const getProductWhatsAppLink = (productName: string) => {
    const message = `Halo Tops Snack! Saya tertarik mau pesan *${productName}*. Apakah bisa pesan untuk dikirim tanggal...?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="katalog" className="scroll-mt-24">
      {displayedCategories.map((category, index) => {
        const categoryProducts = allProducts.filter((p) => p.category === category.name);
        const bgColor = index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white';

        return (
          <section id={category.id} key={category.id} className={`py-16 ${bgColor} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-brand-brown-dark mb-3">{category.name}</h2>
              </div>

              {/* Grid Responsif: 2 kolom di HP, 3 di tablet, 4 di desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product, pIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                      className="w-full"
                    >
                      <div className="w-full bg-white rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all group flex flex-col h-full">
                        
                        {/* Bagian Gambar */}
                        <div className="relative aspect-square overflow-hidden bg-brand-beige/30 p-2 rounded-t-2xl">
                          <img
                            src={product.image || `https://picsum.photos/seed/${product.name}/600/600`}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          {product.isBestSeller && (
                            <div className="absolute top-4 left-4 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
                              <Star size={10} fill="currentColor" /> Best Seller
                            </div>
                          )}
                        </div>

                        {/* Detail Produk */}
                        <div className="p-3 sm:p-4 flex flex-col flex-grow">
                          <h4 className="font-bold text-brand-brown-dark text-sm mb-1 line-clamp-1">{product.name}</h4>
                          <p className="text-xs text-brand-brown-medium/80 mt-1 mb-4 flex-grow line-clamp-2">
                            {product.description}
                          </p>

                          <div className="flex justify-between items-center mt-auto pt-2 border-t border-brand-beige/40">
                            <div>
                              {product.hasStartingPrice && (
                                <span className="text-[10px] text-brand-brown-medium block">Mulai dari</span>
                              )}
                              <span className="font-bold text-brand-brown-dark text-sm">Rp {product.price}</span>
                            </div>

                            <a
                              href={getProductWhatsAppLink(product.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-brand-green-leaf/10 text-brand-green-leaf p-2 rounded-lg hover:bg-brand-green-leaf hover:text-white transition-colors duration-300"
                            >
                              <ShoppingCart size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-brand-brown-medium/60 italic">
                    Belum ada produk di kategori ini.
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
