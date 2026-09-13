import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const fUp   = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const fLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
const fRight= { hidden: { opacity: 0, x: 20 },  visible: { opacity: 1, x: 0 } };
const fScale= { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } };
const VP    = { once: true, margin: '-50px' };

/* count-up */
function useCountUp(target, ms = 1200, go = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go || typeof target !== 'number') return;
    let t0 = null;
    const tick = ts => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / ms, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [go, target, ms]);
  return n;
}

function StatCell({ value, label, sub, color = 'var(--primary)', last = false }) {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  const n = useCountUp(typeof value === 'number' ? value : 0, 1100, go);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="p-3 text-center"
      style={{ borderRight: last ? 'none' : '1px solid var(--outline-variant)', borderBottom: '1px solid var(--outline-variant)' }}>
      <span className={`font-bold block leading-none shimmer-text`} style={{ fontFamily: 'Manrope', fontSize: 22 }}>
        {typeof value === 'number' ? `${n}${value === 50 ? '+' : ''}` : value}
      </span>
      <span className="text-label-sm text-secondary block mt-0.5">{label}</span>
      {sub && <span className="text-label-sm block" style={{ color: 'var(--outline)', fontSize: 10 }}>{sub}</span>}
    </div>
  );
}

const HERO_PRODUCTS = [
  { slug: 'plevypan-40',     label: 'GASTRO',        lc: 'var(--primary)',   lb: 'var(--surface-container-low)', sub: 'Pantoprazole 40mg',       pack: '10×10 Alu-Alu' },
  { slug: 'plevypan-dsr',    label: 'ANTI-EMETIC',   lc: 'var(--tertiary)',  lb: '#ecfdf5',                      sub: 'Pantoprazole + Domp.',     pack: '10×10 Capsules' },
  { slug: 'poly-intest',     label: 'NUTRACEUTICAL', lc: '#4f46e5',          lb: '#eef2ff',                      sub: 'Pre & Probiotic FOS',      pack: 'GMP Certified' },
  { slug: 'otelezos-beta-50',label: 'CARDIO',        lc: '#b45309',          lb: '#fffbeb',                      sub: 'Metoprolol + Telmisartan', pack: 'Batch Tested' },
];

const PATHWAY_CARDS = [
  { num: '01', icon: 'domain',        title: 'Company Overview',       desc: 'Institutional history, core management values, and our central operations headquartered in Mumbai, India.', to: '/about' },
  { num: '02', icon: 'medication',    title: 'Product Portfolio',      desc: 'Therapeutic formulations, dosage forms, active dossiers, and rigorous batch quality release parameters.',   to: '/products' },
  { num: '03', icon: 'verified',      title: 'Responsible Information',desc: 'CDSCO and WHO-GMP aligned medical communication, statutory labeling, and clinical disclaimer governance.',   to: '/about' },
  { num: '04', icon: 'support_agent', title: 'Contact & Enquiries',    desc: 'Dedicated institutional quotation desk, hospital tender inquiries, and verified distributor onboarding.',    to: '/contact' },
];

const CATEGORIES = [
  { icon: 'pill',            color: 'var(--primary)',  bg: 'var(--surface-container-low)', title: 'Tablets & Capsules', sub: 'Gastro, Anti-infectives, NSAIDs & Antibiotics',    tags: ['Pantoprazole','Amoxicillin','Alu-Alu blister'] },
  { icon: 'nutrition',       color: 'var(--tertiary)', bg: '#ecfdf5',                      title: 'Nutraceuticals',     sub: 'Probiotics, Multivitamins, Essential Minerals',     tags: ['Pre & Probiotic FOS','Zinc & D3','Softgel format'] },
  { icon: 'cardiology',      color: '#dc2626',         bg: '#fef2f2',                      title: 'Cardiology',         sub: 'Beta-blockers, Angiotensin Receptor Blockers, Statins', tags: ['Telmisartan','Metoprolol','Atorvastatin'] },
  { icon: 'neurology',       color: '#7c3aed',         bg: '#f5f3ff',                      title: 'CNS / Neuro',        sub: 'Neurotonics, Anxiolytics & Cognitive Support',      tags: ['Citicoline','Methylcobalamin','Controlled spec'] },
  { icon: 'medical_services',color: '#d97706',         bg: '#fffbeb',                      title: 'Critical Care',      sub: 'Injectables, Infusion Solutions & Emergency Care',  tags: ['Sterile Vials','Lyophilized dry','IV Infusion'] },
  { icon: 'vaccines',        color: '#0d9488',         bg: '#f0fdfa',                      title: 'Other Lines',        sub: 'Oral Syrups, Topical Ointments, Suspensions',       tags: ['Cough syrups','Analgesic gels','Pediatric drops'] },
];

