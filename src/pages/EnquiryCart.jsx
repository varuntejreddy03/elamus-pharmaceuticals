import { Link } from 'react-router-dom';
import { Trash2, MessageCircle, ShoppingBag, ArrowLeft, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function EnquiryCart() {
  const { cartItems, removeFromCart, clearCart, getWhatsAppUrl } = useCart();

  const handleRemove = (slug) => {
    removeFromCart(slug);
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom py-10 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <Link to="/products" className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-sky-600">
            <ArrowLeft size={13} /> Back to Products
          </Link>
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Enquiry Cart</h1>
              <p className="mt-1 text-sm text-slate-500">
                {cartItems.length > 0 ? `${cartItems.length} product${cartItems.length > 1 ? 's' : ''} ready to enquire` : 'No products selected yet'}
              </p>
            </div>
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-100"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white p-14 text-center shadow-sm">
            <ShoppingBag size={40} className="mx-auto mb-4 text-slate-300" />
            <h2 className="text-xl font-bold text-slate-900">Cart is empty</h2>
            <p className="mt-2 text-sm text-slate-500">Browse products and add items to your enquiry list.</p>
            <Link to="/products" className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-sky-600 px-6 text-sm font-bold text-white hover:bg-sky-700">
              <Package size={14} /> Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item, i) => (
                <div key={item.slug} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  {/* Image */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-50 p-2 sm:h-24 sm:w-24">
                    <img src={item.image} alt={item.alt} className="h-full w-full object-contain" />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-bold text-slate-900">{item.name}</h3>
                    <span className="mt-0.5 inline-block rounded bg-sky-50 px-2 py-0.5 text-[10px] font-bold text-sky-700">{item.category}</span>
                  </div>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => handleRemove(item.slug)}
                    className="h-11 w-11 shrink-0 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 flex items-center justify-center"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div style={{ position: 'sticky', top: '80px' }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Enquiry Summary</h3>

                <div className="mt-4 space-y-2">
                  {cartItems.map((item, i) => (
                    <div key={item.slug} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-sky-50 text-[10px] font-bold text-sky-700">{i + 1}</span>
                      <span className="truncate text-sm text-slate-600">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-slate-400">Total Products</span>
                    <span className="text-2xl font-extrabold text-slate-900">{cartItems.length}</span>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-600 text-sm font-bold text-white hover:bg-sky-700"
                  >
                    <MessageCircle size={16} /> Send Enquiry on WhatsApp
                  </a>
                  <p className="mt-3 text-center text-[11px] text-slate-400">
                    Opens WhatsApp with all product names. No payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
