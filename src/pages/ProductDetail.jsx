import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Plus, Check } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart, isInCart } = useCart();

  if (!product) return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center"><h2 className="text-2xl font-bold text-slate-900">Product not found</h2><Link to="/products" className="mt-4 inline-block text-brand-600 hover:underline">Back to Products</Link></div>
    </div>
  );

  const inCart = isInCart(product.slug);
  const whatsappUrl = `https://wa.me/917989005105?text=${encodeURIComponent(`Hello Elamus Pharmaceuticals, I would like to enquire about ${product.name}.`)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom py-10 md:py-16">
        <Link to="/products" className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-brand-600"><ArrowLeft size={14} /> Back to Products</Link>
        <div className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-slate-50 p-10 md:p-16">
              <img src={product.image} alt={product.alt} className="max-h-[360px] max-w-full object-contain" />
            </div>
            <div className="flex flex-col p-8 md:p-10">
              <span className="eyebrow mb-4 w-fit">{product.category}</span>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{product.name}</h1>
              <p className="mt-4 flex-1 leading-relaxed text-slate-500">{product.description}</p>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs leading-relaxed text-amber-800">Product information displayed is for catalogue/reference purposes only. Please refer to the approved product label or consult a qualified healthcare professional for usage, dosage, and safety information.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="primary-btn flex-1 justify-center"><MessageCircle size={16} /> Enquire on WhatsApp</a>
                <button onClick={() => addToCart(product)} disabled={inCart}
                  className={`secondary-btn flex-1 justify-center ${inCart ? '!border-emerald-200 !bg-emerald-50 !text-emerald-600' : ''}`}>
                  {inCart ? <Check size={16} /> : <Plus size={16} />}{inCart ? 'Added to Enquiry' : 'Add to Enquiry Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
