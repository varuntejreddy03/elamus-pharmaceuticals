import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Star, MapPin, Building2 } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/30 to-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-100/30 blur-[80px]" />
        <div className="container-custom relative">
          <motion.div initial="hidden" animate="visible" variants={fade} className="mx-auto max-w-3xl text-center">
            <span className="eyebrow"><Building2 size={11} /> About Us</span>
            <h1 className="mt-5 section-heading">About Elamus Pharmaceuticals</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">Elamus Pharmaceuticals Private Limited is an Indian pharmaceutical company incorporated on April 26, 2022. Headquartered in Mumbai, Maharashtra, with an operational presence in Vijayawada, Andhra Pradesh.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="premium-card p-8 md:p-10">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Our Approach</h2>
              <p className="mb-4 leading-relaxed text-slate-500">We specialize in marketing, distribution, and wholesale of pharmaceutical products including tablets, capsules, inhalers, and syrups covering respiratory, CNS, and anti-infective categories.</p>
              <p className="leading-relaxed text-slate-500">We encourage visitors to refer to approved product labels and consult qualified healthcare professionals for composition, dosage, and usage guidelines.</p>
            </motion.div>

            <h2 className="mb-8 mt-16 text-center text-2xl font-bold text-slate-900">Our Values</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Shield, title: 'Reliability', desc: 'Accurate and consistent product catalogue information.' },
                { icon: BookOpen, title: 'Responsible Information', desc: 'Verified product details without exaggerated claims.' },
                { icon: Users, title: 'Accessibility', desc: 'Easy enquiry through WhatsApp, phone, and direct contact.' },
                { icon: Star, title: 'Quality Focus', desc: 'High standards in product range and presentation.' },
              ].map((v, i) => (
                <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.08 }} className="premium-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-sky-50 ring-1 ring-brand-100">
                    <v.icon size={20} className="text-brand-600" />
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="mt-8 premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600"><MapPin size={16} className="text-white" /></div>
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
    </div>
  );
}
