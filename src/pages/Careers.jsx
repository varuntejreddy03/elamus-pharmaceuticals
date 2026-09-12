import { motion } from 'framer-motion';

const fUp  = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const VP   = { once: true, margin: '-40px' };

export default function Careers() {
  return (
    <div>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 100%)', borderBottom: '1px solid var(--outline-variant)', padding: '56px 24px 48px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fUp} className="text-center max-w-3xl mx-auto">
            <span className="text-eyebrow text-primary uppercase font-bold">Join Our Team</span>
            <h1 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px,4vw,40px)' }}>
              Careers at <span style={{ color: 'var(--primary)' }}>Elamus Pharmaceuticals</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Be part of a growing pharmaceutical company committed to quality, ethics, and healthcare access across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-12">
            <span className="text-eyebrow text-primary uppercase font-bold">Why Elamus</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Why work with us?</h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'trending_up',   title: 'Growth Opportunities',  desc: 'Fast-track career growth in a rapidly expanding pharmaceutical company.' },
              { icon: 'groups',        title: 'Collaborative Culture', desc: 'Work alongside experienced professionals in a supportive environment.' },
              { icon: 'verified_user', title: 'Ethical Standards',     desc: 'Be part of a company that prioritizes responsible medical communication.' },
              { icon: 'location_city', title: 'Mumbai HQ',             desc: 'Headquartered in Mumbai with pan-India operations and reach.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ delay: i * 0.08 }}
                className="flex flex-col p-5 rounded-xl"
                style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
                <div className="flex items-center justify-center rounded-lg mb-4" style={{ width: 44, height: 44, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                </div>
                <h3 className="text-title-md font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-body-sm text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="sp" style={{ background: 'var(--surface-container-low)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="text-center mb-8">
            <span className="text-eyebrow text-primary uppercase font-bold">Openings</span>
            <h2 className="text-headline-lg text-on-surface mt-2" style={{ fontFamily: 'Manrope' }}>Current Opportunities</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="max-w-2xl mx-auto text-center p-8 rounded-2xl"
            style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'var(--outline-variant)', display: 'block', marginBottom: 16 }}>work_history</span>
            <p className="font-semibold text-on-surface-variant" style={{ fontSize: 15 }}>No openings at the moment.</p>
            <p className="text-secondary mt-2" style={{ fontSize: 13 }}>Check back soon or send us a general application below.</p>
          </motion.div>
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
        <div className="container-custom max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}>
            <span className="text-eyebrow text-primary uppercase font-bold">General Application</span>
            <h2 className="text-headline-lg text-on-surface mt-2 mb-4" style={{ fontFamily: 'Manrope' }}>Don't see your role?</h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Send us your resume and we'll reach out when a suitable opportunity arises.
            </p>
            <div className="p-6 rounded-xl text-left" style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
              <p className="text-body-sm text-secondary mb-5">Send your CV and a brief introduction to our HR team:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:elamusmdgkr@gmail.com?subject=Career%20Application%20-%20Elamus%20Pharmaceuticals"
                  className="btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
                  Email Your CV
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
