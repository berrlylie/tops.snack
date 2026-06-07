import { motion } from 'motion/react';
import { Leaf, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Leaf className="text-brand-green-leaf" size={20} />,
      title: 'Bahan Pilihan',
      description: 'Bahan berkualitas tanpa pengawet.',
    },
    {
      icon: <Award className="text-brand-green-leaf" size={20} />,
      title: 'Rasa Autentik',
      description: 'Resep tradisional terjaga keasliannya.',
    },
    {
      icon: <ShieldCheck className="text-brand-green-leaf" size={20} />,
      title: 'Produksi Higienis',
      description: 'Standar kebersihan yang terjamin.',
    },
  ];

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="aspect-[4/5] rounded-3xl shadow-xl p-3 bg-[#5D4037] border-4 border-[#3E2723] w-full">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/ownerbaru.PNG"
                  alt="Tentang Tops Snack"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-gold/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-brand-brown-dark mb-6 leading-tight">
              Cita Rasa Tradisional Yang Selalu Jadi Favorite
            </h3>
            
            <p className="text-base md:text-lg text-brand-brown-medium mb-6 leading-relaxed">
              Kami percaya bahwa setiap hidangan bukan hanya sekadar makanan, tetapi juga bagian dari momen berharga yang dapat menciptakan kebahagiaan, kehangatan, dan kebersamaan. Mulai dari acara keluarga, rapat kantor, syukuran, ulang tahun, hingga hadiah spesial untuk orang terdekat, kami siap membantu melengkapi setiap momen dengan sajian yang lezat dan berkesan.
            </p>
            
            <p className="text-base md:text-lg text-brand-brown-medium mb-10 leading-relaxed">
              Dengan mengutamakan kualitas bahan, kebersihan proses produksi, dan kesegaran produk, kami berkomitmen untuk memberikan yang terbaik bagi setiap pelanggan. Kepuasan pelanggan menjadi prioritas kami, sehingga setiap pesanan dipersiapkan dengan perhatian dan ketelitian agar menghadirkan rasa, kualitas, dan pelayanan yang dapat selalu diandalkan.
            </p>

            {/* Features Grid - Diubah ke grid-cols-3 agar sebaris di semua ukuran layar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col gap-2 items-center text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-beige rounded-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown-dark mb-1 text-[10px] sm:text-sm">{value.title}</h4>
                    <p className="text-[9px] sm:text-xs text-brand-brown-medium leading-tight sm:leading-relaxed hidden sm:block">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
