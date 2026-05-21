import { Product, Testimonial, FAQItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'kue-basah', name: 'Kue Basah', icon: 'Coffee' },
  { id: 'kue-kering', name: 'Kue Kering', icon: 'Cookie' },
  { id: 'snack-box', name: 'Snack Box', icon: 'Package' },
  { id: 'hampers', name: 'Hampers', icon: 'Gift' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Arem-Arem',
    description: 'Nasi dengan isian ayam suwir yang dibungkus daun pisang dengan rasa gurih.',
    category: 'Kue Basah',
    price: '1500',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Pastel',
    description: 'Pastel renyah dengan isian sayur dan telur yang nikmat.',
    category: 'Kue Basah',
    price: '2.000',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Bolu Kukus',
    description: 'Bolu kukus lembut dan manis dengan tekstur empuk yang mekar sempurna.',
    category: 'Kue Basah',
    price: '1.500',
    isBestSeller: true,
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
  {
    id: '6',
    name: 'Kue Lumpur',
    description: 'Kue lembut berbahan kentang dengan topping kismis manis.',
    category: 'Kue Basah',
    price: '3.500',
  },
  {
    id: '7',
    name: 'Dadar Gulung',
    description: 'Dadar pandan lembut dengan isian unti kelapa manis.',
    category: 'Kue Basah',
    price: '3.000',
  },
  {
    id: '8',
    name: 'Putu Ayu',
    description: 'Kue kukus pandan yang lembut dengan topping kelapa parut gurih.',
    category: 'Kue Basah',
    price: '2.500',
  },
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
