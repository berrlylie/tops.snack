import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [produk, setProduk] = useState({ nama: '', harga: '', deskripsi: '', gambar: '', kategori: 'Snack', is_best_seller: false });

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-brand-beige/20">
        <h2 className="text-xl font-bold mb-4">Login Admin</h2>
        <input 
          type="password" placeholder="Masukkan Password" 
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded mb-4"
        />
        <button 
          onClick={() => password === 'topssnack2026' ? setIsAuthenticated(true) : alert('Password Salah!')}
          className="bg-brand-green-leaf text-white px-6 py-2 rounded"
        >Login</button>
      </div>
    );
  }

  const tambahProduk = async () => {
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produk)
      });
      if (res.ok) alert('Produk berhasil ditambah!');
      else alert('Gagal menambah produk.');
    } catch (e) { alert('Error: ' + e); }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Admin Panel</h1>
      <input type="text" placeholder="Nama Produk" onChange={(e) => setProduk({...produk, nama: e.target.value})} className="border p-2 w-full mb-3" />
      <input type="text" placeholder="Harga" onChange={(e) => setProduk({...produk, harga: e.target.value})} className="border p-2 w-full mb-3" />
      <textarea placeholder="Deskripsi" onChange={(e) => setProduk({...produk, deskripsi: e.target.value})} className="border p-2 w-full mb-3" />
      <input type="text" placeholder="Link Gambar" onChange={(e) => setProduk({...produk, gambar: e.target.value})} className="border p-2 w-full mb-3" />
      <button onClick={tambahProduk} className="bg-brand-green-leaf text-white p-4 w-full rounded">Simpan ke Katalog</button>
    </div>
  );
}
