import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const fUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const VP  = { once: true, margin: '-40px' };

export default function ProductDetail() {
  const { slug }  = useParams();
  const product   = products.find(p => p.slug === slug);
  const { addToCart, isInCart } = useCart();

  if (!product) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-container-low)' }}>
      <div className="text-center p-10 rounded-2xl" style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)' }}>
        <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'var(--outline-variant)', display: 'block', marginBottom: 14 }}>medication_liquid</span>
        <h2 className="text-headline-sm font-bold text-on-surface mb-3" style={{ fontFamily: 'Manrope' }}>Product not found</h2>
        <Link to="/products" className="btn-primary" style={{ display: 'inline-flex', borderRadius: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          Back to Products
        </Link>
      </div>
    </div>
  );

  const inCart  = isInCart(product.slug);
  const wa      = `https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${product.name}.`)}`;
  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-container-low)' }}>
      <div className="container-custom" style={{ paddingTop: 32, paddingBottom: 64 }}>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-label-sm text-secondary">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--secondary)'}>Home</Link>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--secondary)'}>Products</Link>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          <span className="text-on-surface font-medium">{product.name}</span>
        </nav>

        {/* Main card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden mb-8"
          style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image panel */}
            <div className="flex flex-col items-center justify-center gap-4"
              style={{ background: 'var(--surface-container)', minHeight: 340, padding: 48 }}>
              <img src={product.image} alt={product.alt}
                style={{ maxHeight: 280, maxWidth: '100%', objectFit: 'contain', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Category badge under image */}
              <span className="text-label-sm font-semibold px-3 py-1 rounded-full"
                style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', color: 'var(--primary)', fontSize: 11 }}>
                {product.category}
              </span>
            </div>

            {/* Info panel */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>

              {/* Status badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 text-label-sm font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: '#ecfdf5', color: 'var(--tertiary)', fontSize: 11 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>verified</span>
                  Catalogue Listed
                </span>
                <span className="text-label-sm font-mono" style={{ color: 'var(--outline)', fontSize: 11 }}>
                  Mumbai Warehouse
                </span>
              </div>

              <h1 className="text-headline-lg font-bold text-on-surface mb-3"
                style={{ fontFamily: 'Manrope', fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.02em' }}>
                {product.name}
              </h1>

              <p className="text-body-md text-on-surface-variant flex-1 mb-5" style={{ lineHeight: 1.7 }}>
                {product.description}
              </p>

              {/* Info rows */}
              <div className="space-y-2 mb-5 py-4" style={{ borderTop: '1px solid var(--outline-variant)', borderBottom: '1px solid var(--outline-variant)' }}>
                {[
                  { label: 'Category',  value: product.category },
                  { label: 'Location',  value: 'Mumbai Warehouse Ready' },
                  { label: 'Enquiry',   value: 'Via WhatsApp or Form' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-label-sm text-secondary">{row.label}</span>
                    <span className="text-label-sm font-semibold text-on-surface">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl mb-5" style={{ background: '#fffbeb', border: '1px solid #fde68a' }}>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 16, color: '#b45309' }}>info</span>
                  <p className="text-body-sm" style={{ color: '#92400e', fontSize: 12, lineHeight: 1.6 }}>
                    Product information displayed is for catalogue/reference purposes only. Please refer to the approved product label or consult a qualified healthcare professional for usage, dosage, and safety information.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={wa} target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                  Enquire on WhatsApp
                </a>
                <button
                  onClick={() => addToCart(product)}
                  disabled={inCart}
                  className="btn-outline"
                  style={{
                    flex: 1, justifyContent: 'center', borderRadius: 10,
                    borderColor: inCart ? 'var(--tertiary)' : 'var(--outline-variant)',
                    background:  inCart ? '#ecfdf5' : 'transparent',
                    color:       inCart ? 'var(--tertiary)' : 'var(--on-surface)',
                  }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    {inCart ? 'check_circle' : 'add_shopping_cart'}
                  </span>
                  {inCart ? 'Added to Enquiry' : 'Add to Enquiry Cart'}
                </button>
              </div>

              {/* View cart link */}
              {inCart && (
                <Link to="/enquiry-cart"
                  className="inline-flex items-center justify-center gap-1.5 mt-3 text-label-md font-semibold text-primary"
                  style={{ textDecoration: 'none' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>shopping_bag</span>
                  View Enquiry Cart
                </Link>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-6">
              <div>
                <span className="text-eyebrow text-primary uppercase font-bold">Related Products</span>
                <h2 className="text-headline-sm font-bold text-on-surface mt-1" style={{ fontFamily: 'Manrope', fontSize: 20 }}>
                  More in {product.category}
                </h2>
              </div>
              <Link to="/products"
                className="inline-flex items-center gap-1 text-label-md font-semibold text-primary"
                style={{ textDecoration: 'none', fontSize: 13 }}>
                View all
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={VP} variants={fUp} transition={{ duration: 0.35, delay: i * 0.07 }}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
