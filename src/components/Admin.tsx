return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Admin Panel</h1>
      
      <input 
        type="text" 
        placeholder="Nama Produk" 
        onChange={(e) => setProduk({...produk, nama: e.target.value})} 
        className="border p-2 w-full mb-3" 
      />
      
      <input 
        type="text" 
        placeholder="Harga" 
        onChange={(e) => setProduk({...produk, harga: e.target.value})} 
        className="border p-2 w-full mb-3" 
      />
      
      <textarea 
        placeholder="Deskripsi" 
        onChange={(e) => setProduk({...produk, deskripsi: e.target.value})} 
        className="border p-2 w-full mb-3" 
      />
      
      <input 
        type="text" 
        placeholder="Link Gambar" 
        onChange={(e) => setProduk({...produk, gambar: e.target.value})} 
        className="border p-2 w-full mb-3" 
      />

      {/* Tambahan Kategori */}
      <select 
        className="border p-2 w-full mb-3"
        onChange={(e) => setProduk({...produk, kategori: e.target.value})}
        value={produk.kategori}
      >
        <option value="Kue Basah">Kue Basah</option>
        <option value="Kue Kering">Kue Kering</option>
        <option value="Snack">Snack</option>
        <option value="Snack Box">Snack Box</option>
        <option value="Hampers">Hampers</option>
      </select>

      {/* Tambahan Best Seller */}
      <label className="flex items-center mb-5 gap-2">
        <input 
          type="checkbox" 
          checked={produk.is_best_seller}
          onChange={(e) => setProduk({...produk, is_best_seller: e.target.checked})}
        />
        <span>Jadikan Best Seller</span>
      </label>

      <button 
        onClick={tambahProduk} 
        className="bg-brand-green-leaf text-white p-4 w-full rounded font-bold"
      >
        Simpan ke Katalog
      </button>
    </div>
  );
