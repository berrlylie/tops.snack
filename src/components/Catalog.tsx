import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Catalog() {
  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack! Saya tertarik mau pesan *${productName}*. Apakah bisa pesan untuk dikirim tanggal...?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const getCategoryDescription = (categoryName: string) => {
    switch (categoryName) {
      case 'Kue Basah': 
        return 'Pilihan kue basah yang selalu dibuat fresh dan tanpa pengawet.';
      case 'Kue Kering': 
        return 'Pilihan jajanan pasar terfavorit yang paling banyak dipesan oleh pelanggan kami.';
      case 'Snack': 
        return 'Berbagai pilihan snack manis dan asin yang cocok dinikmati di segala suasana.';
      case 'Snack Box': 
        return 'Paket praktis berbagai varian rasa untuk menemani setiap acara spesial Anda.';
      case 'Hampers': 
        return 'Bingkisan cantik nan exclusif, cocok untuk dibagikan kepada orang terkasih.';
      default: 
        return 'Pilihan produk terbaik dan berkualitas dari Tops Snack.';
    }
  };

  return (
    <div id="katalog" className="scroll-mt-24">
      {CATEGORIES.map((category, index) => {
        const categoryProducts = PRODUCTS.filter(p => p.category === category.name);
        const bgColor = index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white';

        return (
          <section key={category.id} className={`py-16 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-brand-brown-dark mb-3">{category.name}</h2>
                <p className="text-brand-brown-medium text-lg max-w-2xl mx-auto">
                  {getCategoryDescription(category.name)}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product, pIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                      className="bg-white rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 group shadow-sm hover:shadow-md flex flex-col"
                    >
                      <div className="relative aspect-square overflow-hidden bg-brand-beige/30 p-2 rounded-t-2xl">
                        <img
                          src={(product as any).image || `https://picsum.photos/seed/${product.name}/600/600`}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Label Best Seller di pojok kiri atas foto */}
                        {product.isBestSeller && (
                          <div className="absolute top-4 left-4 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
                            <Star size={10} fill="currentColor" />
                            Best Seller
                          </div>
                        )}
                        {/* Pojok kanan atas KOSONG tanpa label jenis kue */}
                      </div>

                       {/* Bagian teks menggunakan flex-col & flex-grow agar tombol selalu rapi di bawah */}
                        <div className="p-4 flex flex-col flex-grow">
                          <h4 className="font-bold text-brand-brown-dark text-sm mb-1 line-clamp-1">{product.name}</h4>
                          
                          {/* Tambahkan whitespace-pre-line di baris bawah ini */}
                          <p className="text-xs text-brand-brown-medium/80 mt-1 mb-4 flex-grow whitespace-pre-line">
                            {product.description}
                          </p>

                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-brand-beige/40">
                          <span className="font-bold text-brand-brown-dark text-sm">Rp {product.price}</span>
                          <a
                            href={getProductWhatsAppLink(product.name, product.price)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-green-leaf/10 text-brand-green-leaf p-2 rounded-lg hover:bg-brand-green-leaf hover:text-white transition-colors duration-300"
                          >
                            <ShoppingCart size={16} />
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
