import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Catalog({ currentPath }: { currentPath: string }) {
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        setDbProducts(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error('Gagal memuat produk:', err));
  }, []);

  const allProducts = useMemo(() => {
    const formattedDbProducts = dbProducts.map((p: any) => ({
      id: p.id || Math.random().toString(),
      name: p.nama || p.name || 'Produk Tanpa Nama',
      description: p.deskripsi || p.description || '',
      price: p.harga || p.price || '0',
      image: p.gambar || p.image || '',
      isBestSeller: !!p.is_best_seller || !!p.isBestSeller,
      category: p.kategori || p.category || 'Snack'
    }));
    return [...PRODUCTS, ...formattedDbProducts];
  }, [dbProducts]);

  const getCategoryDescription = (categoryName: string) => {
    const descriptions: Record<string, string> = {
      'Kue Basah': 'Pilihan kue basah yang selalu dibuat fresh dan tanpa pengawet.',
      'Kue Kering': 'Pilihan jajanan pasar terfavorit yang paling banyak dipesan oleh pelanggan kami.',
      'Snack': 'Berbagai pilihan snack manis dan asin yang cocok dinikmati di segala suasana.',
      'Snack Box': 'Paket praktis berbagai varian rasa untuk menemani setiap acara spesial Anda.',
      'Hampers': 'Bingkisan cantik nan exclusif, cocok untuk dibagikan kepada orang terkasih.'
    };
    return descriptions[categoryName] || 'Pilihan produk terbaik dan berkualitas dari Tops Snack.';
  };

  const activeId = currentPath?.replace('#', '') || '';
  const displayedCategories = CATEGORIES.filter((c) => !activeId || activeId === 'katalog' || c.id === activeId);

  return (
    <div id="katalog" className="w-full">
      {displayedCategories.map((category, index) => {
        const categoryProducts = allProducts.filter((p) => p.category === category.name);
        const bgColor = index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white';

        return (
          <section id={category.id} key={category.id} className={`py-12 ${bgColor} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-brand-brown-dark mb-3">{category.name}</h2>
                <p className="text-brand-brown-medium text-lg max-w-2xl mx-auto">{getCategoryDescription(category.name)}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product, pIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                      className="w-[46%] sm:w-[30%] md:w-[22%] lg:w-[18%] bg-white rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
                    >
                      {/* Gambar Produk */}
                      <div className="relative aspect-square overflow-hidden bg-brand-beige/30 p-1.5 sm:p-2">
                        <img
                          src={product.image || `https://picsum.photos/seed/${product.name}/600/600`}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        {product.isBestSeller && (
                          <div className="absolute top-3 left-3 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md">
                            Best Seller
                          </div>
                        )}
                      </div>

                      {/* Detail Produk */}
                      <div className="p-3 flex flex-col flex-grow">
                        <h4 className="font-bold text-brand-brown-dark text-sm mb-1 line-clamp-1">{product.name}</h4>
                        
                        {/* Deskripsi */}
                        <p className="text-[11px] text-brand-brown-medium/80 mb-3 leading-tight flex-grow line-clamp-2">
                          {product.description || 'Nikmati kelezatan jajanan pasar fresh setiap hari.'}
                        </p>
                        
                        {/* Harga & Tombol Pesan */}
                        <div className="mt-auto pt-2 border-t border-brand-beige/40 flex justify-between items-center">
                          <span className="font-bold text-brand-brown-dark text-sm">Rp {product.price}</span>
                          <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo, saya ingin pesan ${product.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-green-leaf text-white p-1.5 rounded-full hover:bg-brand-green-soft transition-colors shadow-sm"
                          >
                            <ShoppingCart size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="w-full text-center py-8 text-brand-brown-medium/60 italic">Belum ada produk dalam kategori ini.</div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
