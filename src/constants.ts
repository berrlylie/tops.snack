import { Product, Testimonial, FAQItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'kue-basah', name: 'Kue Basah', icon: 'Coffee' },
  { id: 'kue-kering', name: 'Kue Kering', icon: 'Cookie' },
  { id: 'snack-box', name: 'Snack Box', icon: 'Package' },
  { id: 'hampers', name: 'Hampers', icon: 'Gift' },
];

export const PRODUCTS: Product[] = [
  // --- KATEGORI: KUE BASAH (Data Aslimu) ---
  {
    id: '1',
    name: 'Arem-Arem',
    description: 'Nasi dengan isian ayam suwir yang dibungkus daun pisang dengan rasa gurih.',
    category: 'Kue Basah',
    price: '1.500',
    isBestSeller: true,
    image: '/aremarem.png',
  },
  {
    id: '2',
    name: 'Pastel',
    description: 'Pastel renyah dengan isian sayur dan telur yang nikmat.',
    category: 'Kue Basah',
    price: '2.000',
    isBestSeller: true,
    image: '/pastel.png',
  },
  {
    id: '3',
    name: 'Bolu Kukus',
    description: 'Bolu kukus lembut dan manis dengan tekstur empuk yang mekar sempurna.',
    category: 'Kue Basah',
    price: '1.500',
    isBestSeller: true,
    image: '/bolukukus.png',
  },
  {
    id: '4',
    name: 'Risoles Mayo',
    description: 'Risoles renyah dengan isian telur, smoked beef, dan mayones creamy.',
    category: 'Kue Basah',
    price: '5.000',
  },
  {
    id: '5',
    name: 'Pastel Isi',
    description: 'Pastel renyah isi sayuran, telur, dan bihun bumbu lada.',
    category: 'Kue Basah',
    price: '4.000',
  },
  
  // --- KATEGORI: KUE KERING (Data Dummy) ---
  {
    id: '6',
    name: 'Nastar Premium',
    description: 'Kue nastar lembut dengan selai nanas asli yang lumer di mulut.',
    category: 'Kue Kering',
    price: '45.000',
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Kastengel Keju',
    description: 'Kue kering gurih dengan taburan keju edam yang renyah.',
    category: 'Kue Kering',
    price: '50.000',
  },
  {
    id: '8',
    name: 'Putri Salju',
    description: 'Kue kering tabur gula halus yang manis dan lumer.',
    category: 'Kue Kering',
    price: '40.000',
  },
  {
    id: '9',
    name: 'Sagu Keju',
    description: 'Kue sagu keju renyah yang langsung meleleh saat dimakan.',
    category: 'Kue Kering',
    price: '42.000',
  },
  {
    id: '10',
    name: 'Lidah Kucing',
    description: 'Kue tipis nan renyah dengan rasa manis yang pas.',
    category: 'Kue Kering',
    price: '38.000',
  },

  // --- KATEGORI: SNACK BOX (Data Dummy) ---
  {
    id: '11',
    name: 'Snack Box Ekonomis',
    description: 'Isi 3 macam kue (Kue Lumpur, Risoles, Putu Ayu) + Air Mineral.',
    category: 'Snack Box',
    price: '10.000',
    isBestSeller: true,
  },
  {
    id: '12',
    name: 'Snack Box Premium',
    description: 'Isi 4 macam kue pilihan + Air Mineral + Buah segar.',
    category: 'Snack Box',
    price: '15.000',
  },
  {
    id: '13',
    name: 'Snack Box Tradisional',
    description: 'Isi Jajanan Pasar autentik (Arem-arem, Dadar Gulung, Pastel).',
    category: 'Snack Box',
    price: '12.000',
  },

  // --- KATEGORI: HAMPERS (Data Dummy) ---
  {
    id: '14',
    name: 'Hampers Lebaran Mini',
    description: 'Berisi 2 toples kue kering (Nastar & Kastengel) dengan box cantik.',
    category: 'Hampers',
    price: '100.000',
    isBestSeller: true,
  },
  {
    id: '15',
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
    answer: 'Pesanan sebaiknya dilakukan minimal H-2 untuk memastikan ketersediaan bahan dan slot produksi.',
  },
];

export const WHATSAPP_DISPLAY = '+62 856-0124-0878';
export const WHATSAPP_NUMBER = '6285601240878';
export const WHATSAPP_DEFAULT_TEXT = 'Halo Tops Snack, saya ingin melakukan pemesanan jajanan pasar Tradisional. Boleh minta informasi menu dan langkah pemesanan berikutnya?';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;
export const EMAIL_ADDRESS = 'topssnack005@gmail.com';
export const INSTAGRAM_HANDLE = 'topssnack__';
export const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const FACEBOOK_HANDLE = 'Tops Snacks';
export const FACEBOOK_LINK = 'https://www.facebook.com/';
export const TWITTER_LINK = '#';
