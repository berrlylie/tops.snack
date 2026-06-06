import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [produk, setProduk] = useState({ 
    nama: '', 
    harga: '', 
    deskripsi: '', 
    gambar: '', 
    kategori: 'Snack', 
    is_best_seller: false 
  });

  const tambahProduk = async () => {
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produk)
      });
      if (res.ok) {
        alert('Produk berhasil ditambah!');
        setProduk({ nama: '', harga: '', deskripsi: '', gambar: '', kategori: 'Snack', is_best_seller: false });
      } else {
        alert('Gagal menambah produk.');
      }
    } catch (e) { 
      alert('Error: ' + e); 
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-brand-beige/20">
        <h2 className="text-xl font-bold mb-4">Login Admin</h2>
        <input 
          type="password" 
          placeholder="Masukkan Password" 
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded mb-4"
        />
        <button 
          onClick={() => password === 'topssnack2026' ? setIsAuthenticated(true) : alert('Password Salah!')}
          className="bg-brand-green-leaf text-white px-6 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      
      {/* Layout Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Nama Produk</label>
          <input 
            type="text" 
            autoComplete="off"
            placeholder="Contoh: Arem-Arem"
            value={produk.nama}
            onChange={(e) => setProduk({...produk, nama: e.target.value})} 
            className="border p-2 rounded w-full" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Harga (Contoh: 2.000)</label>
          <input 
            type="text" 
            placeholder="Contoh: 2.000"
            value={produk.harga}
            onChange={(e) => setProduk({...produk, harga: e.target.value})} 
            className="border p-2 rounded w-full" 
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-semibold text-sm">Deskripsi</label>
          <textarea 
            placeholder="Contoh: Nasi dengan isian ayam suwir yang gurih..."
            value={produk.deskripsi}
            onChange={(e) => setProduk({...produk, deskripsi: e.target.value})} 
            className="border p-2 rounded w-full h-24" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Link Gambar</label>
          <input 
            type="text" 
            placeholder="Contoh: /aremarem.png"
            value={produk.gambar}
            onChange={(e) => setProduk({...produk, gambar: e.target.value})} 
            className="border p-2 rounded w-full" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Kategori</label>
          <select 
            className="border p-2 rounded w-full"
            onChange={(e) => setProduk({...produk, kategori: e.target.value})}
            value={produk.kategori}
          >
            <option value="Kue Basah">Kue Basah</option>
            <option value="Kue Kering">Kue Kering</option>
            <option value="Snack">Snack</option>
            <option value="Snack Box">Snack Box</option>
            <option value="Hampers">Hampers</option>
          </select>
        </div>
      </div>

      <label className="flex items-center my-8 gap-2 cursor-pointer">
        <input 
          type="checkbox" 
          checked={produk.is_best_seller}
          onChange={(e) => setProduk({...produk, is_best_seller: e.target.checked})}
          className="w-5 h-5"
        />
        <span className="font-semibold">Jadikan Best Seller</span>
      </label>

      <button 
        onClick={tambahProduk} 
        className="bg-brand-green-leaf text-white p-4 w-full rounded font-bold hover:bg-brand-green-leaf/90 transition-colors"
      >
        Simpan ke Katalog
      </button>
    </div>
  );
}
