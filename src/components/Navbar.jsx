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
      <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-[100px] items-center justify-between md:h-[130px]">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/products/elamus-logo.png"
                alt="Elamus Pharmaceuticals"
                className="h-[65px] w-auto object-contain object-left md:h-[85px] lg:h-[95px]"
              />
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-slate-100 bg-slate-50/80 p-1 md:flex">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${isActive(l.to) ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a href="tel:+917989005105" className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 hover:text-sky-600 lg:flex">
                <Phone size={13} /> +91 7989005105
              </a>
              <Link to="/enquiry-cart" className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-sky-50 md:h-10 md:w-10">
                <ShoppingBag size={22} className="text-slate-600 md:hidden" />
                <ShoppingBag size={20} className="hidden text-slate-600 md:block" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-sky-600 text-[9px] font-bold text-white ring-2 ring-white">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
                className="hidden h-10 items-center gap-1.5 rounded-xl bg-sky-600 px-5 text-xs font-bold text-white shadow-sm hover:bg-sky-700 md:inline-flex">
                Enquire Now
              </a>
              <button onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-50 md:hidden">
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-[15px] font-semibold ${isActive(l.to) ? 'bg-sky-50 text-sky-600' : 'text-slate-700'}`}>{l.label}</Link>
            ))}
            <Link to="/enquiry-cart" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-700">
              Enquiry Cart {cartItems.length > 0 && <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] text-white">{cartItems.length}</span>}
            </Link>
            <a href="tel:+917989005105" className="mt-2 flex items-center gap-2 px-4 py-3 text-sm text-slate-500"><Phone size={14} /> +91 7989005105</a>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
              className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white">
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </nav>
      <div className="h-[100px] md:h-[130px]" />
    </>
  );
}
