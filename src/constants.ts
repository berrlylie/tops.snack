import { Product, Testimonial, FAQItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'kue-basah', name: 'Kue Basah', icon: 'Coffee' },
  { id: 'kue-kering', name: 'Kue Kering', icon: 'Cookie' },
  { id: 'snack', name: 'Snack', icon: 'Croissant' },
  { id: 'snack-box', name: 'Snack Box', icon: 'Package' },
  { id: 'hampers', name: 'Hampers', icon: 'Gift' },
];

export const PRODUCTS: Product[] = [
  // --- KATEGORI: KUE BASAH ---
  {
    id: 'KB1',
    name: 'Arem-Arem',
    description: 'Nasi dengan isian ayam suwir yang dibungkus daun pisang dengan rasa gurih.',
    category: 'Kue Basah',
    price: '2.000',
    isBestSeller: true,
    image: '/aremarem.png',
  },
  {
    id: 'KB2',
    name: 'Lemper Ayam',
    description: 'Lemper dengan isian ayam suwir yang gurih.',
    category: 'Kue Basah',
    price: '2.500',
    image: '/lemperayam.png',
  },
  {
    id: 'KB3',
    name: 'Dadar Gulung',
    description: 'Dadar gulung dengan isian kelapa gula merah yang manis dan khas.',
    category: 'Kue Basah',
    price: '2.000',
    image: '/dadargulung.png',
  },
 {
    id: 'KB4',
    name: 'Gabin Fla Ubi Ungu',
    description: 'Kombinasi biskuit gabin yang renyah dengan isian fla ubi ungu manis yang lembut dan lumer di mulut.',
    category: 'Kue Basah',
    price: '2.000',
    image: '/gabinubiungu.png',
  },
  {
    id: 'KB5',
    name: 'Bolu Kukus',
    description: 'Bolu kukus lembut dan manis dengan tekstur empuk yang mekar sempurna.',
    category: 'Kue Basah',
    price: '2.500',
    isBestSeller: true,
    image: '/bolukukus.png',
  },
  {
    id: 'KB6',
    name: 'Bolu Kukus Pisang',
    description: 'Bolu kukus pisang yang manis, lembut dan harum.',
    category: 'Kue Basah',
    price: '2.500',
    image: '/bolupisang.png',
  },
  {
    id: 'KB7',
    name: 'Bolu Pandan Slice',
    description: 'Bolu pandan yang lembut dan harum.',
    category: 'Kue Basah',
    isBestSeller: true,
    price: '2.000',
    image: '/bolupandan.png',
  },
  {
    id: 'KB8',
    name: 'Bolu Zebra Slice',
    description: 'Bolu zebra klasik yang manis dan lembut.',
    category: 'Kue Basah',
    price: '2.000',
    image: '/boluzebra.png',
  },
  {
    id: 'KB9',
    name: 'Brownies Topping Keju',
    description: 'Brownies lembut dengan topping keju yang melimpah.',
    category: 'Kue Basah',
    price: '35.000',
    image: '/brownies.png',
  },
  {
    id: 'KB10',
    name: 'Bolu Jadul',
    description: 'Aneka bolu jadul tanpa topping yang lembut (diameter 20cm)',
    category: 'Kue Basah',
    price: '25.000',
    image: '/bolujadul.png',
  },
  {
    id: 'KB11',
    name: 'Bolu Jadul Topping Biasa',
    description: 'Aneka bolu jadul dengan topping messes yang lembut dengan (diameter 20cm)',
    category: 'Kue Basah',
    price: '30.000',
    image: '/topping messes.png',
  },
  {
    id: 'KB12',
    name: 'Bolu Jadul Topping Keju',
    description: 'Aneka bolu jadul dengan topping keju yang lembut dengan (diameter 20cm)',
    category: 'Kue Basah',
    price: '35.000',
    image: '/toppingkeju.png',
  },
  
  // --- KATEGORI: KUE KERING ---
  {
    id: 'KK1',
    name: 'Nastar',
    description: 'Kue nastar yang lembut dengan isian selai nanas yang manis dan lumer di mulut.\nuk. 250 gram : 35.000\nuk. 500 gram : 70.000',
    category: 'Kue Kering',
    price: 'Rp 35.000 - Rp 70.000',
    isBestSeller: true,
    image: '/nastar.png',
  },
  {
    id: 'KK2',
    name: 'Kastengel',
    description: 'Kue kastengel keju yang lembut, gurih, dan lumer di mulut.\nuk. 250 gram : 35.000\nuk. 500 gram : 70.000',
    category: 'Kue Kering',
    price: 'Rp 35.000 - Rp 70.000',
    isBestSeller: true,
    image: '/kastengel.png',
  },
  {
    id: 'KK3',
    name: 'Putri Salju',
    description: 'Kue putri salju yang lembut, manis, dan lumer di mulut dengan taburan gula halus yang melimpah.\nuk. 250 gram : 30.000\nuk. 500 gram : 60.000',
    category: 'Kue Kering',
    price: 'Rp 30.000 - Rp 60.000',
    image: '/putrisalju.png',
  },
  {
    id: 'KK4',
    name: 'Kue Kacang',
    description: 'Kue kacang yang renyah dan gurih dengan taburan wijen yang harum.\nuk. 250 gram : 25.000\nuk. 500 gram : 50.000',
    category: 'Kue Kering',
    price: 'Rp 25.000 - Rp 50.000',
    image: '/kuekacang.png',
  },
  {
    id: 'KK5',
    name: 'Bola-Bola Cokelat',
    description: 'Bola-bola cokelat manis dengan taburan sprinkles warna-warni, renyah di luar dan lumer di mulut.\nuk. 250 gram : 30.000\nuk. 500 gram : 60.000',
    category: 'Kue Kering',
    price: 'Rp 30.000 - Rp 60.000',
    image: '/bolacoklat.png',
  },

// --- KATEGORI: SNACK ---
  {
    id: 'S1',
    name: 'Pastel',
    description: 'Pastel renyah dengan isian sayur dan telur yang nikmat.',
    category: 'Snack',
    price: '2.000',
    isBestSeller: true,
    image: '/pastel.png',
  },
  {
    id: 'S2',
    name: 'Risol Mayo',
    description: 'Risol dengan isian telur dan sosis dan saos mayones yang manis dan gurih.',
    category: 'Snack',
    price: '2.500',
    isBestSeller: true,
    image: '/risolmayo.png',
  },
  {
    id: 'S3',
    name: 'Sosis Solo',
    description: 'Sosis solo goreng dengan isian ayam suwir gurih.',
    category: 'Snack',
    price: '2.000',
    image: '/sosissolo.png',
  },
  {
    id: 'S4',
    name: 'Aneka Dimsum',
    description: 'Aneka Dimsum yang lembut dan gurih, bisa beli satuan atau paket isi 4 dengan harga 10.000.',
    category: 'Snack',
    price: '2.500',
    image: '/dimsum.png',
  },
  
  // --- KATEGORI: SNACK BOX ---
  {
    id: 'SB1',
    name: 'Snack Box Ekonomis',
    description: 'Isi 3 macam kue (Kue Lumpur, Risoles, Putu Ayu) + Air Mineral.',
    category: 'Snack Box',
    price: '10.000',
    isBestSeller: true,
  },
  {
    id: 'SB2',
    name: 'Snack Box Premium',
    description: 'Isi 4 macam kue pilihan + Air Mineral + Buah segar.',
    category: 'Snack Box',
    price: '15.000',
  },
  {
    id: 'SB3',
    name: 'Snack Box Tradisional',
    description: 'Isi Jajanan Pasar autentik (Arem-arem, Dadar Gulung, Pastel).',
    category: 'Snack Box',
    price: '12.000',
  },

  // --- KATEGORI: HAMPERS ---
  {
    id: 'H1',
    name: 'Hampers Lebaran Mini',
    description: 'Berisi 2 toples kue kering (Nastar & Kastengel) dengan box cantik.',
    category: 'Hampers',
    price: '100.000',
    isBestSeller: true,
  },
  {
    id: 'H2',
    name: 'Hampers Spesial',
    description: 'Berisi 4 toples kue kering pilihan, kartu ucapan, dan pita eksklusif.',
    category: 'Hampers',
    price: '200.000',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sari Wahyuni',
    role: 'Ibu Rumah Tangga',
    content: 'Snack box-nya rapi banget dan rasanya bener-bener autentik. Tamu arisan saya semua suka!',
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'HR Manager',
    content: 'Sangat terpercaya untuk pesanan rapat kantor. Pengiriman tepat waktu dan kemasan sangat higienis.',
  },
  {
    id: '3',
    name: 'Linda Kusuma',
    role: 'Event Organizer',
    content: 'Hampers-nya cantik dan premium. Cocok banget buat kado klien atau keluarga saat hari raya.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Minimal order berapa?',
    answer: 'Untuk kue satuan minimal order 20 pcs per jenis. Untuk Snack Box minimal order 15 box.',
  },
  {
    id: '2',
    question: 'Bisa untuk acara kantor?',
    answer: 'Tentu saja! Kami sering melayani pesanan untuk rapat, seminar, dan acara kantor lainnya dengan kemasan yang rapi.',
  },
  {
    id: '3',
    question: 'Apakah bisa request isi snack box?',
    answer: 'Bisa. Anda dapat memilih kombinasi kue basah dan kue kering sesuai anggaran dan selera Anda.',
  },
  {
    id: '4',
    question: 'H-berapa harus pesan?',
    answer: 'Pesanan sebaiknya dilakukan maksimal H-2 untuk memastikan ketersediaan bahan dan slot produksi.',
  },
];

