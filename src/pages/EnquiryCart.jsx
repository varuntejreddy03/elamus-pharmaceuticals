import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const fUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const VP  = { once: true };

export default function EnquiryCart() {
  const { cartItems, removeFromCart, clearCart, getWhatsAppUrl } = useCart();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-container-low)' }}>
      <div className="container-custom" style={{ paddingTop: 32, paddingBottom: 64 }}>

        {/* Page header */}
        <div style={{ marginBottom: 28 }}>
          <Link to="/products"
            className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:text-primary transition-colors mb-4"
            style={{ textDecoration: 'none' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
            Back to Products
          </Link>
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <span className="text-eyebrow text-primary uppercase font-bold">Enquiry Cart</span>
              <h1 className="text-headline-lg font-bold text-on-surface mt-1" style={{ fontFamily: 'Manrope', fontSize: 'clamp(22px,3vw,34px)' }}>
                Product Enquiry List
              </h1>
              <p className="text-body-md text-secondary mt-1">
                {cartItems.length > 0
                  ? `${cartItems.length} product${cartItems.length > 1 ? 's' : ''} selected — ready to send enquiry`
                  : 'No products selected yet'}
              </p>
            </div>
            {cartItems.length > 0 && (
              <button type="button" onClick={clearCart}
                className="inline-flex items-center gap-1.5 text-label-md font-semibold px-4 py-2 rounded-lg transition-colors"
                style={{ border: '1px solid var(--error)', background: 'var(--error-container)', color: 'var(--error)', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete_sweep</span>
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="text-center p-14 rounded-2xl max-w-sm mx-auto"
            style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 8px rgba(0,0,0,.04)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 52, color: 'var(--outline-variant)', display: 'block', marginBottom: 16 }}>
              shopping_bag
            </span>
            <h2 className="text-headline-sm font-bold text-on-surface mb-2" style={{ fontFamily: 'Manrope' }}>
              Your enquiry list is empty
            </h2>
            <p className="text-body-sm text-secondary mb-6">
              Browse our pharmaceutical catalogue and add products you'd like to enquire about.
            </p>
            <Link to="/products" className="btn-primary" style={{ display: 'inline-flex', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>medication</span>
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* ── ITEMS LIST ── */}
            <div className="lg:col-span-2 space-y-3">
              {cartItems.map((item, i) => (
                <motion.div key={item.slug}
                  initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', boxShadow: '0 2px 6px rgba(0,0,0,.04)' }}>

                  {/* Image */}
                  <Link to={`/products/${item.slug}`}
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{ width: 76, height: 76, background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', padding: 10, textDecoration: 'none' }}>
                    <img src={item.image} alt={item.alt}
                      style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                  </Link>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link to={`/products/${item.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 className="text-title-md font-bold text-on-surface hover:text-primary transition-colors"
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 4 }}>
                        {item.name}
                      </h3>
                    </Link>
                    <span className="text-label-sm font-semibold px-2 py-0.5 rounded"
                      style={{ background: 'var(--surface-container)', color: 'var(--primary)', fontSize: 11 }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a href={`https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${item.name}.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg transition-colors"
                      style={{ width: 36, height: 36, background: 'var(--surface-container)', color: 'var(--primary)', border: '1px solid var(--outline-variant)', textDecoration: 'none' }}
                      title={`Enquire about ${item.name}`}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--on-primary)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface-container)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                    </a>
                    <button type="button" onClick={() => removeFromCart(item.slug)}
                      className="flex items-center justify-center rounded-lg transition-colors"
                      style={{ width: 36, height: 36, border: '1px solid var(--error)', background: 'var(--error-container)', color: 'var(--error)', cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#fecaca'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--error-container)'}
                      title="Remove from enquiry">
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete</span>
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Add more */}
              <Link to="/products"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl text-label-md font-semibold text-primary transition-all"
                style={{ border: '2px dashed var(--outline-variant)', textDecoration: 'none', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--surface-container-low)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--outline-variant)'; e.currentTarget.style.background = 'transparent'; }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add_circle</span>
                Add more products
              </Link>
            </div>

            {/* ── SUMMARY SIDEBAR ── */}
            <div>
              <div style={{ position: 'sticky', top: 84, background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)', borderRadius: 16, padding: 24, boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>

                {/* Header */}
                <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>fact_check</span>
                  <h3 className="text-headline-sm font-bold text-on-surface" style={{ fontFamily: 'Manrope', fontSize: 17 }}>
                    Enquiry Summary
                  </h3>
                </div>

                {/* Product list */}
                <div className="space-y-2 mb-5">
                  {cartItems.map((item, i) => (
                    <div key={item.slug} className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center rounded-lg text-label-sm font-bold text-primary shrink-0"
                        style={{ width: 22, height: 22, background: 'var(--surface-container)', fontSize: 11 }}>
                        {i + 1}
                      </span>
                      <span className="text-body-sm text-on-surface"
                        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total + CTA */}
                <div style={{ borderTop: '1px solid var(--outline-variant)', paddingTop: 18 }}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-body-sm text-secondary">Total Products</span>
                    <span className="font-bold text-on-surface" style={{ fontFamily: 'Manrope', fontSize: 28 }}>
                      {cartItems.length}
                    </span>
                  </div>

                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                    className="w-full btn-primary" style={{ justifyContent: 'center', borderRadius: 10, marginBottom: 10 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                    Send Enquiry on WhatsApp
                  </a>

                  <Link to="/contact"
                    className="w-full btn-outline" style={{ justifyContent: 'center', borderRadius: 10, textDecoration: 'none' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
                    Send via Contact Form
                  </Link>

                  <p className="text-label-sm text-secondary text-center mt-4" style={{ fontSize: 11, lineHeight: 1.6 }}>
                    Opens WhatsApp with all selected product names. No payment required. Our Mumbai desk will respond within 1 hour.
                  </p>
                </div>

                {/* Regulatory note */}
                <div className="mt-4 p-3 rounded-xl" style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: 14, color: 'var(--tertiary)', marginTop: 1 }}>verified_user</span>
                    <p className="text-label-sm text-secondary" style={{ fontSize: 11, lineHeight: 1.6 }}>
                      Product information is for catalogue/reference only. Refer to approved labels and qualified healthcare professionals for usage guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
