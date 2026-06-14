import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#020617' }}>
      <div className="container-custom py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="mb-4">
              <img src="/images/products/elamus-logo.png" alt="Elamus Pharmaceuticals" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">Presenting pharmaceutical products through clear catalogue information and easy enquiry support since 2022.</p>
            <a href="https://wa.me/917989005105?text=Hello%20Elamus%20Pharmaceuticals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-white/10 px-4 text-xs font-semibold text-sky-300 hover:bg-white/15 hover:text-white">
              <MessageCircle size={13} /> WhatsApp Enquiry
            </a>
          </div>
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Quick Links</h4>
            <div className="space-y-1">
              {[{ to: '/', l: 'Home' }, { to: '/about', l: 'About Us' }, { to: '/products', l: 'Products' }, { to: '/contact', l: 'Contact' }, { to: '/enquiry-cart', l: 'Enquiry Cart' }].map((x) => (
                <Link key={x.to} to={x.to} className="block rounded-lg py-2 text-sm text-slate-300 hover:text-white">{x.l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a href="tel:+917989005105" className="flex items-center gap-2 hover:text-white"><Phone size={14} className="text-sky-400" /> +91 7989005105</a>
              <a href="mailto:elamusmdgkr@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail size={14} className="text-sky-400" /> elamusmdgkr@gmail.com</a>
              <div className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-sky-400" /><span>Unit No. 611, Reliables Pride, Jogeshwari West, Mumbai 400102</span></div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Disclaimer</h4>
            <p className="text-sm leading-relaxed text-slate-400">Product information displayed is for catalogue/reference purposes only. Please refer to the approved product label or consult a qualified healthcare professional for usage, dosage, and safety information.</p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-5 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} Elamus Pharmaceuticals Pvt. Ltd. All rights reserved.</div>
      </div>
    </footer>
  );
}