export const WHATSAPP_DISPLAY = '+62 856-0124-0878';
export const WHATSAPP_NUMBER = '6285601240878';
export const WHATSAPP_DEFAULT_TEXT = `Halo Tops Snack! Saya sudah melihat katalog dan ingin melakukan pemesanan. Berikut detail pesanan saya:

*FORMAT PEMESANAN*
Nama Pemesan : 
Tanggal Pengiriman : 
Waktu Pengiriman : 
Alamat Lengkap : 

*JENIS PEMESANAN*
_hapus yang tidak diperlukan_
( ) Konsumsi Pribadi
( ) Acara Kantor / Rapat
( ) Arisan / Keluarga
( ) Hampers / Hadiah

*DETAIL PESANAN*
1. [Nama Produk] - [Jumlah]
2. [Nama Produk] - [Jumlah]

Catatan Tambahan : 

Mohon diinformasikan untuk total pesanan saya. Terima kasih!`;
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;
export const EMAIL_ADDRESS = 'topssnack005@gmail.com';
export const INSTAGRAM_HANDLE = 'topssnack__';
export const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const FACEBOOK_HANDLE = 'Tops Snacks';
export const FACEBOOK_LINK = 'https://www.facebook.com/share/18vtSjMGZC/?mibextid=wwXIfr';
