import { motion } from 'motion/react';
import { ListChecks, CalendarClock, Truck } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      icon: <ListChecks size={28} />,
      title: 'Pilih Menu',
      description: 'Lihat katalog dan tentukan jajanan atau paket snack box keinginan Anda.',
    },
    {
      icon: <CalendarClock size={28} />,
      title: 'Konfirmasi Pesanan',
      description: 'Hubungi kami via WhatsApp untuk detail jumlah dan tanggal.',
    },
    {
      icon: <Truck size={28} />,
      title: 'Pesanan Dikirim',
      description: 'Kami siapkan fresh dan kirim langsung ke lokasi sesuai jadwal.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-brown-dark">Cara Pemesanan</h3>
        </div>

        {/* Flexbox responsif: flex-col (HP), flex-row (Desktop/Tablet) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              // flex-1 memastikan semua kotak lebarnya sama rata saat di desktop
              className="flex-1 w-full bg-white border-2 border-brand-beige p-6 rounded-3xl text-center hover:border-brand-green-leaf transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-brand-green-leaf text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {step.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-brand-beige text-brand-brown-dark rounded-full text-[10px] font-bold mb-3 uppercase tracking-wider">
                Langkah {index + 1}
              </div>
              <h4 className="text-lg font-bold text-brand-brown-dark mb-2">{step.title}</h4>
              <p className="text-sm text-brand-brown-medium leading-relaxed px-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
