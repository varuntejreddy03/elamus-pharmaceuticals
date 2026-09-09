import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const ALL_CATS = ['All', ...Array.from(new Set(products.map(p => p.category))).sort()];
const fUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const VP  = { once: true, margin: '-40px' };

export default function Products() {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() =>
    products.filter(p => {
      const ms = p.name.toLowerCase().includes(search.toLowerCase());
      const mc = category === 'All' || p.category === category;
      return ms && mc;
    }),
  [search, category]);

  const catCount = (cat) => cat === 'All' ? products.length : products.filter(p => p.category === cat).length;

  return (
    <div>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg, var(--surface-bright) 0%, var(--surface-container-low) 100%)', borderBottom: '1px solid var(--outline-variant)', padding: '56px 24px 48px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fUp}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-eyebrow text-primary uppercase font-bold">PRODUCT RANGE</span>
                <h1 className="text-headline-lg text-on-surface mt-2 mb-2" style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px,4vw,40px)' }}>
                  Product Catalogue
                </h1>
                <p className="text-body-md text-on-surface-variant">
                  Browse and enquire about our pharmaceutical and nutraceutical products.
                </p>
              </div>
              {/* Stats */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
                  <div className="text-headline-sm font-bold text-primary" style={{ fontFamily: 'Manrope', fontSize: 22 }}>{products.length}+</div>
                  <div className="text-label-sm text-secondary">Products</div>
                </div>
                <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
                  <div className="text-headline-sm font-bold text-tertiary" style={{ fontFamily: 'Manrope', fontSize: 22 }}>{ALL_CATS.length - 1}</div>
                  <div className="text-label-sm text-secondary">Categories</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="sp" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container-custom">

          {/* Toolbar */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="flex flex-col gap-3 md:flex-row md:items-center p-4 rounded-2xl mb-6"
            style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: 1 }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: 'var(--outline)' }}>search</span>
              <input
                type="text"
                placeholder="Search products by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-input"
                style={{ paddingLeft: 38 }}
              />
            </div>
            {/* Category filters */}
            <div className="flex flex-wrap gap-1.5">
              {ALL_CATS.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  style={{
                    padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.16s',
                    border:      category === cat ? '1px solid var(--primary)' : '1px solid var(--outline-variant)',
                    background:  category === cat ? 'var(--primary)' : 'var(--surface-container-lowest)',
                    color:       category === cat ? 'var(--on-primary)' : 'var(--on-surface-variant)',
                  }}>
                  {cat}
                  <span style={{ marginLeft: 4, opacity: 0.7, fontSize: 10 }}>({catCount(cat)})</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Result count */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-label-sm text-secondary">
              Showing <strong className="text-on-surface">{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
              {category !== 'All' && <> in <strong className="text-primary">{category}</strong></>}
              {search && <> matching <strong className="text-on-surface">"{search}"</strong></>}
            </p>
            {(search || category !== 'All') && (
              <button
                onClick={() => { setSearch(''); setCategory('All'); }}
                className="inline-flex items-center gap-1 text-label-sm font-semibold text-secondary hover:text-primary transition-colors"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>close</span>
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, i) => (
                <motion.div key={product.slug} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration: 0.32, delay: (i % 8) * 0.05 }}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 52, color: 'var(--outline-variant)', display: 'block', marginBottom: 14 }}>medication</span>
              <p className="text-title-md font-bold text-on-surface mb-1">No products found</p>
              <p className="text-body-sm text-secondary mb-5">Try a different search term or category filter</p>
              <button onClick={() => { setSearch(''); setCategory('All'); }}
                className="btn-primary" style={{ display: 'inline-flex', borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>refresh</span>
                Show all products
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp}
            className="mt-10 p-4 rounded-xl flex items-start gap-3"
            style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
            <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 18, color: 'var(--tertiary)' }}>verified_user</span>
            <p className="text-body-sm text-secondary">
              <strong className="text-on-surface">Regulatory Notice:</strong> Product information is for catalogue/reference only. Refer to the approved label or consult a qualified healthcare professional for usage, dosage, and safety information. All formulations listed are subject to Drugs and Cosmetics Act regulations.
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
