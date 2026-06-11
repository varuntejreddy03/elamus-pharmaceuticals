import { Link } from 'react-router-dom';
import { MessageCircle, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.slug);
  const whatsappUrl = `https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${product.name}.`)}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-50 to-sky-50 p-4 sm:h-52 lg:h-56">
          <img src={product.image} alt={product.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="absolute right-3 top-3 rounded-full bg-sky-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-700 border border-sky-100">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/products/${product.slug}`}>
          <h3 className="line-clamp-1 text-sm font-bold text-slate-900 group-hover:text-sky-600 sm:text-[15px]">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-500">{product.description}</p>

        <div className="mt-auto grid grid-cols-1 gap-2 pt-4 min-[420px]:grid-cols-2">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-sky-600 text-[13px] font-bold text-white hover:bg-sky-700">
            <MessageCircle size={14} />
            <span>Enquire</span>
          </a>
          <button
            type="button"
            onClick={() => inCart ? removeFromCart(product.slug) : addToCart(product)}
            className={`flex h-11 items-center justify-center gap-1.5 rounded-xl text-[13px] font-bold transition-all ${
              inCart
                ? 'border border-red-200 bg-red-50 text-red-500 hover:bg-red-100'
                : 'border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600'
            }`}
          >
            {inCart ? <X size={14} /> : <Plus size={14} />}
            <span className="hidden min-[420px]:inline">{inCart ? 'Remove' : 'Add to Enquiry'}</span>
            <span className="min-[420px]:hidden">{inCart ? 'Remove' : 'Add'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
