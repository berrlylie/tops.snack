import { motion } from 'motion/react';
import { ListChecks, CalendarClock, Truck } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      icon: <ListChecks size={24} />,
      title: 'Pilih Menu',
      description: 'Lihat katalog dan tentukan jajanan atau paket snack box keinginan Anda.',
    },
    {
      icon: <CalendarClock size={24} />,
      title: 'Konfirmasi Pesanan',
      description: 'Hubungi kami via WhatsApp untuk detail jumlah dan tanggal.',
    },
    {
      icon: <Truck size={24} />,
      title: 'Pesanan Dikirim',
      description: 'Kami siapkan fresh dan kirim langsung ke lokasi sesuai jadwal.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-brown-dark">Cara Pemesanan</h3>
        </div>

        {/* List vertikal yang ringkas */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl border border-brand-beige hover:border-brand-green-leaf transition-colors duration-300"
            >
              {/* Ikon dengan background lebih kecil */}
              <div className="w-12 h-12 flex-shrink-0 bg-brand-green-leaf text-white rounded-xl flex items-center justify-center shadow-md">
                {step.icon}
              </div>
              
              {/* Teks */}
              <div>
                <span className="inline-block px-2 py-0.5 bg-brand-beige text-brand-brown-dark rounded-md text-[10px] font-bold uppercase tracking-wider mb-1">
                  Langkah {index + 1}
                </span>
                <h4 className="text-lg font-bold text-brand-brown-dark mb-1">{step.title}</h4>
                <p className="text-sm text-brand-brown-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
