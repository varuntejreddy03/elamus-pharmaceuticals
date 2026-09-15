import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import EnquiryCart from './pages/EnquiryCart';
import Careers from './pages/Careers';

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

/* ── Page transition wrapper ── */
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}

/* ── Animated Routes ── */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"               element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about"          element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/products"       element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/products/:slug" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/contact"        element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/enquiry-cart"   element={<PageWrapper><EnquiryCart /></PageWrapper>} />
        <Route path="/careers"        element={<PageWrapper><Careers /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

/* ── Bottom Mobile Nav ── */
function BottomNav() {
  const location = useLocation();
  const { cartItems } = useCart();
  const p = location.pathname;

  const tabs = [
    { to: '/',             icon: 'home',         label: 'Home' },
    { to: '/products',     icon: 'pill',          label: 'Products' },
    { to: '/enquiry-cart', icon: 'fact_check',    label: 'Enquiry', badge: cartItems.length },
    { to: '/contact',      icon: 'support_agent', label: 'Contact' },
  ];

  const active = (to) => to === '/' ? p === '/' : p.startsWith(to);

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex items-center justify-around"
        style={{ height: 64, background: 'rgba(247,249,255,.96)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--outline-variant)', boxShadow: '0 -2px 12px rgba(0,0,0,.06)' }}>
        {tabs.map(tab => (
          <Link key={tab.to} to={tab.to} aria-label={tab.label}
            className="flex flex-col items-center justify-center py-1 relative transition-all active:scale-95"
            style={{ textDecoration: 'none', color: active(tab.to) ? 'var(--primary)' : 'var(--secondary)', minWidth: 56 }}>
            {/* active indicator dot */}
            {active(tab.to) && (
              <motion.span layoutId="bottomNavDot"
                style={{ position: 'absolute', top: 4, width: 4, height: 4, borderRadius: '50%', background: 'var(--primary)' }} />
            )}
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{tab.icon}</span>
            <span style={{ fontSize: 11, fontFamily: 'Inter', fontWeight: active(tab.to) ? 600 : 400, marginTop: 2 }}>{tab.label}</span>
            {tab.badge > 0 && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}
                className="absolute top-0.5 right-2 flex items-center justify-center rounded-full text-on-primary font-bold"
                style={{ background: 'var(--primary)', width: 16, height: 16, fontSize: 9 }}>
                {tab.badge}
              </motion.span>
            )}
          </Link>
        ))}
      </nav>
      <div className="md:hidden" style={{ height: 64 }} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <BottomNav />
      </BrowserRouter>
    </CartProvider>
  );
}
