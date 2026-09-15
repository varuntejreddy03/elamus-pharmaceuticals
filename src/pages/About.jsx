import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from '../data/products';

const fUp   = { hidden: { opacity: 0, y: 18 },  visible: { opacity: 1, y: 0 } };
const fLeft = { hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } };
const fRight= { hidden: { opacity: 0, x: 18 },  visible: { opacity: 1, x: 0 } };
const VP    = { once: true, margin: '-40px' };

export default function About() {
  return (
    <div>

      {/* ── HERO HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 100%)', borderBottom: '1px solid var(--outline-variant)', padding: '56px 24px 48px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fUp} className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-5">
              <img src="/images/products/elamus-logo.png" alt="Elamus Pharmaceuticals" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
            </div>
            <span className="text-eyebrow text-primary uppercase font-bold">About Us</span>
            <h1 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px,4vw,40px)' }}>
              About Elamus Pharmaceuticals
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Elamus Pharmaceuticals Private Limited is an Indian pharmaceutical company incorporated on April 26, 2022. Headquartered in Mumbai, Maharashtra, the company specialises in marketing and distributing a wide range of medications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY PROFILE STATS ── */}
      <section style={{ background: 'var(--surface-container-lowest)', paddingLeft: 24, paddingRight: 24 }}>
        <div className="container-custom" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 8px 24px rgba(0,0,0,.08)', marginTop: -24, position: 'relative', zIndex: 10 }}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { icon: 'calendar_month', value: '2022',    label: 'Incorporated',      sub: 'April 26, 2022',       color: 'var(--primary)' },
                { icon: 'medication',     value: '50+',     label: 'Products Listed',   sub: 'Active Dossiers',      color: 'var(--primary)' },
                { icon: 'location_city',  value: 'Mumbai',  label: 'Headquarters',      sub: 'Maharashtra, India',   color: 'var(--on-surface)' },
                { icon: 'verified_user',  value: 'CDSCO',   label: 'Regulatory Aligned',sub: 'WHO-GMP Standards',    color: 'var(--tertiary)' },
              ].map((s, i) => (
                <div key={s.label} className="flex flex-col items-center text-center p-5"
                  style={{ borderRight: i < 3 ? '1px solid var(--outline-variant)' : 'none', borderBottom: i < 2 ? '1px solid var(--outline-variant)' : 'none' }}>
                  <div className="flex items-center justify-center rounded-xl mb-3" style={{ width: 38, height: 38, background: 'var(--surface-container)', color: s.color }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{s.icon}</span>
                  </div>
                  <span className="font-bold leading-none mb-1" style={{ fontFamily: 'Manrope', fontSize: 22, color: s.color }}>{s.value}</span>
                  <span className="text-label-sm text-secondary">{s.label}</span>
                  <span className="text-label-sm" style={{ color: 'var(--outline)', fontSize: 10, marginTop: 2 }}>{s.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-12">
            <span className="text-eyebrow text-primary uppercase font-bold">Our Purpose</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Mission & Vision</h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 mb-6">
            {[
              { icon: 'my_location', title: 'Our Mission', desc: 'To provide accessible and reliable pharmaceutical products through a transparent catalogue system, enabling healthcare professionals and stakeholders to make informed enquiries with ease and confidence.' },
              { icon: 'visibility',  title: 'Our Vision',  desc: 'To become a trusted name in pharmaceutical distribution by maintaining responsible product communication, quality standards, and building long-term relationships with healthcare partners across India.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
                <div className="flex items-center justify-center rounded-xl mb-4" style={{ width: 44, height: 44, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                </div>
                <h3 className="text-headline-sm font-bold text-on-surface mb-3" style={{ fontFamily: 'Manrope', fontSize: 18 }}>{item.title}</h3>
                <p className="text-body-md text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Approach */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="p-6 rounded-xl"
            style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 22 }}>business_center</span>
              <div>
                <h2 className="text-headline-sm font-bold text-on-surface mb-3" style={{ fontFamily: 'Manrope', fontSize: 18 }}>Our Approach</h2>
                <p className="text-body-md text-secondary mb-3">
                  We specialise in marketing, distribution, and wholesale of pharmaceutical products including tablets, capsules, inhalers, and syrups covering respiratory, CNS, and anti-infective categories.
                </p>
                <p className="text-body-md text-secondary">
                  We encourage visitors to refer to approved product labels and consult qualified healthcare professionals for composition, dosage, and usage guidelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="sp" style={{ background: 'var(--surface-container-low)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-12">
            <span className="text-eyebrow text-primary uppercase font-bold">What We Stand For</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Our Core Values</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'verified_user', title: 'Reliability',             desc: 'Accurate and consistent product catalogue information you can trust.' },
              { icon: 'menu_book',     title: 'Responsible Information', desc: 'Verified product details without exaggerated or unverified claims.' },
              { icon: 'groups',        title: 'Accessibility',           desc: 'Easy enquiry through WhatsApp, phone, and direct contact channels.' },
              { icon: 'star',          title: 'Quality Focus',           desc: 'High standards in product range, presentation, and communication.' },
            ].map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ delay: i * 0.08 }}
                className="flex flex-col p-5 rounded-xl"
                style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 6px rgba(0,0,0,.04)' }}>
                <div className="flex items-center justify-center rounded-lg mb-4" style={{ width: 44, height: 44, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{v.icon}</span>
                </div>
                <h3 className="text-title-md font-bold text-on-surface mb-2">{v.title}</h3>
                <p className="text-body-sm text-secondary">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE IMAGE ── */}
      <section className="sp" style={{ background: 'var(--surface-container-low)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-10">
            <span className="text-eyebrow text-primary uppercase font-bold">Our Workspace</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Our Office &amp; Conference Hall</h2>
            <p className="text-body-md text-secondary mt-3 max-w-xl mx-auto">A professional workspace built for pharmaceutical excellence in the heart of Mumbai.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ delay: 0.1 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { src: '/WhatsApp Image 2026-09-12 at 6.54.50 PM (1).jpeg', alt: 'Elamus Office - View 1' },
                { src: '/WhatsApp Image 2026-09-12 at 6.54.51 PM.jpeg',     alt: 'Elamus Office - View 2' },
                { src: '/WhatsApp Image 2026-09-12 at 6.54.50 PM (2).jpeg', alt: 'Elamus Office - View 3' },
              ].map((img, i) => (
                <div key={i} style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--outline-variant)', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: 'clamp(200px, 30vw, 420px)', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, borderRadius: 12, border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', padding: '14px 20px', textAlign: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--on-surface-variant)' }}>Unit No. 611, Reliables Pride, Anand Nagar, Opp. Heera Panna, Jogeshwari West, Mumbai 400102</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT GALLERY SCROLL ── */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-10">
            <span className="text-eyebrow text-primary uppercase font-bold">Our Products</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Product Gallery</h2>
            <p className="text-body-md text-secondary mt-3">A glimpse of our 100+ pharmaceutical brands</p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Scroll container */}
            <div
              id="product-gallery-scroll"
              style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 12, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.slice(0, 10).map((p, i) => (
                <motion.div key={p.slug}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP} transition={{ delay: i * 0.06 }}
                  style={{ flexShrink: 0, width: 260, borderRadius: 20, border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(7,152,208,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'; }}
                >
                  <div style={{ height: 200, background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                    <img src={p.image} alt={p.alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', transition: 'transform 0.4s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 4 }}>{p.name}</h3>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', background: 'var(--surface-container)', padding: '2px 8px', borderRadius: 20 }}>{p.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll buttons */}
            <button
              onClick={() => document.getElementById('product-gallery-scroll').scrollBy({ left: -300, behavior: 'smooth' })}
              style={{ position: 'absolute', left: -16, top: '45%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--on-surface)' }}>chevron_left</span>
            </button>
            <button
              onClick={() => document.getElementById('product-gallery-scroll').scrollBy({ left: 300, behavior: 'smooth' })}
              style={{ position: 'absolute', right: -16, top: '45%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--on-surface)' }}>chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* MANUFACTURING UNIT */}
      <section style={{ background: '#060f1a' }}>

        {/* Header */}
        <div style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: '#7ee8fa', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Our Facility</span>
            <h2 style={{ fontFamily: 'Manrope', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, color: 'white', lineHeight: 1.1, margin: '0 auto 16px' }}>Manufacturing Unit</h2>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
              State-of-the-art facility under strict WHO-GMP and CDSCO guidelines.
            </p>
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px 80px' }}
        >
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,.7)', border: '1px solid rgba(255,255,255,.08)' }}>
            <video controls autoPlay muted loop playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/ba9f1aa035.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Full-bleed image panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '0 24px 24px' }}>
        {[
          { src: '/tablet-manufacturing.webp',  label: 'Tablet Manufacturing',    sub: 'High-speed tablet press lines with automated inspection systems' },
          { src: '/quality-control-lab.webp',   label: 'Quality Control Lab',     sub: 'Rigorous batch testing and analytical verification protocols' },
          { src: '/research-development.webp',  label: 'Research and Development',sub: 'Formulation science and molecular innovation centre' },
          { src: '/packaging-unit.webp',        label: 'Packaging Unit',          sub: 'Automated primary and secondary packaging lines' },
          { src: '/sterile-production.webp',    label: 'Sterile Production',      sub: 'ISO Class 5 clean room for injectable manufacturing' },
          { src: '/dispensing-area.webp',       label: 'Dispensing Area',         sub: 'Precision raw material weighing and dispensing booths' },
          { src: '/blister-packing.webp',       label: 'Blister Packing',         sub: 'Alu-Alu and PVC blister sealing operations' },
          { src: '/warehouse-storage.webp',     label: 'Warehouse and Storage',   sub: 'Temperature-controlled storage and logistics hub' },
          { src: '/analytical-testing.webp',    label: 'Analytical Testing',      sub: 'HPLC, dissolution and stability testing equipment' },
          { src: '/microbiology-lab.webp',      label: 'Microbiology Lab',        sub: 'Sterility testing and microbial limit analysis' },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}
          >
            <motion.img
              src={img.src}
              alt={img.label}
              loading="lazy"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%', height: 'clamp(300px, 52vw, 680px)', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 20,
              background: i % 2 === 0
                ? 'linear-gradient(to right, rgba(6,15,26,.92) 0%, rgba(6,15,26,.55) 42%, rgba(6,15,26,.1) 100%)'
                : 'linear-gradient(to left,  rgba(6,15,26,.92) 0%, rgba(6,15,26,.55) 42%, rgba(6,15,26,.1) 100%)',
            }} />
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                top: '50%', transform: 'translateY(-50%)',
                left:  i % 2 === 0 ? 'clamp(24px, 7vw, 80px)' : 'auto',
                right: i % 2 === 0 ? 'auto' : 'clamp(24px, 7vw, 80px)',
                maxWidth: 'clamp(220px, 36vw, 440px)',
                textAlign: i % 2 === 0 ? 'left' : 'right',
              }}
            >
              <div style={{ width: 36, height: 3, borderRadius: 2, background: 'linear-gradient(90deg,#7ee8fa,#0798d0)', marginBottom: 14, marginLeft: i % 2 === 0 ? 0 : 'auto' }} />
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#7ee8fa', textTransform: 'uppercase', marginBottom: 10 }}>
                {String(i + 1).padStart(2, '0')} / 10
              </div>
              <h3 style={{ fontFamily: 'Manrope', fontSize: 'clamp(20px, 3vw, 40px)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: 12 }}>
                {img.label}
              </h3>
              <p style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
                {img.sub}
              </p>
            </motion.div>
          </motion.div>
        ))}
        </div>

        {/* Compliance strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ padding: '56px 24px', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}
        >
          {['WHO-GMP Certified', 'CDSCO Compliant', 'ISO 9001:2015', 'COA Verified Batches', 'Cold Chain Capable'].map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: 100, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15, color: '#7ee8fa' }}>verified</span>
              {b}
            </div>
          ))}
        </motion.div>
      </section>



      {/* ── COMPANY INFO + OFFICE ── */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

            {/* Left — registered office */}
            <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fLeft} transition={{ duration: 0.6 }}>
              <span className="text-eyebrow text-primary uppercase font-bold">Corporate Details</span>
              <h2 className="text-headline-lg text-on-surface mt-2 mb-6" style={{ fontFamily: 'Manrope', fontSize: 'clamp(22px,3vw,32px)' }}>
                Registered Office
              </h2>
              <div className="space-y-4">
                {[
                  { icon: 'location_on',  label: 'Address',    value: 'Unit No. 611, Reliables Pride, Anand Nagar, Opp. Heera Panna, Jogeshwari West, Mumbai, Maharashtra 400102' },
                  { icon: 'badge',        label: 'CIN',        value: 'U24100MH2022PTC381442' },
                  { icon: 'call',         label: 'Phone',      value: '+91 7989005105', href: 'tel:+917989005105' },
                  { icon: 'mail',         label: 'Email',      value: 'elamusmdgkr@gmail.com', href: 'mailto:elamusmdgkr@gmail.com' },
                  { icon: 'schedule',     label: 'Hours',      value: 'Mon – Sat: 9:00 AM – 6:30 PM IST' },
                ].map(row => (
                  <div key={row.label} className="flex items-start gap-4">
                    <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 38, height: 38, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{row.icon}</span>
                    </div>
                    <div>
                      <div className="text-label-sm text-secondary font-medium mb-0.5">{row.label}</div>
                      {row.href
                        ? <a href={row.href} className="text-body-md font-semibold text-on-surface hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>{row.value}</a>
                        : <div className="text-body-md font-medium text-on-surface">{row.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — responsibility card */}
            <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fRight} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="p-6 rounded-2xl mb-5" style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
                <div className="flex items-center gap-3 pb-4 mb-4" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 48, height: 48, background: 'var(--surface-container-high)', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }}>fact_check</span>
                  </div>
                  <div>
                    <h3 className="text-title-md font-bold text-on-surface">Standardized Compliance</h3>
                    <span className="text-label-sm font-semibold flex items-center gap-1" style={{ color: 'var(--tertiary)', fontSize: 11 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13 }}>verified</span>
                      CDSCO &amp; WHO-GMP Compliant
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Clearly presented composition and active ingredients',
                    'Organized pharmaceutical catalogue with verified pack codes',
                    'Responsible corporate and dosage warning communication',
                    'Easy enquiry support with prompt documentation turnaround',
                    'Professional healthcare presentation for licensed practitioners',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 18 }}>check_circle</span>
                      <span className="text-body-sm text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 10, textDecoration: 'none' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>medication</span>
                  View Products
                </Link>
                <Link to="/contact" className="btn-outline" style={{ flex: 1, justifyContent: 'center', borderRadius: 10, textDecoration: 'none' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>support_agent</span>
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className="sp" style={{ background: 'var(--surface-container-low)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}>
            <div className="flex items-center justify-center rounded-2xl mx-auto mb-5" style={{ width: 52, height: 52, background: 'var(--surface-container)', color: 'var(--primary)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 26 }}>work</span>
            </div>
            <span className="text-eyebrow text-primary uppercase font-bold">Join Our Team</span>
            <h2 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily: 'Manrope' }}>Careers at Elamus</h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              We are always looking for talented and motivated individuals to join our growing team. If you are passionate about the pharmaceutical industry, we'd love to hear from you.
            </p>
            <div className="p-6 rounded-xl text-left" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
              <h3 className="text-title-md font-bold text-on-surface mb-2">Interested in joining Elamus?</h3>
              <p className="text-body-sm text-secondary mb-5">Send your resume and a brief introduction to our HR team:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:elamusmdgkr@gmail.com" className="btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
                  elamusmdgkr@gmail.com
                </a>
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20am%20interested%20in%20career%20opportunities."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline" style={{ flex: 1, justifyContent: 'center', borderRadius: 10, textDecoration: 'none' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
