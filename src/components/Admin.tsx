import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [produk, setProduk] = useState({ 
    nama: '', harga: '', deskripsi: '', gambar: '', kategori: '', is_best_seller: false 
  });

  const tambahProduk = async () => {
    if (!produk.kategori) {
      alert('Harap pilih kategori produk terlebih dahulu!');
      return;
    }

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produk)
      });
      if (res.ok) {
        alert('Produk berhasil ditambah!');
        setProduk({ nama: '', harga: '', deskripsi: '', gambar: '', kategori: '', is_best_seller: false });
      } else {
        alert('Gagal menambah produk.');
      }
    } catch (e) { alert('Error: ' + e); }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-brand-beige/20">
        <h2 className="text-xl font-bold mb-4">Login Admin</h2>
        <input type="password" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded mb-4" />
        <button onClick={() => password === 'admin123' ? (setIsAuthenticated(true), setShowGuide(true)) : alert('Password Salah!')} className="bg-brand-green-leaf text-white px-6 py-2 rounded">Login</button>
      </div>
    );
  }

  if (showGuide) {
    return (
      <div className="p-10 max-w-2xl mx-auto min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-brand-brown-dark text-center">Panduan Pengisian Produk</h2>
        <div className="text-left space-y-4 mb-8 bg-brand-beige/30 p-6 rounded-lg border border-brand-beige text-sm">
          <p><strong>1. Nama Produk:</strong> Contoh: Arem-Arem.</p>
          <p><strong>2. Harga:</strong> Tulis angka dengan titik (Contoh: 2.000).</p>
          <p><strong>3. Deskripsi:</strong> Ceritakan keunggulan produk agar pembeli tertarik.</p>
          <p><strong>4. Link Gambar (Google Drive):</strong></p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Pastikan file di Drive sudah di-share aksesnya ke <b>"Anyone with the link"</b>.</li>
            <li>Salin link Google Drive tersebut.</li>
            <li>Ambil kode unik (ID) dari link (contoh: <code>1ABC12345XYZ</code>).</li>
            <li>Gunakan format link ini: <code>http://googleusercontent.com/profile/picture/ID_GAMBAR</code></li>
            <li><b>Contoh lengkap:</b> <code>https://lh3.googleusercontent.com/d/1ABC12345XYZABC12345XYZ</code></li>
          </ul>
          <p><strong>5. Best Seller:</strong> Centang jika produk tersebut termasuk produk terlaris.</p>
        </div>
        <button onClick={() => setShowGuide(false)} className="w-full bg-brand-green-leaf text-white py-3 rounded-lg font-bold hover:bg-brand-green-leaf/90 transition-colors">
          Saya Mengerti, Lanjut!
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button onClick={() => setShowGuide(true)} className="text-sm text-brand-green-leaf underline">Lihat Panduan Lagi</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Nama Produk</label>
          <input type="text" autoComplete="off" placeholder="Contoh: Arem-Arem" value={produk.nama} onChange={(e) => setProduk({...produk, nama: e.target.value})} className="border p-2 rounded w-full text-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Harga (Contoh: 2.000)</label>
          <input type="text" placeholder="Contoh: 2.000" value={produk.harga} onChange={(e) => setProduk({...produk, harga: e.target.value})} className="border p-2 rounded w-full text-sm" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-semibold text-sm">Deskripsi</label>
          <textarea placeholder="Ceritakan kelebihan produk..." value={produk.deskripsi} onChange={(e) => setProduk({...produk, deskripsi: e.target.value})} className="border p-2 rounded w-full h-24 text-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Link Gambar</label>
          <input type="text" placeholder="http://googleusercontent.com/profile/picture/ID_GAMBAR" value={produk.gambar} onChange={(e) => setProduk({...produk, gambar: e.target.value})} className="border p-2 rounded w-full text-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm">Kategori</label>
          <select className="border p-2 rounded w-full text-sm" onChange={(e) => setProduk({...produk, kategori: e.target.value})} value={produk.kategori}>
            <option value="" disabled>Pilih Kategori</option>
            <option value="Kue Basah">Kue Basah</option>
            <option value="Kue Kering">Kue Kering</option>
            <option value="Snack">Snack</option>
            <option value="Snack Box">Snack Box</option>
            <option value="Hampers">Hampers</option>
          </select>
        </div>
      </div>

      <label className="flex items-center my-8 gap-2 cursor-pointer">
        <input type="checkbox" checked={produk.is_best_seller} onChange={(e) => setProduk({...produk, is_best_seller: e.target.checked})} className="w-5 h-5" />
        <span className="font-semibold">Jadikan Best Seller</span>
      </label>

      <button onClick={tambahProduk} className="bg-brand-green-leaf text-white p-4 w-full rounded font-bold hover:bg-brand-green-leaf/90 transition-colors">
        Simpan ke Katalog
      </button>
    </div>
  );
}
