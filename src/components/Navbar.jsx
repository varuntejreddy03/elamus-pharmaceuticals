import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const { cartItems }               = useCart();
  const location                    = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setDrawerOpen(false), [location]);

  const links = [
    { to: '/',        label: 'Home' },
    { to: '/about',   label: 'About Us' },
    { to: '/products',label: 'Products' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];
  const active = (p) => location.pathname === p;

  return (
    <>
      {/* ── TOP INFO BAR ── */}
      <header className="w-full hidden md:flex items-center justify-between"
        style={{ background: '#071C2C', height: 34, paddingLeft: 24, paddingRight: 24, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div className="container-custom w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tertiary-fixed)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span className="text-eyebrow" style={{ color: 'rgba(255,255,255,.85)', letterSpacing: '0.04em' }}>
              Pharmaceutical Products &amp; Catalogue Support
            </span>
          </div>
          <div className="flex items-center gap-5 text-eyebrow" style={{ color: 'rgba(255,255,255,.65)' }}>
            <a href="tel:+917989005105" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--primary-fixed)' }}>call</span>
              +91 7989005105
            </a>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>|</span>
            <a href="mailto:elamusmdgkr@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--primary-fixed)' }}>mail</span>
              elamusmdgkr@gmail.com
            </a>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>|</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--primary-fixed)' }}>location_on</span>
              Mumbai, India
            </span>
          </div>
        </div>
      </header>

      {/* Mobile info bar */}
      <aside className="md:hidden flex items-center justify-between px-4"
        style={{ background: '#071C2C', height: 32, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div className="flex items-center gap-1.5 truncate">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tertiary-fixed)', display: 'inline-block', flexShrink: 0 }} />
          <span className="text-label-sm truncate" style={{ color: 'rgba(255,255,255,.8)' }}>Pharmaceutical Products &amp; Catalogue Support</span>
        </div>
        <div className="flex items-center gap-1 shrink-0 pl-2" style={{ color: 'var(--surface-bright)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>call</span>
          <span className="text-label-sm font-medium">Mumbai, IN</span>
        </div>
      </aside>

      {/* ── STICKY NAVBAR ── */}
      <nav className="sticky top-0 z-40 w-full"
        style={{
          background: scrolled ? 'rgba(255,255,255,.96)' : 'var(--surface-container-lowest)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid var(--outline-variant)',
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,.06)' : '0 1px 3px rgba(0,0,0,.04)',
          transition: 'box-shadow 0.3s, background 0.3s',
        }}>
        <div className="container-custom">
          <div className="flex items-center justify-between" style={{ height: 72 }}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
              <img
                src="/file_000000008a60820ab7da25a99228b042_3.jpg-removebg-preview.png"
                alt="Elamus Pharmaceuticals"
                style={{ height: 64, width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to}
                  className="text-label-md px-4 py-2 rounded-lg transition-colors"
                  style={{
                    textDecoration: 'none', fontWeight: 600,
                    color:      active(l.to) ? 'var(--primary)' : 'var(--on-surface-variant)',
                    background: active(l.to) ? 'rgba(206,226,248,.4)' : 'transparent',
                  }}
                  onMouseEnter={e => { if (!active(l.to)) e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseLeave={e => { if (!active(l.to)) e.currentTarget.style.color = 'var(--on-surface-variant)'; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Cart */}
              <Link to="/enquiry-cart" aria-label="Enquiry Cart"
                className="relative p-2 rounded-lg transition-colors hover:bg-surface-container"
                style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>shopping_bag</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center text-on-primary font-bold rounded-full"
                    style={{ background: 'var(--primary)', width: 18, height: 18, fontSize: 10 }}>
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Enquire CTA */}
              <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 btn-primary"
                style={{ height: 38, fontSize: 13, padding: '0 18px', borderRadius: 8 }}>
                Enquire Now
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </a>

              {/* Hamburger */}
              <button onClick={() => setDrawerOpen(true)} aria-label="Open menu"
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: 'var(--on-surface)', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER BACKDROP ── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden"
          style={{ background: 'rgba(13,29,43,.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setDrawerOpen(false)} />
      )}

      {/* ── MOBILE DRAWER ── */}
      <aside className="fixed inset-y-0 left-0 z-50 flex flex-col justify-between p-6 md:hidden"
        style={{
          width: 300, maxWidth: '85vw',
          background: 'var(--surface-container-lowest)',
          boxShadow: '4px 0 24px rgba(0,0,0,.12)',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.28s ease',
        }}>
        <div>
          {/* Drawer header */}
          <div className="flex items-center justify-between pb-4 mb-5"
            style={{ borderBottom: '1px solid var(--outline-variant)' }}>
            <div>
              <p className="text-headline-sm font-bold text-primary" style={{ fontFamily: 'Manrope' }}>Elamus Healthcare</p>
              <p className="text-label-sm text-secondary">Pvt. Ltd. · Mumbai</p>
            </div>
            <button onClick={() => setDrawerOpen(false)} aria-label="Close menu"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--on-surface-variant)', padding: 4 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24 }}>close</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
                style={{
                  textDecoration: 'none', fontWeight: 600, fontSize: 15,
                  color:      active(l.to) ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
                  background: active(l.to) ? 'var(--secondary-container)' : 'transparent',
                }}>
                {l.label}
              </Link>
            ))}
            <Link to="/enquiry-cart"
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
              style={{ textDecoration: 'none', fontWeight: 600, fontSize: 15, color: 'var(--on-surface-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>shopping_bag</span>
              Enquiry Cart
              {cartItems.length > 0 && (
                <span className="flex items-center justify-center rounded-full text-on-primary font-bold"
                  style={{ background: 'var(--primary)', width: 20, height: 20, fontSize: 10 }}>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Drawer footer */}
        <div className="p-4 rounded-xl" style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
          <div className="flex items-center gap-2 text-primary font-semibold text-label-sm mb-2">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified_user</span>
            Regulatory Desk
          </div>
          <p className="text-body-sm text-on-surface-variant mb-3" style={{ fontSize: 12 }}>
            Direct dossier and institutional quotation routing via Mumbai HQ.
          </p>
          <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
            target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 btn-primary"
            style={{ borderRadius: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
            WhatsApp Enquiry
          </a>
        </div>
      </aside>
    </>
  );
}
