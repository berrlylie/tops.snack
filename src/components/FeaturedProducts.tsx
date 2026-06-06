import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

export default function FeaturedProducts() {
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  // 1. Ambil data dari database
  useEffect(() => {
    fetch('/api') // Gunakan '/api' agar sama dengan yang sudah berhasil di katalog
      .then((res) => res.json())
      .then((data) => setDbProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Error:', err));
  }, []);

  // 2. Gabungkan data agar 'Best Seller' dari DB terdeteksi
  const allProducts = useMemo(() => {
    const formattedDbProducts = dbProducts.map((p: any) => ({
      id: p.id,
      name: p.nama,
      description: p.deskripsi,
      price: p.harga,
      image: p.gambar,
      isBestSeller: !!p.is_best_seller,
      category: p.kategori
    }));
    return [...PRODUCTS, ...formattedDbProducts];
  }, [dbProducts]);

  // 3. Filter berdasarkan isBestSeller: true
  const bestSellerProducts = allProducts.filter((product) => product.isBestSeller === true).slice(0, 8);

  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack, saya ingin memesan *${productName}* (Mulai dari Rp ${price}). Bagaimana cara pemesanannya?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-4">Produk Unggulan</h3>
            <p className="text-brand-brown-medium text-base md:text-lg">Jajanan pasar terfavorit yang paling banyak dipesan oleh pelanggan setia kami.</p>
          </div>
          <a href="#katalog" className="text-brand-green-leaf font-bold flex items-center gap-2 hover:underline shrink-0">
            Lihat Semua Produk <ShoppingCart size={20} />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {bestSellerProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-beige/30 rounded-2xl md:rounded-3xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || `https://picsum.photos/seed/${product.name}/600/600`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isBestSeller && (
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-brand-gold text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star size={9} md:size={12} fill="currentColor" /> Best Seller
                  </div>
                )}
              </div>

              <div className="p-3 md:p-6 flex flex-col flex-1">
                <h4 className="text-sm md:text-xl font-bold text-brand-brown-dark mb-1 md:mb-2 line-clamp-1">{product.name}</h4>
                <p className="text-[10px] md:text-sm text-brand-brown-medium whitespace-pre-line mb-3 md:mb-4 flex-grow line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-end gap-2 mt-auto pt-2 md:pt-4">
                  <div className="shrink-0">
                    <span className="text-[9px] md:text-xs text-brand-brown-medium block">Mulai dari</span>
                    <span className="text-xs md:text-base font-bold text-brand-brown-dark">Rp {product.price}</span>
                  </div>
                  <a
                    href={getProductWhatsAppLink(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green-leaf text-white p-2 md:px-3 md:py-2 rounded-xl hover:bg-brand-brown-dark transition-colors duration-300 shadow-md flex items-center justify-center"
                  >
                    <span className="hidden md:inline text-xs font-semibold mr-1">Pesan</span>
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