export default function Home() {
  const { addToCart } = useCart();
  const featured = products.slice(0, 8);

  return (
    <div>

      {/* ══════════════════════════════════════
          01  HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 50%, var(--surface-bright) 100%)', borderBottom: '1px solid var(--outline-variant)', paddingTop: 40, paddingBottom: 64 }}>
        {/* ambient glows */}
        <div style={{ position:'absolute', top:-48, right:-48, width:256, height:256, borderRadius:'50%', background:'rgba(0,98,140,.08)', filter:'blur(48px)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:192, left:-48, width:224, height:224, borderRadius:'50%', background:'rgba(126,249,198,.2)', filter:'blur(48px)', pointerEvents:'none' }} />

        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

            {/* LEFT — 7 cols */}
            <motion.div className="lg:col-span-7 flex flex-col items-start z-10 space-y-5"
              initial="hidden" animate="visible" variants={fLeft} transition={{ duration: 0.6 }}>

              {/* eyebrow pill with ping animation */}
              <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-eyebrow text-primary uppercase tracking-wider"
                style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', boxShadow:'0 1px 4px rgba(0,0,0,.06)' }}>
                <span style={{ position:'relative', width:8, height:8, display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
                  <span className="ping-dot" style={{ position:'absolute', width:8, height:8, borderRadius:'50%', background:'rgba(0,98,140,.4)', display:'inline-block' }} />
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--primary)', display:'inline-block', position:'relative', zIndex:1 }} />
                </span>
                Pharmaceutical Product Catalogue
              </motion.div>

              {/* H1 */}
              <h1 className="text-on-surface" style={{ fontFamily:'Manrope', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:700, lineHeight:1.1, letterSpacing:'-0.02em' }}>
                Trusted Pharmaceutical Solutions for Better{' '}
                <span className="text-primary" style={{ textDecoration:'underline', textDecorationColor:'var(--secondary-container)', textDecorationThickness:4, textUnderlineOffset:8 }}>
                  Healthcare Access
                </span>
              </h1>

              {/* body */}
              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }}
                className="text-body-lg text-on-surface-variant" style={{ maxWidth:520 }}>
                <strong style={{ color:'var(--primary)', fontWeight:800 }}>Elamus Pharmaceuticals</strong> Pvt. Ltd. offers a growing portfolio of pharmaceutical and nutraceutical products with an uncompromising focus on quality, responsible information, and dependable enquiry support.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
                className="flex flex-wrap gap-3">
                <Link to="/products" className="btn-primary">
                  Explore Products
                  <span className="material-symbols-outlined" style={{ fontSize:18 }}>arrow_forward</span>
                </Link>
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontSize:20 }}>chat</span>
                  Enquire on WhatsApp
                </a>
              </motion.div>

              {/* trust ticks */}
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2"
                style={{ borderTop:'1px solid rgba(0,0,0,.08)' }}>
                {['Responsible Information','Mumbai Based HQ','Easy Product Enquiry'].map(t => (
                  <div key={t} className="flex items-center gap-1.5 text-secondary text-label-md">
                    <span className="material-symbols-outlined" style={{ fontSize:16, color:'var(--tertiary)' }}>check_circle</span>
                    {t}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — 5 cols: 2×2 floating product cards */}
            <motion.div className="lg:col-span-5 relative z-10"
              initial="hidden" animate="visible" variants={fRight} transition={{ duration:0.6, delay:0.2 }}>
              <div className="relative w-full max-w-md mx-auto p-4 rounded-3xl flex items-center justify-center"
                style={{ background:'rgba(255,255,255,.6)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,.8)', boxShadow:'0 20px 50px rgba(7,28,44,.08)' }}>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {HERO_PRODUCTS.map((hp, i) => {
                    const prod = products.find(p => p.slug === hp.slug);
                    if (!prod) return null;
                    const offsets = [0, 12, -8, 4];
                    return (
                      <div key={hp.slug}
                        className={i % 2 === 0 ? 'float-a' : 'float-b'}
                        style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', borderRadius:12, padding:14, display:'flex', flexDirection:'column', justifyContent:'space-between', transform:`translateY(${offsets[i]}px)`, boxShadow:'0 2px 8px rgba(0,0,0,.06)' }}>
                        <div>
                          <span className="text-label-sm font-bold px-1.5 py-0.5 rounded" style={{ color:hp.lc, background:hp.lb, fontSize:10 }}>{hp.label}</span>
                          {/* Product image */}
                          <div style={{ height:72, display:'flex', alignItems:'center', justifyContent:'center', margin:'8px 0' }}>
                            <img src={prod.image} alt={prod.alt}
                              style={{ maxHeight:'100%', maxWidth:'100%', objectFit:'contain' }} />
                          </div>
                          <h4 className="text-headline-sm font-bold text-on-surface" style={{ fontSize:14, lineHeight:1.2 }}>{prod.name}</h4>
                          <p className="text-body-sm text-secondary mt-0.5" style={{ fontSize:11 }}>{hp.sub}</p>
                        </div>
                        <div className="mt-3 pt-2 flex items-center justify-between text-label-sm text-secondary"
                          style={{ borderTop:'1px solid var(--outline-variant)', fontSize:11 }}>
                          <span>{hp.pack}</span>
                          <span className="material-symbols-outlined text-primary" style={{ fontSize:14 }}>verified</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* bottom badge */}
                <div className="absolute -bottom-4 flex items-center gap-1.5 text-on-primary text-label-sm font-medium px-4 py-1.5 rounded-full"
                  style={{ background:'var(--primary)', boxShadow:'0 4px 14px rgba(0,98,140,.35)', fontSize:12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize:14 }}>inventory_2</span>
                  Batch Release Certified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOGO + STATS SECTION ── */}
      <section style={{ background: 'linear-gradient(135deg, #071C2C 0%, #0369a1 60%, #0798D0 100%)', padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="flex flex-col items-center text-center">
            <img
              src="/images/products/elamus-logo.png"
              alt="Elamus Pharmaceuticals"
              style={{ height: 80, width: 'auto', objectFit: 'contain', mixBlendMode: 'screen', marginBottom: 24 }}
            />
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 520, lineHeight: 1.7, marginBottom: 32 }}>
              Trusted pharmaceutical products for better healthcare access — made for generations.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, width: '100%', maxWidth: 400 }}>
              {[
                { value: '100+', label: 'Total Brands' },
                { value: '90+', label: 'Employee Strength' },
              ].map((s) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP} transition={{ delay: 0.3, type: 'spring' }}
                  style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', padding: '20px 16px', backdropFilter: 'blur(8px)', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1, fontFamily: 'Manrope' }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginTop: 6 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background:'var(--surface-container-lowest)', paddingLeft:24, paddingRight:24 }}>
        <div className="container-custom" style={{ paddingTop:0, paddingBottom:0 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="rounded-2xl"
            style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', boxShadow:'0 12px 36px rgba(7,28,44,.08)', marginTop:-28, position:'relative', zIndex:20, overflow:'hidden' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <StatCell value="2022"   label="Established HQ"         sub="Mumbai, MH"                  color="var(--primary)" />
              <StatCell value="100+"   label="Total Brands"            sub="Active Portfolio"             color="var(--primary)" />
              <StatCell value="90+"    label="Employee Strength"       sub="Growing Team"                color="var(--tertiary)" />
              <StatCell value="Mumbai" label="Maharashtra, India"       sub="Logistics & Hub"             color="var(--on-surface)" last />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ELAMUS BANNER */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', overflow: 'hidden', margin: '0' }}
      >
        <img
          src="/elamus-banner.png"
          alt="Elamus Pharmaceuticals"
          style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '90vh' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(6,15,26,.15) 0%, rgba(6,15,26,.05) 40%, rgba(6,15,26,.35) 100%)',
          pointerEvents: 'none',
        }} />
      </motion.section>


      {/* ══════════════════════════════════════
          03  PRODUCT TICKER MARQUEE
      ══════════════════════════════════════ */}
      <div style={{ background:'var(--surface-container-low)', borderTop:'1px solid var(--outline-variant)', borderBottom:'1px solid var(--outline-variant)', padding:'10px 0', overflow:'hidden' }}>
        <div className="ticker flex gap-6" style={{ width:'max-content' }}>
          {[...products, ...products].map((p, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 shrink-0 px-3 py-1.5 rounded-lg"
              style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)' }}>
              <img src={p.image} alt={p.name} style={{ width:28, height:28, objectFit:'contain' }} />
              <span className="text-label-sm font-semibold text-on-surface-variant" style={{ fontSize:12, whiteSpace:'nowrap' }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          04  PATHWAYS
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'var(--surface-container-lowest)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-eyebrow text-primary uppercase font-bold">EXPLORE ELAMUS</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily:'Manrope' }}>
              Everything you need to know about Elamus Pharmaceuticals
            </h2>
            <div style={{ width:48, height:4, background:'var(--primary)', borderRadius:2, margin:'16px auto 0' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {PATHWAY_CARDS.map((card, i) => (
              <motion.div key={card.num} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.42, delay:i*0.09 }}>
                <Link to={card.to} style={{ textDecoration:'none', display:'block', height:'100%' }}>
                  <div className="group h-full flex flex-col justify-between p-6 rounded-xl"
                    style={{ background:'var(--surface)', border:'1px solid var(--outline-variant)', borderTop:'4px solid var(--primary)', boxShadow:'0 2px 8px rgba(0,0,0,.04)', transition:'box-shadow 0.22s, transform 0.22s' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,.10)'; e.currentTarget.style.transform='translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow='0 2px 8px rgba(0,0,0,.04)'; e.currentTarget.style.transform='translateY(0)'; }}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-sm font-bold" style={{ color:'rgba(0,98,140,.6)' }}>{card.num}</span>
                        <div className="flex items-center justify-center rounded-lg transition-colors"
                          style={{ width:40, height:40, background:'var(--surface-container)', color:'var(--primary)' }}>
                          <span className="material-symbols-outlined" style={{ fontSize:20 }}>{card.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-headline-sm font-bold text-on-surface mb-2" style={{ fontSize:17 }}>{card.title}</h3>
                      <p className="text-body-sm text-secondary leading-relaxed">{card.desc}</p>
                    </div>
                    <div className="inline-flex items-center gap-1 text-primary font-semibold mt-5" style={{ fontSize:14 }}>
                      Learn more
                      <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_forward</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          04  PRODUCT CATEGORIES
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'#F6FAFC', borderTop:'1px solid var(--outline-variant)', borderBottom:'1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-eyebrow text-primary uppercase font-bold">PRODUCT RANGE</span>
              <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily:'Manrope' }}>
                Pharmaceutical products across key therapeutic areas
              </h2>
            </div>
            <p className="text-body-sm text-secondary max-w-sm">
              Strictly compliant dosage representations meeting pharmaceutical standards for healthcare practitioners and pharmacies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.title} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.38, delay:i*0.07 }}>
                <Link to="/products" style={{ textDecoration:'none', display:'block' }}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl transition-all"
                    style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', boxShadow:'0 2px 6px rgba(0,0,0,.04)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,98,140,.4)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(0,0,0,.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='var(--outline-variant)'; e.currentTarget.style.boxShadow='0 2px 6px rgba(0,0,0,.04)'; }}>
                    <div className="flex items-center justify-center rounded-xl shrink-0"
                      style={{ width:48, height:48, background:cat.bg, color:cat.color }}>
                      <span className="material-symbols-outlined" style={{ fontSize:24 }}>{cat.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-title-md font-bold text-on-surface">{cat.title}</h3>
                      <p className="text-body-sm text-secondary mt-1">{cat.sub}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cat.tags.map(tag => (
                          <span key={tag} className="text-label-sm px-2 py-0.5 rounded"
                            style={{ background:'var(--surface-container)', color:'var(--on-surface-variant)', fontSize:11 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          05  QUALITY / RESPONSIBILITY
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'var(--surface-container-lowest)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            {/* LEFT — lab image card */}
            <motion.div className="lg:col-span-6" initial="hidden" whileInView="visible" viewport={VP} variants={fLeft} transition={{ duration:0.6 }}>
              <div className="rounded-2xl overflow-hidden" style={{ border:'1px solid var(--outline-variant)', boxShadow:'0 8px 24px rgba(0,0,0,.08)', background:'var(--surface)' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD9LSv1zl5pW73kK0V_9cR7UfpL-Hm6KzFLn4jdGbOqtJOcaw91DlzYGfpTcenyym9YeR1EpYlEe6FrxzeQwsfX1_h_C1_V2WTKYOSssk9iERpUhnEq2nn1J-St4POdRIRBtK_lf1ubmUXQYcDGZ1kFtlVj_Fzv7oCW-llfTe50sRFl6GGKl59ecYwWDb7KUHc_LH01IZVbyKYn3SyNjHr6yzsGdGQsO7HnYxq3VfWLqe2LflViEhg2A"
                  alt="Pharmaceutical quality control laboratory"
                  style={{ width:'100%', height:280, objectFit:'cover', display:'block' }}
                />
                <div className="p-5" style={{ background:'var(--surface-container-lowest)' }}>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4" style={{ borderBottom:'1px solid var(--outline-variant)' }}>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary" style={{ fontSize:20 }}>verified_user</span>
                      <span className="text-title-md font-bold text-on-surface">Quality Assurance Framework</span>
                    </div>
                    <span className="text-label-sm font-semibold px-2.5 py-1 rounded" style={{ color:'var(--tertiary)', background:'#ecfdf5', fontSize:11 }}>
                      WHO-GMP Compliant Standards
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                    {[['CDSCO','Norms Aligned'],['ISO 9001','Quality Assured'],['COA / DMF','Verified Dossiers']].map(([t,s]) => (
                      <div key={t} className="p-3 rounded-lg" style={{ background:'var(--surface)', border:'1px solid var(--outline-variant)' }}>
                        <div className="text-title-md font-bold text-primary" style={{ fontSize:13 }}>{t}</div>
                        <div className="text-label-sm text-secondary uppercase mt-0.5" style={{ fontSize:10 }}>{s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — text */}
            <motion.div className="lg:col-span-6" initial="hidden" whileInView="visible" viewport={VP} variants={fRight} transition={{ duration:0.6, delay:0.15 }}>
              <span className="text-eyebrow text-primary uppercase font-bold">OUR RESPONSIBILITY</span>
              <h2 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily:'Manrope' }}>
                A disciplined approach to responsible product information
              </h2>
              <p className="text-body-md text-secondary mb-6">
                Elamus Pharmaceuticals ensures that product claims, chemical salt percentages, and pharmacological warnings adhere to strict Indian regulatory expectations for ethical dissemination.
              </p>
              <ul className="space-y-3.5 mb-8">
                {[
                  'Clearly presented composition and active ingredients',
                  'Organized pharmaceutical catalogue with verified pack codes',
                  'Responsible corporate and dosage warning communication',
                  'Easy enquiry support with prompt documentation turnaround',
                  'Professional healthcare presentation for licensed practitioners',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize:20 }}>check_circle</span>
                    <span className="text-body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about"
                className="inline-flex items-center gap-2 text-on-primary text-label-md font-semibold px-6 py-3 rounded-lg transition-colors"
                style={{ background:'#071C2C', textDecoration:'none' }}
                onMouseEnter={e => e.currentTarget.style.background='#0B1623'}
                onMouseLeave={e => e.currentTarget.style.background='#071C2C'}>
                About Elamus Standards
                <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          06  FEATURED PRODUCT CATALOGUE
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'rgba(234,247,252,.6)', borderTop:'1px solid var(--outline-variant)', borderBottom:'1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-eyebrow text-primary uppercase font-bold">OUR PORTFOLIO</span>
              <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily:'Manrope' }}>Featured Product Catalogue</h2>
            </div>
            <Link to="/products"
              className="inline-flex items-center gap-1.5 text-label-md font-semibold px-4 py-2 rounded-lg transition-all"
              style={{ color:'var(--primary)', border:'1px solid rgba(0,98,140,.3)', background:'white', textDecoration:'none', fontSize:13 }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.color='white'; }}
              onMouseLeave={e => { e.currentTarget.style.background='white'; e.currentTarget.style.color='var(--primary)'; }}>
              <span className="material-symbols-outlined" style={{ fontSize:16 }}>download</span>
              View Full Catalogue
            </Link>
          </motion.div>

          {/* Dual-row product image marquee */}
          <div style={{ overflow:'hidden', marginBottom:40, borderRadius:16, background:'rgba(255,255,255,.6)', border:'1px solid var(--outline-variant)', padding:'16px 0' }}>
            {/* Row 1 — left */}
            <div className="marquee-left flex gap-3 mb-3" style={{ width:'max-content' }}>
              {[...products.slice(0,14), ...products.slice(0,14)].map((p, i) => (
                <div key={`ml-${i}`} style={{ width:100, height:88, flexShrink:0, background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', padding:10 }}>
                  <img src={p.image} alt={p.alt} style={{ width:'100%', height:'100%', objectFit:'contain' }} loading="lazy" />
                </div>
              ))}
            </div>
            {/* Row 2 — right */}
            <div className="marquee-right flex gap-3" style={{ width:'max-content' }}>
              {[...products.slice(14,28), ...products.slice(14,28)].map((p, i) => (
                <div key={`mr-${i}`} style={{ width:100, height:88, flexShrink:0, background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', padding:10 }}>
                  <img src={p.image} alt={p.alt} style={{ width:'100%', height:'100%', objectFit:'contain' }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p, i) => (
              <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.36, delay:i*0.07 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={VP} transition={{ delay:0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-label-md font-semibold transition-all"
              style={{ border:'1px solid var(--outline-variant)', background:'var(--surface-container-lowest)', color:'var(--on-surface)', textDecoration:'none' }}
              onMouseEnter={e => e.currentTarget.style.background='var(--surface-container-low)'}
              onMouseLeave={e => e.currentTarget.style.background='var(--surface-container-lowest)'}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize:18 }}>description</span>
              View Full Catalogue
            </Link>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-label-md font-semibold btn-primary">
              <span className="material-symbols-outlined" style={{ fontSize:18 }}>send</span>
              Enquire About Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          07  HOW ENQUIRIES WORK  (dark)
      ══════════════════════════════════════ */}
      <section className="sp relative overflow-hidden"
        style={{ background:'linear-gradient(135deg, #071C2C 0%, #0B2539 100%)', color:'white' }}>
        <div style={{ position:'absolute', top:'-25%', right:'25%', width:384, height:384, borderRadius:'50%', background:'rgba(0,98,140,.18)', filter:'blur(64px)', pointerEvents:'none' }} />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-eyebrow font-bold uppercase tracking-wider" style={{ color:'var(--primary-fixed)' }}>SIMPLE ENQUIRY PROCESS</span>
            <h2 className="text-headline-lg text-on-primary mt-2" style={{ fontFamily:'Manrope' }}>
              Clear and convenient product enquiry support
            </h2>
            <p className="text-body-sm mt-3" style={{ color:'var(--surface-dim)' }}>
              Streamlined protocol for hospital supply administrators, medical practitioners, and registered pharmacy networks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* animated connector line */}
            <motion.div className="hidden md:block absolute"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              style={{ top:'50%', left:64, right:64, height:1, borderTop:'1px dashed rgba(255,255,255,.18)', transform:'translateY(-24px) scaleX(0)', transformOrigin:'left', zIndex:0 }} />
            {[
              { n:'01', icon:'search',        title:'Browse Catalogue',       desc:'Explore active pharmaceutical ingredients, molecular combinations, and specific packaging specifications.' },
              { n:'02', icon:'shopping_cart', title:'Add Products to Enquiry', desc:'Pick required formulations and dosage units to build a customized institutional request for quotation (RFQ).' },
              { n:'03', icon:'send',          title:'Send via WhatsApp',       desc:'Instant transmission directly to our Mumbai regulatory & quotation desk for quick pricing confirmation.' },
            ].map((s, i) => (
              <motion.div key={s.n} initial="hidden" whileInView="visible" viewport={VP} variants={fScale} transition={{ duration:0.45, delay:i*0.13 }}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl transition-all"
                style={{ background:'rgba(255,255,255,.05)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,.10)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,98,140,.5)'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,.10)'; e.currentTarget.style.background='rgba(255,255,255,.05)'; }}>
                <div className="flex items-center justify-center font-bold text-xl mb-6 rounded-2xl"
                  style={{ width:56, height:56, background:'rgba(0,98,140,.2)', color:'var(--primary-fixed)', border:'1px solid rgba(0,98,140,.4)', fontSize:20, fontFamily:'Manrope', fontWeight:700 }}>
                  {s.n}
                </div>
                <h3 className="text-headline-sm font-bold text-on-primary mb-2" style={{ fontFamily:'Manrope', fontSize:18 }}>{s.title}</h3>
                <p className="text-body-sm" style={{ color:'rgba(255,255,255,.6)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          08  WHY CHOOSE ELAMUS
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'var(--surface-container-lowest)', borderBottom:'1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.5 }}
            className="text-center max-w-xl mx-auto mb-14">
            <span className="text-eyebrow text-primary uppercase font-bold">OUR STRENGTHS</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily:'Manrope' }}>
              Why healthcare partners choose Elamus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4" style={{ borderTop:'1px solid var(--outline-variant)', borderLeft:'1px solid var(--outline-variant)' }}>
            {[
              { icon:'policy',        title:'Responsible Information', desc:'Exact salt formulas, verified warnings, and accurate batch records transparently communicated.' },
              { icon:'clinical_notes',title:'Professional Catalogue',  desc:'Structured according to CDSCO and WHO guidelines for direct verification by doctors and pharmacists.' },
              { icon:'task_alt',      title:'Simple Enquiry Process',  desc:'No unnecessary procurement hurdles. Swift RFQ creation and rapid direct communication.' },
              { icon:'quickreply',    title:'Responsive Support',      desc:'Dedicated regional representatives answering institutional supply calls within 1 business hour.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration:0.38, delay:i*0.09 }}
                className="p-6 flex flex-col items-start"
                style={{ borderRight:'1px solid var(--outline-variant)', borderBottom:'1px solid var(--outline-variant)' }}>
                <span className="material-symbols-outlined text-primary mb-3" style={{ fontSize:30 }}>{item.icon}</span>
                <h4 className="text-headline-sm font-bold text-on-surface" style={{ fontSize:16 }}>{item.title}</h4>
                <p className="text-body-sm text-secondary mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          09  CONTACT / ENQUIRY FORM
      ══════════════════════════════════════ */}
      <section className="sp" style={{ background:'var(--surface)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

            {/* LEFT — 5 cols */}
            <motion.div className="lg:col-span-5 flex flex-col justify-between" initial="hidden" whileInView="visible" viewport={VP} variants={fLeft} transition={{ duration:0.6 }}>
              <div>
                <span className="text-eyebrow text-primary uppercase font-bold">COMMERCIAL DESK</span>
                <h2 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily:'Manrope' }}>
                  Get in touch with our institutional supply team
                </h2>
                <p className="text-body-md text-secondary mb-8">
                  Whether you are an authorized pharmaceutical distributor, a hospital procurement officer, or a pharmacy owner, we are ready to assist you.
                </p>
                <div className="space-y-5">
                  {[
                    { icon:'call',        label:'Telephone Direct Line',    val:'+91 7989005105',          href:'tel:+917989005105' },
                    { icon:'mail',        label:'Official Quotation Email', val:'elamusmdgkr@gmail.com',   href:'mailto:elamusmdgkr@gmail.com' },
                    { icon:'location_on', label:'Corporate Headquarters',   val:'Unit No. 611, Reliables Pride, Jogeshwari West, Mumbai 400102', href:null },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center rounded-lg shrink-0"
                        style={{ width:40, height:40, background:'var(--surface-container)', color:'var(--primary)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize:20 }}>{c.icon}</span>
                      </div>
                      <div>
                        <div className="text-label-sm text-secondary font-medium">{c.label}</div>
                        {c.href
                          ? <a href={c.href} className="text-title-md font-semibold text-on-surface hover:text-primary transition-colors" style={{ textDecoration:'none' }}>{c.val}</a>
                          : <div className="text-title-md font-semibold text-on-surface" style={{ fontSize:14 }}>{c.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-8" style={{ borderTop:'1px solid var(--outline-variant)' }}>
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-label-md font-semibold py-3.5 px-4 rounded-xl transition-all"
                  style={{ background:'rgba(37,211,102,.12)', border:'1px solid rgba(37,211,102,.3)', color:'#075e54', textDecoration:'none' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(37,211,102,.22)'}
                  onMouseLeave={e => e.currentTarget.style.background='rgba(37,211,102,.12)'}>
                  <span className="material-symbols-outlined" style={{ fontSize:20 }}>chat</span>
                  Direct WhatsApp Desk (+91 7989005105)
                </a>
              </div>
            </motion.div>

            {/* RIGHT — 7 cols: form */}
            <motion.div className="lg:col-span-7" initial="hidden" whileInView="visible" viewport={VP} variants={fRight} transition={{ duration:0.6, delay:0.15 }}>
              <div className="p-8 rounded-2xl" style={{ background:'var(--surface-container-lowest)', border:'1px solid var(--outline-variant)', boxShadow:'0 8px 24px rgba(0,0,0,.08)' }}>
                <h3 className="text-headline-sm font-bold text-on-surface mb-1" style={{ fontFamily:'Manrope', fontSize:20 }}>Submit Product RFQ</h3>
                <p className="text-body-sm text-secondary mb-6">Complete the details below and our medical commercial desk will prepare documentation.</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const f = e.target;
                    const txt = `Hello Elamus Pharmaceuticals,\n\nName: ${f.name.value}\nCompany: ${f.company.value}\nPhone: ${f.phone.value}\nEmail: ${f.email.value}\nSubject: ${f.subject.value}\nMessage: ${f.message.value}`;
                    window.open(`https://wa.me/917989005105?text=${encodeURIComponent(txt)}`, '_blank');
                  }}
                  className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Your Name *</label>
                      <input name="name" type="text" required placeholder="e.g. Dr. A. Sharma" className="form-input" />
                    </div>
                    <div>
                      <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Company / Hospital / Pharmacy *</label>
                      <input name="company" type="text" required placeholder="Organization legal name" className="form-input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Phone Number *</label>
                      <input name="phone" type="tel" required placeholder="+91 98XXX XXXXX" className="form-input" />
                    </div>
                    <div>
                      <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Email Address *</label>
                      <input name="email" type="email" required placeholder="name@hospital.com" className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Enquiry Subject</label>
                    <select name="subject" className="form-select">
                      <option>Bulk Hospital Supply Quotation</option>
                      <option>Regional Distributor Application</option>
                      <option>Certificate of Analysis (COA) Request</option>
                      <option>Drug Master File (DMF) Inquiry</option>
                      <option>General Medical Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-label-sm font-semibold text-on-surface block mb-1.5">Message / Required Molecules</label>
                    <textarea name="message" rows={4} placeholder="Mention product names (e.g. Plevypan 40, Poly Intest), required batch volume, and delivery destination in India..." className="form-textarea" />
                  </div>
                  <button type="submit" className="w-full btn-primary" style={{ borderRadius:10, height:46 }}>
                    Submit Enquiry
                    <span className="material-symbols-outlined" style={{ fontSize:18 }}>send</span>
                  </button>
                  <p className="text-label-sm text-center" style={{ color:'var(--outline)', fontSize:11 }}>
                    Submissions are handled strictly under pharmaceutical non-disclosure and CDSCO regulatory guidelines.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10  CTA BEFORE FOOTER
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background:'#071C2C', padding:'56px 24px', borderTop:'1px solid rgba(255,255,255,.08)' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 80% 20%, rgba(0,98,140,.12), transparent 50%)', pointerEvents:'none' }} />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <motion.h2 initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={VP} transition={{ duration:0.5 }}
                className="text-headline-lg text-on-primary" style={{ fontFamily:'Manrope', fontSize:'clamp(22px,3vw,30px)' }}>
                Need immediate product information?
              </motion.h2>
              <p className="text-body-sm mt-1" style={{ color:'var(--surface-dim)' }}>
                Our commercial specialists in Mumbai are ready to assist your institution.
              </p>
            </div>
            <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={VP} transition={{ delay:0.25 }}
              className="flex flex-wrap items-center gap-4">
              <Link to="/products" className="btn-primary glow-pulse">
                Explore Products →
              </Link>
              <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                <span className="material-symbols-outlined" style={{ fontSize:18, color:'var(--tertiary-fixed)' }}>chat</span>
                WhatsApp Enquiry
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
