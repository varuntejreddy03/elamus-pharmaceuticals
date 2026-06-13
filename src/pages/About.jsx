import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Star, MapPin, Building2, Target, Eye, Briefcase } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)' }}>
        <div className="container-custom relative">
          <motion.div initial="hidden" animate="visible" variants={fade} className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <img src="/images/products/logo.webp" alt="Elamus" className="h-16 w-16 rounded-2xl shadow-md sm:h-20 sm:w-20" />
              <div className="text-left">
                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Elamus Pharmaceuticals</h2>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-600">Pvt. Ltd.</span>
              </div>
            </div>
            <span className="eyebrow"><Building2 size={11} /> About Us</span>
            <h1 className="mt-5 section-heading">About Our Company</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">Elamus Pharmaceuticals Private Limited is an Indian pharmaceutical company incorporated on April 26, 2022. Headquartered in Mumbai, Maharashtra, the company specializes in marketing and distributing a wide range of medications.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="premium-card p-6 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">To provide accessible and reliable pharmaceutical products through a transparent catalogue system, enabling healthcare professionals and stakeholders to make informed enquiries with ease and confidence.</p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.1 }} className="premium-card p-6 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <Eye size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">To become a trusted name in pharmaceutical distribution by maintaining responsible product communication, quality standards, and building long-term relationships with healthcare partners across India.</p>
              </motion.div>
            </div>

            {/* Approach */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="premium-card p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Our Approach</h2>
              <p className="mb-4 leading-relaxed text-slate-500">We specialize in marketing, distribution, and wholesale of pharmaceutical products including tablets, capsules, inhalers, and syrups covering respiratory, CNS, and anti-infective categories.</p>
              <p className="leading-relaxed text-slate-500">We encourage visitors to refer to approved product labels and consult qualified healthcare professionals for composition, dosage, and usage guidelines.</p>
            </motion.div>

            {/* Values */}
            <h2 className="mb-8 mt-16 text-center text-2xl font-bold text-slate-900">Our Values</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Shield, title: 'Reliability', desc: 'Accurate and consistent product catalogue information.' },
                { icon: BookOpen, title: 'Responsible Information', desc: 'Verified product details without exaggerated claims.' },
                { icon: Users, title: 'Accessibility', desc: 'Easy enquiry through WhatsApp, phone, and direct contact.' },
                { icon: Star, title: 'Quality Focus', desc: 'High standards in product range and presentation.' },
              ].map((v, i) => (
                <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.08 }} className="premium-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                    <v.icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Office */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mt-8 premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600"><MapPin size={16} className="text-white" /></div>
                <div>
                  <h3 className="font-bold text-slate-900">Registered Office</h3>
                  <p className="mt-1 text-sm text-slate-500">Unit No. 611, Reliables Pride, Anand Nagar, Opp. Heera Panna, Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  <p className="mt-1 text-xs text-slate-400">CIN: U24100MH2022PTC381442</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600">
                <Briefcase size={24} className="text-white" />
              </div>
              <h2 className="section-heading">Careers</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500">We are always looking for talented and motivated individuals to join our growing team. If you are passionate about the pharmaceutical industry and want to be part of a dynamic company, we'd love to hear from you.</p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">Interested in joining Elamus?</h3>
                <p className="mt-2 text-sm text-slate-500">Send your resume and a brief introduction to:</p>
                <a href="mailto:elamusmdgkr@gmail.com" className="mt-3 inline-flex h-11 items-center gap-2 rounded-xl bg-sky-600 px-6 text-sm font-bold text-white hover:bg-sky-700">
                  elamusmdgkr@gmail.com
                </a>
                <p className="mt-3 text-xs text-slate-400">Or reach us on WhatsApp: +91 7989005105</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
