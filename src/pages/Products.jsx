import { useState, useMemo } from 'react';
import { Search, Package } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Tablets', 'Capsules', 'Nutraceuticals', 'Sachets', 'Catalogue'];

export default function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom py-8 md:py-16">
        <div className="mb-8 text-center">
          <span className="eyebrow"><Package size={11} /> Product Range</span>
          <h1 className="mt-3 section-heading">Product Catalogue</h1>
          <p className="section-subtitle">Browse and enquire about our products</p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 md:flex md:items-center md:gap-4 md:space-y-0">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm focus:border-sky-400 focus:bg-white focus:outline-none" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-[12px] font-bold transition-all ${category === cat ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500 hover:text-sky-600'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        ) : (
          <div className="py-16 text-center">
            <Package size={36} className="mx-auto mb-3 text-slate-300" />
            <p className="text-base font-bold text-slate-700">No products found</p>
            <p className="mt-1 text-sm text-slate-400">Try a different search or category</p>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
          <p className="text-[13px] leading-relaxed text-slate-500">Product information is for catalogue/reference only. Refer to the approved label or consult a healthcare professional for usage and dosage.</p>
        </div>
      </div>
    </div>
  );
}
