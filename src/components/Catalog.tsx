import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Catalog({ currentPath }: { currentPath: string }) {
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setDbProducts(data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  const allProducts = [...PRODUCTS, ...dbProducts];

  const getProductWhatsAppLink = (name: string, price: string) => {
    const message = `Halo Tops Snack! Saya tertarik mau pesan *${name}* seharga ${price}. Apakah bisa pesan untuk dikirim tanggal...?`;
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

  const listMulaiDari = ['Bolu Jadul', 'Nastar', 'Kastengel', 'Putri Salju', 'Kue Kacang', 'Bola-Bola Cokeat', 'Sagu Keju', 'Hampers Lebaran', 'Snack Box Custom'];

  return (
    <div id="katalog" className="scroll-mt-24">
      {displayedCategories.map((category, index) => {
        const categoryProducts = allProducts.filter(
          (p: any) => p.category === category.name || p.kategori === category.name
        );
        const bgColor = index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white';

        return (
          <section key={category.id} className={`py-16 ${bgColor} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-brand-brown-dark mb-3">{category.name}</h2>
                <p className="text-brand-brown-medium text-lg max-w-2xl mx-auto">
                  {getCategoryDescription(category.name)}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categoryProducts.length > 0 ? (
                  categoryProducts.map((product: any, pIndex) => (
                    <motion.div key={pIndex} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                      <img 
                        src={product.gambar || product.image || `https://picsum.photos/seed/${product.nama || product.name}/600/600`} 
                        alt={product.nama || product.name} 
                        className="w-full h-40 object-cover" 
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-brand-brown-dark text-sm mb-1 line-clamp-1">
                          {product.nama || product.name}
                        </h4>
                        <p className="text-xs text-brand-brown-medium/80 mt-1 mb-4 flex-grow whitespace-pre-line">
                          {product.deskripsi || product.description}
                        </p>
                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-brand-beige/40">
                          <div>
                            {listMulaiDari.includes(product.nama || product.name) && (
                              <span className="text-[10px] text-brand-brown-medium block">Mulai dari</span>
                            )}
                            <span className="font-bold text-brand-brown-dark text-sm">
                              Rp {product.harga || product.price}
                            </span>
                          </div>
                          <a 
                            href={getProductWhatsAppLink(product.nama || product.name, product.harga || product.price)} 
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-brand-green-leaf/10 text-brand-green-leaf p-2 rounded-lg hover:bg-brand-green-leaf hover:text-white transition-colors duration-300"
                          >
                            <ShoppingCart size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-brand-brown-medium italic">Produk belum tersedia.</p>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
