import { motion } from 'motion/react';
import { Leaf, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Leaf className="text-brand-green-leaf" size={32} />,
      title: 'Bahan Pilihan',
      description: 'Menggunakan bahan pilihan berkualitas untuk menghasilkan jajanan yang fresh dan tanpa pengawet.',
    },
    {
      icon: <Award className="text-brand-green-leaf" size={32} />,
      title: 'Rasa Autentik',
      description: 'Resep tradisional yang dijaga keasliannya untuk memberikan cita rasa yang khas dan tak terlupakan.',
    },
    {
      icon: <ShieldCheck className="text-brand-green-leaf" size={32} />,
      title: 'Produksi Higienis',
      description: 'Diproses dengan standar kebersihan yang terjaga demi memberikan rasa aman dan nyaman saat dikonsumsi.',
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-brand-brown-dark mb-8 leading-tight">
              Cita Rasa Tradisional Yang Selalu Jadi Favorite
            </h3>
            <p className="text-lg text-brand-brown-medium mb-6 leading-relaxed">
              Berawal dari kecintaan kami terhadap jajanan pasar tradisional, Tops Snack hadir untuk menghadirkan cita rasa yang familiar dengan konsep yang lebih fresh, praktis, dan cocok dinikmati di berbagai momen. Bagi kami, jajanan tradisional bukan hanya sekadar makanan, tetapi juga memiliki cerita, kenangan, dan kehangatan yang selalu menghadirkan rasa rindu bagi siapa saja yang menikmatinya.
            </p>
            <p className="text-lg text-brand-brown-medium mb-10 leading-relaxed">
              Mulai dari camilan kecil hingga isi hampers spesial, seluruh jajanan di Tops Snack dibuat fresh setiap hari dengan kualitas dan kebersihan yang selalu terjaga. Produk kami cocok dinikmati dalam berbagai suasana, mulai dari acara keluarga, meeting kantor, arisan, hingga sebagai teman sarapan maupun ngopi sore, sehingga setiap momen terasa lebih lengkap dengan jajanan favorit dari Tops Snack.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown-dark mb-2">{value.title}</h4>
                    <p className="text-sm text-brand-brown-medium leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/seed/kitchen/800/1000"
                alt="Proses Pembuatan Snack"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/20 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
