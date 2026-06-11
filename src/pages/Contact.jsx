import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom py-12 md:py-20">
        <div className="mb-12 text-center">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="mt-4 section-heading">Contact Us</h1>
          <p className="section-subtitle">Reach out for product enquiries and information</p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: 'Call', detail: '+91 7989005105', href: 'tel:+917989005105' },
            { icon: MessageCircle, title: 'WhatsApp', detail: '+91 7989005105', href: 'https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.' },
            { icon: Mail, title: 'Email', detail: 'elamusmdgkr@gmail.com', href: 'mailto:elamusmdgkr@gmail.com' },
            { icon: MapPin, title: 'Office', detail: 'Jogeshwari West, Mumbai 400102', href: null },
          ].map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.08 }}>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                  <div className="premium-card h-full p-6"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-glow"><c.icon size={16} className="text-white" /></div><h3 className="text-sm font-bold text-slate-900">{c.title}</h3><p className="mt-1 break-all text-xs text-slate-500">{c.detail}</p></div>
                </a>
              ) : (
                <div className="premium-card h-full p-6"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-glow"><c.icon size={16} className="text-white" /></div><h3 className="text-sm font-bold text-slate-900">{c.title}</h3><p className="mt-1 text-xs text-slate-500">{c.detail}</p></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <div className="premium-card p-7 md:p-8">
              <h2 className="mb-6 text-lg font-bold text-slate-900">Send an Enquiry</h2>
              <form onSubmit={(e) => { e.preventDefault(); const f=e.target; window.open(`https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals,\n\nName: ${f.name.value}\nMessage: ${f.message.value}`)}`, '_blank'); }} className="space-y-4">
                <div><label className="mb-1 block text-xs font-semibold text-slate-600">Name</label><input name="name" required className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="Your name" /></div>
                <div><label className="mb-1 block text-xs font-semibold text-slate-600">Phone</label><input name="phone" type="tel" className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="Phone number" /></div>
                <div><label className="mb-1 block text-xs font-semibold text-slate-600">Message</label><textarea name="message" rows={4} required className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="Your enquiry..." /></div>
                <button type="submit" className="primary-btn w-full !h-11 !text-xs"><MessageCircle size={14} /> Send via WhatsApp</button>
              </form>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.1 }}>
            <div className="h-full overflow-hidden rounded-4xl border border-slate-200/80 shadow-card">
              <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6!2d72.8377!3d19.1364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzExLjAiTiA3MsKwNTAnMTUuNyJF!5e0!3m2!1sen!2sin!4v1600000000000" width="100%" height="100%" style={{ border: 0, minHeight: '420px' }} allowFullScreen="" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
