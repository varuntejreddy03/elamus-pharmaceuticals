import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

      {/* ── MANUFACTURING UNIT ── */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-12">
            <span className="text-eyebrow text-primary uppercase font-bold">Our Facility</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Manufacturing Unit</h2>
            <p className="text-body-md text-secondary mt-3 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing facility operates under strict WHO-GMP and CDSCO guidelines, ensuring every product meets the highest pharmaceutical standards.
            </p>
          </motion.div>

          {/* Video clip */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="mb-10">
            <div className="relative rounded-2xl overflow-hidden mx-auto" style={{ maxWidth: 800, border: '1px solid var(--outline-variant)', boxShadow: '0 12px 40px rgba(0,0,0,.15)' }}>
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block' }}
              >
                <source src="/ba9f1aa035.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[
              { src: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Tablet Manufacturing' },
              { src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Quality Control Lab' },
              { src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Research & Development' },
              { src: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Packaging Unit' },
              { src: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Sterile Production' },
              { src: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Dispensing Area' },
              { src: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Blister Packing' },
              { src: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Warehouse & Storage' },
              { src: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Analytical Testing' },
              { src: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Microbiology Lab' },
            ].map((img, i) => (
              <motion.div key={i}
                initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration: 0.35, delay: (i % 5) * 0.07 }}
                className="group relative rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.06)', aspectRatio: '4/3' }}>
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="absolute inset-0 flex items-end"
                  style={{ background: 'linear-gradient(to top, rgba(7,28,44,.75) 0%, transparent 55%)' }}>
                  <span style={{ padding: '8px 12px', fontSize: 11, fontWeight: 600, color: 'white', letterSpacing: '0.02em' }}>
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compliance badges */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {['WHO-GMP Certified', 'CDSCO Compliant', 'ISO 9001:2015', 'COA Verified Batches', 'Cold Chain Capable'].map(badge => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', fontSize: 12, fontWeight: 600, color: 'var(--on-surface-variant)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15, color: 'var(--tertiary)' }}>verified</span>
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
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
