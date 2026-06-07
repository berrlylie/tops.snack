import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Users, Settings } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { icon: <Sparkles size={28} />, title: 'Dibuat Fresh', description: 'Produksi dilakukan setiap hari untuk menjaga kualitas.' },
    { icon: <ShieldCheck size={28} />, title: 'Higienis & Rapi', description: 'Standar kebersihan tinggi dalam proses produksi.' },
    { icon: <Users size={28} />, title: 'Acara Kantor & Keluarga', description: 'Melayani partai besar dan kecil secara profesional.' },
    { icon: <Settings size={28} />, title: 'Bisa Custom Pesanan', description: 'Sesuaikan snack box dengan budget dan selera Anda.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-brown-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">Mengapa Memilih Kami?</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Pembungkus Ikon: rotate-45 membuatnya jadi belah ketupat */}
              <motion.div 
                whileHover={{ rotate: 90, scale: 1.1 }} // Animasi berputar saat hover
                className="w-14 h-14 md:w-20 md:h-20 bg-brand-green-leaf rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg rotate-45 transition-all duration-500"
              >
                {/* Ikon di dalam harus diputar balik agar tidak ikut miring */}
                <div className="-rotate-45 text-white">
                  {item.icon}
                </div>
              </motion.div>
              
              <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-3">{item.title}</h4>
              <p className="text-[10px] md:text-base text-brand-beige/70 leading-relaxed px-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
