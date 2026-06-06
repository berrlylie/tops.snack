import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

export default function FeaturedProducts() {
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  // 1. Ambil data dari API
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setDbProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error('Gagal memuat produk DB:', err));
  }, []);

  // 2. Gabungkan data statis dan database
  const allProducts = useMemo(() => {
    const formattedDbProducts = dbProducts.map((p: any) => ({
      id: p.id || Math.random().toString(),
      name: p.nama || 'Produk',
      description: p.deskripsi || '',
      price: p.harga || '0',
      // Gunakan placeholder jika gambar dari admin kosong
      image: p.gambar || `https://picsum.photos/seed/${p.nama}/600/600`,
      isBestSeller: p.is_best_seller === true || p.is_best_seller === 1,
      category: p.kategori || 'Snack'
    }));
    return [...PRODUCTS, ...formattedDbProducts];
  }, [dbProducts]);

  // 3. Filter produk Best Seller
  const bestSellerProducts = allProducts.filter((p) => p.isBestSeller === true);

  const getProductWhatsAppLink = (productName: string, price: string) => {
    const message = `Halo Tops Snack! Saya tertarik mau pesan *${productName}*. Apakah bisa pesan untuk dikirim tanggal...?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-brown-dark mb-12">Produk Unggulan</h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellerProducts.length > 0 ? (
            bestSellerProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-beige/30 rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-green-leaf/30 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.src = 'https://picsum.photos/600/600')}
                  />
                  <div className="absolute top-2 left-2 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Best Seller
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-brand-brown-dark line-clamp-1">{product.name}</h4>
                  <p className="font-bold text-brand-brown-dark">Rp {product.price}</p>
                  <a 
                    href={getProductWhatsAppLink(product.name, product.price)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 block bg-brand-green-leaf text-white text-center py-2 rounded-lg hover:bg-brand-brown-dark transition-colors"
                  >
                    Pesan
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-brand-brown-medium italic">Belum ada produk unggulan saat ini.</p>
          )}
        </div>
      </div>
    </section>
  );
}
