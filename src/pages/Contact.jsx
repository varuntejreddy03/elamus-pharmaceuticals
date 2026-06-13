import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom py-12 md:py-20">
        {/* Header */}
        <motion.div className="mb-14 text-center" initial="hidden" animate="visible" variants={fadeUp}>
          <span className="eyebrow">Get in Touch</span>
          <h1 className="mt-4 section-heading">Contact Us</h1>
          <p className="section-subtitle mx-auto max-w-lg">Have questions about our products? We're here to help. Reach out through any channel below.</p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Phone, title: 'Call Us', detail: '+91 7989005105', sub: 'Mon-Sat, 9AM - 7PM', href: 'tel:+917989005105', color: 'from-sky-500 to-blue-600' },
            { icon: MessageCircle, title: 'WhatsApp', detail: '+91 7989005105', sub: 'Quick responses, instant enquiry', href: 'https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.', color: 'from-green-500 to-emerald-600' },
            { icon: Mail, title: 'Email Us', detail: 'elamusmdgkr@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:elamusmdgkr@gmail.com', color: 'from-violet-500 to-purple-600' },
          ].map((c, i) => (
            <motion.a key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
              {/* Background glow */}
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />
              {/* Top accent */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <motion.div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} shadow-lg`}
                whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <c.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-base font-semibold text-slate-700">{c.detail}</p>
              <p className="mt-1 text-xs text-slate-400">{c.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* Office Address Card */}
        <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Office</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Unit No. 611, Reliables Pride,<br />
                  Anand Nagar, Opp. Heera Panna,<br />
                  Jogeshwari West, Mumbai,<br />
                  Maharashtra, India - 400102
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2">
                    <Clock size={14} className="text-sky-600" />
                    <span className="text-xs font-semibold text-slate-600">Mon - Sat: 9AM - 7PM</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2">
                    <Globe size={14} className="text-sky-600" />
                    <span className="text-xs font-semibold text-slate-600">Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6!2d72.8377!3d19.1364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzExLjAiTiA3MsKwNTAnMTUuNyJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%" height="100%" style={{ border: 0, minHeight: '280px' }} allowFullScreen="" loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-5 sm:px-10 sm:py-6">
              <h2 className="text-xl font-bold text-white">Send an Enquiry</h2>
              <p className="mt-1 text-sm text-sky-100">Fill out the form and we'll respond via WhatsApp</p>
            </div>
            <div className="p-6 sm:p-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.target;
                  const text = `Hello Elamus Pharmaceuticals,\n\nName: ${f.name.value}\nPhone: ${f.phone.value}\nMessage: ${f.message.value}`;
                  window.open(`https://wa.me/917989005105?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
                    <input name="name" required className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Phone</label>
                    <input name="phone" type="tel" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="Phone number" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea name="message" rows={4} required className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="What would you like to enquire about?" />
                </div>
                <button type="submit" className="primary-btn w-full animate-pulse-subtle">
                  <MessageCircle size={16} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
