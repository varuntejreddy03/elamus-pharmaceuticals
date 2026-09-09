import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.slug);
  const wa = `https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${product.name}.`)}`;

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
      {/* Category + label */}
      <div className="flex items-start justify-between">
        <span className="text-label-sm font-semibold px-2 py-0.5 rounded"
          style={{ background: 'var(--surface-container)', color: 'var(--primary)', fontSize: 11 }}>
          {product.category}
        </span>
        <span className="text-label-sm font-mono" style={{ color: 'var(--secondary)', fontSize: 11 }}>
          Catalogue
        </span>
      </div>

      {/* Image + info */}
      <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
        <div className="flex gap-3">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
            style={{ width: 80, height: 80, background: 'var(--surface-container)', border: '1px solid var(--outline-variant)' }}>
            <img src={product.image} alt={product.alt} loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }} />
          </motion.div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-headline-sm font-bold text-on-surface" style={{ fontSize: 16, lineHeight: 1.3 }}>
              {product.name}
            </h3>
            <p className="text-body-sm text-on-surface-variant line-clamp-2" style={{ fontSize: 12 }}>
              {product.description}
            </p>
            <span className="text-label-sm font-medium" style={{ color: 'var(--tertiary)', fontSize: 11 }}>
              Mumbai Catalogue
            </span>
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2 pt-2" style={{ borderTop: '1px solid var(--outline-variant)' }}>
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => inCart ? removeFromCart(product.slug) : addToCart(product)}
          className="flex items-center justify-center gap-1 text-label-md"
          style={{
            height: 36, borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
            border: inCart ? '1px solid var(--error)' : '1px solid var(--primary)',
            background: inCart ? 'var(--error-container)' : 'transparent',
            color: inCart ? 'var(--error)' : 'var(--primary)',
            transition: 'background 0.18s, color 0.18s',
          }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {inCart ? 'remove_shopping_cart' : 'add_shopping_cart'}
          </span>
          <span>{inCart ? 'Remove' : '+ Add'}</span>
        </motion.button>

        <motion.a
          href={wa} target="_blank" rel="noopener noreferrer"
          whileHover={{ background: 'var(--primary-container)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-1 text-label-md"
          style={{
            height: 36, borderRadius: 8, fontSize: 13, fontWeight: 500,
            background: 'var(--primary)', color: 'var(--on-primary)', textDecoration: 'none',
          }}>
          <span>Enquire</span>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
        </motion.a>
      </div>
    </motion.article>
  );
}
