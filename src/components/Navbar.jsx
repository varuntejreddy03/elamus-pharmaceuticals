import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];
  const isActive = (p) => location.pathname === p;

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-custom">
          <div className="flex h-[72px] items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/products/logo.webp" alt="Elamus" className="h-12 w-12 rounded-2xl object-contain shadow-sm sm:h-14 sm:w-14" />
              <div>
                <span className="block text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">Elamus</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-sky-600 sm:text-[11px]">Pharmaceuticals</span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-slate-100 bg-slate-50 p-1 md:flex">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all ${isActive(l.to) ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <a href="tel:+917989005105" className="hidden items-center gap-1.5 px-2 py-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 lg:flex">
                <Phone size={13} /> +91 7989005105
              </a>
              <Link to="/enquiry-cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-sky-50">
                <ShoppingBag size={20} className="text-slate-600" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white ring-2 ring-white">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
                className="hidden h-9 items-center gap-1.5 rounded-xl bg-sky-600 px-4 text-xs font-bold text-white hover:bg-sky-700 md:inline-flex">
                Enquire Now
              </a>
              <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-50 md:hidden">
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-[15px] font-semibold ${isActive(l.to) ? 'bg-sky-50 text-sky-600' : 'text-slate-700'}`}>{l.label}</Link>
            ))}
            <Link to="/enquiry-cart" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700">
              Enquiry Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>
            <a href="tel:+917989005105" className="mt-2 flex items-center gap-2 px-4 py-3 text-sm text-slate-500"><Phone size={14} /> +91 7989005105</a>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
              className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white">
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </nav>
      <div style={{ height: '72px' }} />
    </>
  );
}
