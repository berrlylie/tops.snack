import { useState, useEffect, useMemo } from 'react'; // Tambahkan ini
// ... import lainnya

export default function Catalog({ currentPath }: { currentPath: string }) {
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  // 1. Ambil data dari database setiap kali halaman dimuat
  useEffect(() => {
    fetch('/api/products') // Pastikan endpoint ini sesuai dengan API yang kamu buat
      .then((res) => res.json())
      .then((data) => setDbProducts(data))
      .catch((err) => console.error('Gagal mengambil data:', err));
  }, []);

  // 2. Gabungkan data statis dari constants dan data dinamis dari DB
  const allProducts = useMemo(() => {
    return [...PRODUCTS, ...dbProducts];
  }, [dbProducts]);

  // ... (sisa kode)

  return (
    // ...
    {displayedCategories.map((category, index) => {
      // 3. Gunakan allProducts, BUKAN PRODUCTS
      const categoryProducts = allProducts.filter((p) => p.category === category.name);
      
      // ... (sisanya sama)
    })}
  )
}
