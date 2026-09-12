import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products, { CAT_ORTHO, CAT_GASTRO, CAT_CARDIAC } from '../data/products';
import ProductCard from '../components/ProductCard';

const TABS = [
  { label: 'All Products',                 value: 'All',       icon: 'medication',       short: 'All' },
  { label: 'Orthopedic & Respiratory',     value: CAT_ORTHO,   icon: 'orthopedics',      short: 'Ortho' },
  { label: 'Gastroenterology & General',   value: CAT_GASTRO,  icon: 'gastroenterology', short: 'Gastro' },
  { label: 'Cardiac & Diabetic & General', value: CAT_CARDIAC, icon: 'cardiology',       short: 'Cardiac' },
];

const TAB_COLORS = {
  'All':      { accent: 'var(--primary)', bg: 'var(--surface-container-low)', border: 'var(--outline-variant)' },
  [CAT_ORTHO]:   { accent: '#0d9488', bg: '#f0fdfa', border: '#99f6e4' },
  [CAT_GASTRO]:  { accent: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  [CAT_CARDIAC]: { accent: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
};

const fUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const VP  = { once: true, margin: '-40px' };

export default function Products() {
  const [search,    setSearch]    = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Scroll to top on mount
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const filtered = useMemo(() =>
    products.filter(p => {
      const ms = p.name.toLowerCase().includes(search.toLowerCase()) ||
                 (p.composition || '').toLowerCase().includes(search.toLowerCase());
      const mc = activeTab === 'All' || p.category === activeTab;
      return ms && mc;
    }),
  [search, activeTab]);

  const countFor = (val) => val === 'All' ? products.length : products.filter(p => p.category === val).length;
  const col = TAB_COLORS[activeTab];

  return (
    <div>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 100%)', borderBottom: '1px solid var(--outline-variant)', padding: '56px 24px 48px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fUp}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-eyebrow text-primary uppercase font-bold">PRODUCT CATALOGUE</span>
                <h1 className="text-on-surface mt-2 mb-2" style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800 }}>
                  Our Product Range
                </h1>
                <p className="text-on-surface-variant" style={{ fontSize: 15 }}>
                  Browse our complete pharmaceutical portfolio across 3 therapeutic categories.
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
                  <div className="font-bold text-primary" style={{ fontFamily: 'Manrope', fontSize: 22 }}>{products.length}+</div>
                  <div className="text-secondary" style={{ fontSize: 12 }}>Products</div>
                </div>
                <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
                  <div className="font-bold text-tertiary" style={{ fontFamily: 'Manrope', fontSize: 22 }}>3</div>
                  <div className="text-secondary" style={{ fontSize: 12 }}>Categories</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section style={{ background: 'var(--surface-container-low)', padding: '40px 0 64px' }}>
        <div className="container-custom">

          {/* Search */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="mb-5">
            <div style={{ position: 'relative', maxWidth: 520 }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 20, color: 'var(--outline)' }}>search</span>
              <input
                type="text"
                placeholder="Search medicines or brands…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', paddingLeft: 44, paddingRight: search ? 40 : 16, height: 48,
                  borderRadius: 12, border: '1px solid var(--outline-variant)',
                  background: 'white', fontSize: 14, color: 'var(--on-surface)',
                  outline: 'none', boxShadow: '0 1px 4px rgba(0,0,0,.04)',
                }}
              />
              {search && (
                <button onClick={() => setSearch('')}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--outline)', display: 'flex', padding: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} className="mb-8">
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {TABS.map(tab => {
                const isActive = activeTab === tab.value;
                const c = TAB_COLORS[tab.value];
                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className="flex items-center gap-2 shrink-0 font-semibold transition-all"
                    style={{
                      padding: '10px 18px', borderRadius: 12, fontSize: 13, cursor: 'pointer',
                      border: isActive ? `2px solid ${c.accent}` : '2px solid var(--outline-variant)',
                      background: isActive ? c.bg : 'white',
                      color: isActive ? c.accent : 'var(--on-surface-variant)',
                      boxShadow: isActive ? `0 2px 12px ${c.accent}33` : 'none',
                      transition: 'all 0.18s',
                    }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.short}</span>
                    <span className="font-bold rounded-full px-1.5 py-0.5"
                      style={{ fontSize: 11, background: isActive ? c.accent : 'var(--surface-container)', color: isActive ? 'white' : 'var(--on-surface-variant)', minWidth: 22, textAlign: 'center' }}>
                      {countFor(tab.value)}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Active category heading */}
          {activeTab !== 'All' && (
            <motion.div key={activeTab} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
              <div style={{ width: 4, height: 28, borderRadius: 2, background: col.accent }} />
              <h2 className="font-bold text-on-surface" style={{ fontFamily: 'Manrope', fontSize: 20 }}>{activeTab}</h2>
            </motion.div>
          )}

          {/* Result count + clear */}
          <div className="flex items-center justify-between mb-5">
            <p style={{ fontSize: 13, color: 'var(--on-surface-variant)' }}>
              Showing <strong style={{ color: 'var(--on-surface)' }}>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
              {search && <> matching <strong style={{ color: 'var(--on-surface)' }}>"{search}"</strong></>}
            </p>
            {(search || activeTab !== 'All') && (
              <button onClick={() => { setSearch(''); setActiveTab('All'); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>refresh</span>
                Clear
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, i) => (
                <motion.div key={product.slug} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration: 0.32, delay: (i % 8) * 0.04 }}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl" style={{ background: 'white', border: '1px solid var(--outline-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 52, color: 'var(--outline-variant)', display: 'block', marginBottom: 14 }}>medication</span>
              <p className="font-bold text-on-surface mb-1" style={{ fontSize: 17 }}>No products found</p>
              <p className="text-secondary mb-5" style={{ fontSize: 14 }}>Try a different search term or category</p>
              <button onClick={() => { setSearch(''); setActiveTab('All'); }}
                className="btn-primary" style={{ display: 'inline-flex', borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>refresh</span>
                Show all products
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="mt-10 p-4 rounded-xl flex items-start gap-3"
            style={{ background: 'white', border: '1px solid var(--outline-variant)' }}>
            <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 18, color: 'var(--tertiary)' }}>verified_user</span>
            <p style={{ fontSize: 12, color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--on-surface)' }}>Regulatory Notice:</strong> Product information is for catalogue/reference only. Refer to the approved label or consult a qualified healthcare professional for usage, dosage, and safety information. All formulations are subject to Drugs and Cosmetics Act regulations.
            </p>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              Enquire About Products
            </a>
            <Link to="/contact" className="btn-outline" style={{ borderRadius: 10, textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>support_agent</span>
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
