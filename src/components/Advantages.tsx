import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Users, Settings } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: <Sparkles className="text-white" size={32} />,
      title: 'Dibuat Fresh',
      description: 'Produksi dilakukan setiap hari sesuai pesanan untuk menjaga kualitas.',
    },
    {
      icon: <ShieldCheck className="text-white" size={32} />,
      title: 'Higienis & Rapi',
      description: 'Standar kebersihan tinggi dalam proses produksi dan pengemasan.',
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: 'Acara Kantor & Keluarga',
      description: 'Berpengalaman melayani berbagai skala acara dengan profesional.',
    },
    {
      icon: <Settings className="text-white" size={32} />,
      title: 'Bisa Custom Pesanan',
      description: 'Sesuaikan isi snack box dan hampers dengan budget dan selera Anda.',
    },
  ];

  return (
    <section className="py-24 bg-brand-brown-dark text-white overflow-hidden relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green-soft uppercase tracking-widest mb-4">Keunggulan</h2>
          <h3 className="text-4xl font-bold mb-4">Mengapa Memilih Kami?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-brand-green-leaf rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-brand-beige/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
