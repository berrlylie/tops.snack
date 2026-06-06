import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Catalog({ currentPath }: { currentPath: string }) {
  // Daftar produk yang menggunakan label "Mulai dari"
  const productsWithStartingPrice = [
    'Nastar', 'Kastengel', 'Putri Salju', 'Kue Kacang', 
    'Bola-Bola Cokelat', 'Sagu Keju', 'Bolu Jadul', 
    'Hampers Lebaran', 'Snack Box Custom'
  ];

  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack! Saya tertarik mau pesan *${productName}*. Apakah bisa pesan untuk dikirim tanggal...?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const getCategoryDescription = (categoryName: string) => {
    switch (categoryName) {
      case 'Kue Basah': return 'Pilihan kue basah yang selalu dibuat fresh dan tanpa pengawet.';
      case 'Kue Kering': return 'Pilihan jajanan pasar terfavorit yang paling banyak dipesan oleh pelanggan kami.';
      case 'Snack': return 'Berbagai pilihan snack manis dan asin yang cocok dinikmati di segala suasana.';
      case 'Snack Box': return 'Paket praktis berbagai varian rasa untuk menemani setiap acara spesial Anda.';
      case 'Hampers': return 'Bingkisan cantik nan exclusif, cocok untuk dibagikan kepada orang terkasih.';
      default: return 'Pilihan produk terbaik dan berkualitas dari Tops Snack.';
    }
  };

  const activeId = currentPath.replace('#', '');

  const displayedCategories = CATEGORIES.filter((category) => {
    if (!activeId || activeId === 'katalog') return true;
    return category.id === activeId;
  });

  return (
    <div id="katalog" className="scroll-mt-24">
      {displayedCategories.map((category, index) => {
        const categoryProducts = PRODUCTS.filter((p) => p.category === category.name);
        const bgColor = index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white';

        return (
          <section id={category.id} key={category.id} className={`py-16 ${bgColor} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-brand-brown-dark mb-3">{category.name}</h2>
                <p className="text-brand-brown-medium text-lg max-w-2xl mx-auto">{getCategoryDescription(category.name)}</p>
              </div>

              {/* Grid Responsif: 2 kolom HP sampai 5 kolom Desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product, pIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                      className="w-full bg-white rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 group shadow-sm hover:shadow-md flex flex-col"
                    >
                      {/* Gambar Produk */}
                      <div className="relative aspect-square overflow-hidden bg-brand-beige/30 p-1.5 sm:p-2 rounded-t-2xl">
                        <img
                          src={(product as any).image || `https://picsum.photos/seed/${product.name}/600/600`}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.isBestSeller && (
                          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-brand-gold text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold flex items-center gap-1 shadow-lg">
                            <Star size={9} sm:size={10} fill="currentColor" /> Best Seller
                          </div>
                        )}
                      </div>

                      {/* Detail Produk */}
                      <div className="p-2 sm:p-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-brand-brown-dark text-xs sm:text-sm mb-1 line-clamp-1">{product.name}</h4>
                        {/* whitespace-pre-line membuat \n di data deskripsi menjadi baris baru */}
                        <p className="text-[10px] sm:text-xs text-brand-brown-medium/80 mb-3 flex-grow whitespace-pre-line">
                          {product.description}
                        </p>

                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-brand-beige/40">
                          <div>
                            {productsWithStartingPrice.includes(product.name) && (
                              <span className="text-[9px] sm:text-[10px] text-brand-brown-medium block">
                                Mulai dari
                              </span>
                            )}
                            <span className="font-bold text-brand-brown-dark text-xs sm:text-sm">
                              Rp {product.price}
                            </span>
                          </div>

                          <a
                            href={getProductWhatsAppLink(product.name, product.price)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-green-leaf hover:bg-brand-green-leaf/90 text-white p-2 px-3 sm:px-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm"
                          >
                            Pesan <ShoppingCart size={14} />
                          </a>
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
