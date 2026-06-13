import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, BookOpen, MessageCircle, CheckCircle, ArrowRight, Sparkles, Search, Send, ShoppingBag, Building2 } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

export default function Home() {
  const featured = products.slice(0, 8);
  const heroProducts = products.filter((p) => ['plevypan-40', 'plevypan-dsr', 'otelezos-beta-50', 'glutamus-gold'].includes(p.slug));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-12 lg:pt-20 lg:pb-24" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)' }}>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeLeft} transition={{ duration: 0.7 }}>
              <motion.span className="eyebrow" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                <Sparkles size={11} /> Product Catalogue
              </motion.span>
              <h1 className="mt-5 heading-xl">
                Trusted Pharmaceutical Products for Better <span className="gradient-text">Healthcare Access</span>
              </h1>
              <motion.p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-lg lg:max-w-lg"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                Elamus Pharmaceuticals Pvt. Ltd. offers a growing range of pharmaceutical and nutraceutical products with a focus on quality and responsible information.
              </motion.p>
              <motion.div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="primary-btn w-full sm:w-auto animate-pulse-subtle">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link to="/products" className="secondary-btn w-full sm:w-auto">Explore Products <ArrowRight size={15} /></Link>
              </motion.div>
              <motion.div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-400 sm:text-xs"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                {['Catalogue Enquiry', 'Responsible Info', 'Mumbai Based'].map((t, i) => (
                  <motion.span key={t} className="flex items-center gap-1"
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.15 }}>
                    <CheckCircle size={12} className="text-sky-500" />{t}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Scrolling product showcase */}
            <motion.div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50 p-6 sm:p-8 lg:p-10"
              initial="hidden" animate="visible" variants={fadeRight} transition={{ duration: 0.7, delay: 0.3 }}>
              {/* Row 1 - scrolls left */}
              <div className="mb-4 flex animate-scroll-left gap-4">
                {[...products.slice(0, 8), ...products.slice(0, 8)].map((p, i) => (
                  <div key={`r1-${i}`} className="flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-transform duration-300 hover:scale-105 sm:h-36 sm:w-48">
                    <img src={p.image} alt={p.alt} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
              {/* Row 2 - scrolls right */}
              <div className="flex animate-scroll-right gap-4">
                {[...products.slice(8, 16), ...products.slice(8, 16)].map((p, i) => (
                  <div key={`r2-${i}`} className="flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-transform duration-300 hover:scale-105 sm:h-36 sm:w-48">
                    <img src={p.image} alt={p.alt} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-sky-50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="mb-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="eyebrow">Why Trust Us</span>
            <h2 className="mt-3 section-heading">Built on Responsibility</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { icon: Shield, title: 'Responsible Information', desc: 'Every product detail in our catalogue is verified. No exaggerated claims, no unverified data — just clean, honest product information.', color: 'from-sky-500 to-blue-600', stat: '100%', statLabel: 'Verified Data' },
              { icon: BookOpen, title: 'Clean Catalogue Experience', desc: 'Professional product photography, clear descriptions, and organized categories make browsing effortless for healthcare professionals.', color: 'from-violet-500 to-purple-600', stat: '50+', statLabel: 'Products Listed' },
              { icon: MessageCircle, title: 'Instant Enquiry Support', desc: 'Get product information in minutes — not days. Our WhatsApp-enabled system ensures you receive quick responses to all enquiries.', color: 'from-emerald-500 to-teal-600', stat: '< 1hr', statLabel: 'Response Time' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={scaleIn} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
                {/* Background glow on hover */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />
                
                {/* Icon */}
                <motion.div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <item.icon size={24} className="text-white" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                
                {/* Stat badge */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-2xl font-extrabold text-transparent`}>{item.stat}</span>
                  <span className="text-xs font-semibold text-slate-500">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} transition={{ duration: 0.6 }}>
              <span className="eyebrow"><Building2 size={11} /> About Us</span>
              <h2 className="mt-4 section-heading">About Elamus Pharmaceuticals</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">Elamus Pharmaceuticals Pvt. Ltd. is a Mumbai-based company incorporated in 2022, focused on marketing and distributing medications including respiratory, critical care, and CNS drugs.</p>
              <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-all hover:gap-3">Learn more <ArrowRight size={14} /></Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="premium-card p-5 sm:p-6">
                <h3 className="mb-4 text-base font-bold text-slate-900">Company Profile</h3>
                {[
                  { l: 'Company', v: 'Elamus Pharmaceuticals Pvt. Ltd.' },
                  { l: 'Location', v: 'Mumbai, Maharashtra' },
                  { l: 'Focus', v: 'Catalogue & enquiry support' },
                  { l: 'Contact', v: '+91 7989005105' },
                ].map((r, i) => (
                  <motion.div key={r.l} className="flex flex-col border-b border-slate-100 py-2.5 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
                    <span className="text-xs font-medium text-slate-400 sm:text-sm">{r.l}</span>
                    <span className="text-sm font-semibold text-slate-800">{r.v}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-sky-600 px-5 py-3 text-white"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }}>
                <span className="text-xl font-extrabold">2022</span>
                <span className="text-[11px] font-semibold leading-tight opacity-90">Company<br/>Incorporated</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="mb-8 text-center sm:mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="eyebrow">Product Range</span>
            <h2 className="mt-3 section-heading">Our Products</h2>
            <p className="section-subtitle">Browse our pharmaceutical and nutraceutical catalogue</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <Link to="/products" className="primary-btn w-full sm:w-auto">View All Products <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <motion.div className="mb-10 text-center sm:mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="eyebrow">Simple Process</span>
            <h2 className="mt-3 section-heading">How Enquiries Work</h2>
            <p className="section-subtitle">Three simple steps to get product information</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: '01', icon: Search, title: 'Browse Catalogue', desc: 'Explore our complete range of pharmaceutical and nutraceutical products with clear images and descriptions.', color: 'from-sky-500 to-blue-600' },
              { step: '02', icon: ShoppingBag, title: 'Add to Enquiry Cart', desc: 'Select multiple products you want information about and add them to your enquiry cart with one tap.', color: 'from-violet-500 to-purple-600' },
              { step: '03', icon: Send, title: 'Send via WhatsApp', desc: 'Review your selection and send the entire list directly to us on WhatsApp. We respond quickly.', color: 'from-emerald-500 to-teal-600' },
            ].map((s, i) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
                whileHover={{ y: -8 }}>
                {/* Step number background */}
                <div className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-[32px] font-black text-slate-200 transition-all duration-300 group-hover:bg-sky-50 group-hover:text-sky-200">
                  {s.step}
                </div>
                {/* Connector line (hidden on mobile) */}
                {i < 2 && <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-slate-200 md:block" />}
                <div className="relative">
                  <motion.div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <s.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`bg-gradient-to-r ${s.color} bg-clip-text text-xs font-extrabold text-transparent`}>STEP {s.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="mb-10 text-center sm:mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="eyebrow">Our Strengths</span>
            <h2 className="mt-3 section-heading">Why Choose Elamus</h2>
            <p className="section-subtitle">What makes us different from the rest</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'Responsible Information', desc: 'Only verified, approved product data. Zero exaggerated marketing claims.', color: 'from-sky-500 to-blue-600', highlight: 'Verified' },
              { icon: MessageCircle, title: 'WhatsApp Enquiry', desc: 'One-tap product enquiry. Get instant responses directly on WhatsApp.', color: 'from-green-500 to-emerald-600', highlight: 'Instant' },
              { icon: BookOpen, title: 'Professional Catalogue', desc: 'High-quality product images, clear descriptions, and organized navigation.', color: 'from-violet-500 to-purple-600', highlight: '50+ Products' },
              { icon: Building2, title: 'Mumbai Based Company', desc: 'Registered pharmaceutical company operating since 2022 from Maharashtra.', color: 'from-amber-500 to-orange-600', highlight: 'Since 2022' },
            ].map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6"
                whileHover={{ y: -8 }}>
                {/* Top accent line */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                {/* Background glow */}
                <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`} />
                
                <div className="relative">
                  <motion.div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} shadow-md`}
                    whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <c.icon size={20} className="text-white" />
                  </motion.div>
                  <span className={`mb-2 inline-block rounded-full bg-gradient-to-r ${c.color} px-2.5 py-0.5 text-[10px] font-bold text-white`}>{c.highlight}</span>
                  <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20" style={{ background: '#061A2F' }}>
        <div className="container-custom text-center">
          <motion.h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Need product information?
          </motion.h2>
          <motion.p className="mx-auto mt-3 max-w-md text-sm text-slate-300"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Get in touch for catalogue information. We respond quickly via WhatsApp.
          </motion.p>
          <motion.div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <Link to="/contact" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-sky-700 hover:bg-slate-50 hover:shadow-lg transition-all sm:w-auto">Contact Elamus <ArrowRight size={14} /></Link>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 text-sm font-bold text-white hover:bg-white/10 hover:border-white/50 transition-all sm:w-auto">
              <MessageCircle size={14} /> WhatsApp Enquiry
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
