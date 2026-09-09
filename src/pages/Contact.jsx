import { motion } from 'framer-motion';

const fUp    = { hidden: { opacity: 0, y: 18 },  visible: { opacity: 1, y: 0 } };
const fLeft  = { hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } };
const fRight = { hidden: { opacity: 0, x: 18 },  visible: { opacity: 1, x: 0 } };
const VP     = { once: true, margin: '-40px' };

export default function Contact() {
  return (
    <div>

      {/* ── HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 100%)', borderBottom: '1px solid var(--outline-variant)', padding: '56px 24px 48px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fUp} className="text-center max-w-2xl mx-auto">
            <span className="text-eyebrow text-primary uppercase font-bold">Get in Touch</span>
            <h1 className="text-headline-lg text-on-surface mt-2 mb-3" style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px,4vw,40px)' }}>
              Contact Us
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Have questions about our products? Connect directly with our institutional supply team in Mumbai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK CONTACT CARDS ── */}
      <section className="sp" style={{ background: 'var(--surface-container-lowest)' }}>
        <div className="container-custom">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              { icon: 'call',    title: 'Call Us',   detail: '+91 7989005105',        sub: 'Mon–Sat, 9AM – 7PM IST',         href: 'tel:+917989005105' },
              { icon: 'chat',    title: 'WhatsApp',  detail: '+91 7989005105',        sub: 'Quick responses, instant enquiry', href: 'https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.' },
              { icon: 'mail',    title: 'Email Us',  detail: 'elamusmdgkr@gmail.com', sub: 'We reply within 24 hours',         href: 'mailto:elamusmdgkr@gmail.com' },
            ].map((c, i) => (
              <motion.a key={c.title} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ delay: i * 0.09 }}
                className="flex items-start gap-4 p-5 rounded-xl transition-all"
                style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 6px rgba(0,0,0,.04)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--outline-variant)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,.04)'; }}>
                <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 44, height: 44, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <div>
                  <div className="text-label-sm text-secondary font-medium uppercase tracking-wider mb-1">{c.title}</div>
                  <div className="text-title-md font-bold text-on-surface mb-0.5">{c.detail}</div>
                  <div className="text-body-sm text-secondary">{c.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* ── TWO-COLUMN: Office + Form ── */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

            {/* LEFT — 5 cols */}
            <motion.div className="lg:col-span-5 flex flex-col gap-5"
              initial="hidden" whileInView="visible" viewport={VP} variants={fLeft} transition={{ duration: 0.6 }}>

              <div>
                <span className="text-eyebrow text-primary uppercase font-bold">Commercial Desk</span>
                <h2 className="text-headline-sm font-bold text-on-surface mt-2 mb-4" style={{ fontFamily: 'Manrope', fontSize: 22 }}>
                  Get in touch with our institutional supply team
                </h2>
                <p className="text-body-md text-secondary mb-6">
                  Whether you are an authorized pharmaceutical distributor, a hospital procurement officer, or a pharmacy owner, we are ready to assist you.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: 'call',        label: 'Telephone Direct Line',    val: '+91 7989005105',          href: 'tel:+917989005105' },
                    { icon: 'mail',        label: 'Official Quotation Email', val: 'elamusmdgkr@gmail.com',   href: 'mailto:elamusmdgkr@gmail.com' },
                    { icon: 'location_on', label: 'Corporate Headquarters',   val: 'Unit No. 611, Reliables Pride, Jogeshwari West, Mumbai 400102', href: null },
                    { icon: 'schedule',    label: 'Hours of Operation',       val: 'Mon – Sat: 9:00 AM – 6:30 PM IST', href: null },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 38, height: 38, background: 'var(--surface-container)', color: 'var(--primary)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{c.icon}</span>
                      </div>
                      <div>
                        <div className="text-label-sm text-secondary font-medium mb-0.5">{c.label}</div>
                        {c.href
                          ? <a href={c.href} className="text-body-md font-semibold text-on-surface hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>{c.val}</a>
                          : <div className="text-body-md font-medium text-on-surface" style={{ fontSize: 14 }}>{c.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
                <iframe
                  title="Elamus Pharmaceuticals Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6!2d72.8377!3d19.1364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzExLjAiTiA3MsKwNTAnMTUuNyJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%" height="200" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy"
                />
              </div>

              {/* WhatsApp card */}
              <div className="p-5 rounded-xl" style={{ background: '#071C2C' }}>
                <h3 className="text-title-md font-bold text-on-primary mb-2">Direct WhatsApp Desk</h3>
                <p className="text-body-sm mb-4" style={{ color: 'rgba(255,255,255,.55)' }}>
                  Send us a message directly on WhatsApp for the fastest response from our Mumbai team.
                </p>
                <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-label-md font-semibold py-3 px-4 rounded-xl transition-all"
                  style={{ background: 'rgba(37,211,102,.12)', border: '1px solid rgba(37,211,102,.3)', color: '#4ade80', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,.12)'}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chat</span>
                  Direct WhatsApp Desk (+91 7989005105)
                </a>
              </div>
            </motion.div>

            {/* RIGHT — 7 cols: full RFQ form */}
            <motion.div className="lg:col-span-7"
              initial="hidden" whileInView="visible" viewport={VP} variants={fRight} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="p-8 rounded-2xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>
                <h3 className="text-headline-sm font-bold text-on-surface mb-1" style={{ fontFamily: 'Manrope', fontSize: 20 }}>
                  Submit Product RFQ
                </h3>
                <p className="text-body-sm text-secondary mb-6">
                  Complete the details below and our medical commercial desk will prepare documentation.
                </p>
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
                    <textarea name="message" rows={4}
                      placeholder="Mention product names (e.g. Plevypan 40, Poly Intest), required batch volume, and delivery destination in India..."
                      className="form-textarea" />
                  </div>
                  <button type="submit" className="w-full btn-primary" style={{ borderRadius: 10, height: 46 }}>
                    Submit Enquiry
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                  </button>
                  <p className="text-label-sm text-center" style={{ color: 'var(--outline)', fontSize: 11 }}>
                    Submissions are handled strictly under pharmaceutical non-disclosure and CDSCO regulatory guidelines.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
