import { motion } from 'motion/react';
import { ListChecks, CalendarClock, Truck } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      icon: <ListChecks size={32} />,
      title: 'Pilih Menu',
      description: 'Lihat katalog kami dan tentukan jajanan atau paket snack box yang Anda inginkan.',
    },
    {
      icon: <CalendarClock size={32} />,
      title: 'Konfirmasi Pesanan',
      description: 'Hubungi kami via WhatsApp untuk konfirmasi jumlah, tanggal, dan detail pengiriman.',
    },
    {
      icon: <Truck size={32} />,
      title: 'Pesanan Dikirim',
      description: 'Pesanan Anda akan kami buat fresh dan dikirim langsung ke lokasi sesuai jadwal.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green-leaf uppercase tracking-widest mb-4">Proses</h2>
          <h3 className="text-4xl font-bold text-brand-brown-dark">Cara Pemesanan</h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-beige -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white border-2 border-brand-beige p-8 rounded-3xl text-center hover:border-brand-green-leaf transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-brand-green-leaf text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-brand-beige text-brand-brown-dark rounded-full text-xs font-bold mb-4">
                  Langkah {index + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-brown-dark mb-3">{step.title}</h4>
                <p className="text-brand-brown-medium leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
