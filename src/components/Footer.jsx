import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: 'var(--inverse-surface)', borderTop: '1px solid var(--secondary)' }}>
      <div className="container-custom" style={{ paddingTop: 64, paddingBottom: 48 }}>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,.12)' }}>

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center rounded-lg"
                style={{ width: 32, height: 32, background: 'var(--primary)' }}>
                <span className="material-symbols-outlined text-on-primary" style={{ fontSize: 18 }}>medication</span>
              </div>
              <span className="text-headline-sm font-bold text-inverse-on-surface" style={{ fontFamily: 'Manrope', letterSpacing: '-0.01em' }}>
                ELAMUS PHARMA
              </span>
            </div>
            <p className="text-body-sm mb-4" style={{ color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              Elamus Pharmaceuticals Pvt. Ltd. is an Indian formulation and distribution company dedicated to high-grade pharmaceuticals, ethical medical communication, and transparent clinical supplies.
            </p>
            <div className="space-y-1.5">
              {['CDSCO Compliant Dossiers', 'WHO-GMP Quality Certified'].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-label-sm" style={{ color: 'rgba(255,255,255,.45)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 12, color: 'var(--tertiary-fixed)' }}>check</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-eyebrow font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,.5)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/',             l: 'Home' },
                { to: '/products',     l: 'Products & Formulations' },
                { to: '/about',        l: 'Responsibility & Ethics' },
                { to: '/contact',      l: 'Contact Corporate Office' },
                { to: '/enquiry-cart', l: 'Commercial Enquiry Cart' },
              ].map(x => (
                <li key={x.to}>
                  <Link to={x.to} className="text-body-sm transition-colors hover:text-inverse-primary"
                    style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>
                    {x.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Therapeutic Areas */}
          <div>
            <h4 className="text-eyebrow font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,.5)' }}>
              Therapeutic Areas
            </h4>
            <ul className="space-y-2.5">
              {['Tablets & Capsules', 'Nutraceuticals & Probiotics', 'Cardiovascular Formulations', 'CNS & Neuro Care', 'Critical Care Injectables'].map(c => (
                <li key={c}>
                  <Link to="/products" className="text-body-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-eyebrow font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,.5)' }}>
              Corporate Contact
            </h4>
            <div className="space-y-3 text-body-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: 16, color: 'var(--primary-fixed)', marginTop: 1 }}>location_on</span>
                <span>Unit No. 611, Reliables Pride, Jogeshwari West, Mumbai 400102</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary-fixed)' }}>call</span>
                <a href="tel:+917989005105" className="hover:text-white transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7989005105</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary-fixed)' }}>mail</span>
                <a href="mailto:elamusmdgkr@gmail.com" className="hover:text-white transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>elamusmdgkr@gmail.com</a>
              </div>
              <div className="pt-1">
                <span className="text-label-sm font-semibold uppercase tracking-wider block" style={{ color: 'rgba(255,255,255,.35)' }}>Hours of Operation:</span>
                <span className="text-label-sm" style={{ color: 'rgba(255,255,255,.45)' }}>Mon – Sat: 9:00 AM – 6:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-body-sm max-w-3xl" style={{ color: 'rgba(255,255,255,.35)', fontSize: 11, lineHeight: 1.7 }}>
            <strong style={{ color: 'rgba(255,255,255,.45)' }}>Statutory Healthcare Notice:</strong> The information provided on this portal is intended strictly for registered medical practitioners, authorized institutional pharmacies, and healthcare distributors in India. Formulations listed are subject to Drugs and Cosmetics Act regulations. All trademarks and formulation brand names belong to their respective proprietary assignees.
          </p>
          <div className="shrink-0 text-right">
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>© 2026 Elamus Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,.25)', marginTop: 2 }}>CDSCO, WHO-GMP &amp; ISO 9001:2015 Compliant.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
