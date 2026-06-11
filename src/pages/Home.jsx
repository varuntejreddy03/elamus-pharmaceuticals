import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, BookOpen, MessageCircle, CheckCircle, ArrowRight, Sparkles, Search, Send, ShoppingBag, Building2 } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const featured = products.slice(0, 8);
  const heroProducts = products.filter((p) => ['plevypan-40', 'plevypan-dsr', 'otelezos-beta-50', 'glutamus-gold'].includes(p.slug));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-12 lg:pt-20 lg:pb-24" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)' }}>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.5 }}>
              <span className="eyebrow"><Sparkles size={11} /> Product Catalogue</span>
              <h1 className="mt-5 heading-xl">
                Trusted Pharmaceutical Products for Better <span className="gradient-text">Healthcare Access</span>
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-lg lg:max-w-lg">
                Elamus Pharmaceuticals Pvt. Ltd. offers a growing range of pharmaceutical and nutraceutical products with a focus on quality and responsible information.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="primary-btn w-full sm:w-auto">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link to="/products" className="secondary-btn w-full sm:w-auto">Explore Products <ArrowRight size={15} /></Link>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-400 sm:text-xs">
                {['Catalogue Enquiry', 'Responsible Info', 'Mumbai Based'].map((t) => (
                  <span key={t} className="flex items-center gap-1"><CheckCircle size={12} className="text-sky-500" />{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Hero images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroProducts.map((p) => (
                <div key={p.slug} className="image-card h-32 sm:h-40 lg:h-44">
                  <img src={p.image} alt={p.alt} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: Shield, title: 'Responsible Information', desc: 'Only verified product details in our catalogue.' },
              { icon: BookOpen, title: 'Clean Catalogue', desc: 'Browse products with clear visuals and details.' },
              { icon: MessageCircle, title: 'Quick Enquiry', desc: 'WhatsApp and phone enquiry support.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.1 }}
                className="premium-card p-5 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 sm:h-11 sm:w-11">
                  <item.icon size={18} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-[15px]">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="eyebrow"><Building2 size={11} /> About Us</span>
              <h2 className="mt-4 section-heading">About Elamus Pharmaceuticals</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">Elamus Pharmaceuticals Pvt. Ltd. is a Mumbai-based company incorporated in 2022, focused on marketing and distributing medications including respiratory, critical care, and CNS drugs.</p>
              <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700">Learn more <ArrowRight size={14} /></Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.1 }}>
              <div className="premium-card p-5 sm:p-6">
                <h3 className="mb-4 text-base font-bold text-slate-900">Company Profile</h3>
                {[
                  { l: 'Company', v: 'Elamus Pharmaceuticals Pvt. Ltd.' },
                  { l: 'Location', v: 'Mumbai, Maharashtra' },
                  { l: 'Focus', v: 'Catalogue & enquiry support' },
                  { l: 'Contact', v: '+91 7989005105' },
                ].map((r) => (
                  <div key={r.l} className="flex flex-col border-b border-slate-100 py-2.5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs font-medium text-slate-400 sm:text-sm">{r.l}</span>
                    <span className="text-sm font-semibold text-slate-800">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-sky-600 px-5 py-3 text-white">
                <span className="text-xl font-extrabold">2022</span>
                <span className="text-[11px] font-semibold leading-tight opacity-90">Company<br/>Incorporated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 text-center sm:mb-12">
            <span className="eyebrow">Product Range</span>
            <h2 className="mt-3 section-heading">Our Products</h2>
            <p className="section-subtitle">Browse our pharmaceutical and nutraceutical catalogue</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="primary-btn w-full sm:w-auto">View All Products <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="mb-8 text-center sm:mb-12">
            <span className="eyebrow">Simple Process</span>
            <h2 className="mt-3 section-heading">How Enquiries Work</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { step: '01', icon: Search, title: 'Browse Catalogue', desc: 'Explore our product range.' },
              { step: '02', icon: ShoppingBag, title: 'Add to Enquiry', desc: 'Select products to enquire about.' },
              { step: '03', icon: Send, title: 'Send via WhatsApp', desc: 'One tap sends your list.' },
            ].map((s, i) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.1 }}
                className="premium-card relative overflow-hidden p-5">
                <span className="absolute -right-1 -top-1 text-[48px] font-black text-slate-100 sm:text-[56px]">{s.step}</span>
                <div className="relative">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50"><s.icon size={16} className="text-sky-600" /></div>
                  <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-slate-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="section-heading">Why Choose Elamus</h2>
            <p className="section-subtitle">Trusted catalogue with easy enquiry</p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'Responsible Info', desc: 'Verified details only.' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'One-tap enquiry.' },
              { icon: BookOpen, title: 'Clean Catalogue', desc: 'Clear product images.' },
              { icon: Building2, title: 'Mumbai Based', desc: 'Since 2022.' },
            ].map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.08 }}
                className="premium-card p-4 text-center sm:p-5">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 sm:h-12 sm:w-12">
                  <c.icon size={18} className="text-sky-600" />
                </div>
                <h3 className="text-[13px] font-bold text-slate-900 sm:text-sm">{c.title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20" style={{ background: '#061A2F' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">Need product information?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-300">Get in touch for catalogue information. We respond quickly via WhatsApp.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-sky-700 hover:bg-slate-50 sm:w-auto">Contact Elamus <ArrowRight size={14} /></Link>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 text-sm font-bold text-white hover:bg-white/10 sm:w-auto">
              <MessageCircle size={14} /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
