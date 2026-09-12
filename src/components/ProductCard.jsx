import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CAT_COLORS = {
  'Orthopedic & Respiratory':   { color: '#0d9488', bg: '#f0fdfa' },
  'Gastroenterology & General': { color: '#7c3aed', bg: '#f5f3ff' },
  'Cardiac & Diabetic & General': { color: '#dc2626', bg: '#fef2f2' },
};

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.slug);
  const wa = `https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${product.name}.`)}`;
  const catStyle = CAT_COLORS[product.category] || { color: 'var(--primary)', bg: 'var(--surface-container)' };
  const desc = product.composition || product.description || '';

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 14px 36px rgba(0,0,0,.12)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        background: 'var(--surface-container-lowest)',
        border: '1px solid var(--outline-variant)',
        borderRadius: 16,
        padding: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,.04)',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}
    >
      {/* Category badge */}
      <div className="flex items-start justify-between">
        <span className="text-label-sm font-semibold px-2 py-0.5 rounded"
          style={{ background: catStyle.bg, color: catStyle.color, fontSize: 10, border: `1px solid ${catStyle.color}33` }}>
          {product.category === 'Orthopedic & Respiratory' ? 'Ortho & Resp'
            : product.category === 'Gastroenterology & General' ? 'Gastro & General'
            : product.category === 'Cardiac & Diabetic & General' ? 'Cardiac & Diabetic'
            : product.category}
        </span>
        <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--tertiary)' }}>verified</span>
      </div>

      {/* Image */}
      <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
        <div className="flex gap-3">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.28 }}
            className="shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
            style={{ width: 80, height: 80, background: 'var(--surface-container)', border: '1px solid var(--outline-variant)' }}>
            {product.image ? (
              <img src={product.image} alt={product.name} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }} />
            ) : (
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--outline)' }}>medication</span>
            )}
          </motion.div>
          <div className="space-y-1 min-w-0">
            <h3 className="font-bold text-on-surface" style={{ fontSize: 15, lineHeight: 1.3, fontFamily: 'Manrope' }}>
              {product.name}
            </h3>
            {desc && (
              <p className="text-on-surface-variant line-clamp-3" style={{ fontSize: 11, lineHeight: 1.5 }}>
                {desc}
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2 pt-2" style={{ borderTop: '1px solid var(--outline-variant)' }}>
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => inCart ? removeFromCart(product.slug) : addToCart(product)}
          className="flex items-center justify-center gap-1"
          style={{
            height: 36, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer',
            border: inCart ? '1px solid var(--error)' : '1px solid var(--primary)',
            background: inCart ? 'var(--error-container)' : 'transparent',
            color: inCart ? 'var(--error)' : 'var(--primary)',
            transition: 'background 0.18s, color 0.18s',
          }}>
          <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
            {inCart ? 'remove_shopping_cart' : 'add_shopping_cart'}
          </span>
          <span>{inCart ? 'Remove' : '+ Add'}</span>
        </motion.button>

        <motion.a
          href={wa} target="_blank" rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-1"
          style={{
            height: 36, borderRadius: 8, fontSize: 12, fontWeight: 600,
            background: 'var(--primary)', color: 'var(--on-primary)', textDecoration: 'none',
          }}>
          <span>Enquire</span>
          <span className="material-symbols-outlined" style={{ fontSize: 15 }}>chat</span>
        </motion.a>
      </div>
    </motion.article>
  );
}
