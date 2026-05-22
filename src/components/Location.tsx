import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Mail, Instagram } from 'lucide-react';
import { WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_LINK } from '../constants';

export default function Location() {
  return (
    <section id="kontak" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* BAGIAN KIRI: Peta Google Maps Interaktif */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border-8 border-white relative"
          >
            {/* EMBED GOOGLE MAPS */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.721288596274!2d109.23355448769152!3d-7.385098133471206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf1442cbe45d1e9%3A0xb295aea929e24fae!2sTops%20Snack!5e0!3m2!1sid!2sid!4v1779442514585!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading
