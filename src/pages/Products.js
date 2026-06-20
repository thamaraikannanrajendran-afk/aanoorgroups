import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ro');

  const products = {
    ro: [
      {
        name: 'Premium Home RO',
        specs: ['8-Stage Purification', '25 LPH Capacity', 'TDS Controller', 'Auto Shutdown'],
        price: 'Request Quote',
        badge: 'Popular'
      },
      {
        name: 'Commercial RO Plant',
        specs: ['Advanced Filtration', '50 LPH Capacity', 'Digital Display', 'Warranty'],
        price: 'Request Quote',
        badge: 'Featured'
      },
      {
        name: 'Industrial RO System',
        specs: ['Heavy Duty', '100+ LPH', 'Real-time Monitoring', 'Expert Support'],
        price: 'Request Quote',
        badge: 'Premium'
      }
    ],
    milk: [
      {
        name: 'Digital Milk Analyzer',
        specs: ['Fat Analysis', 'Protein Detection', 'Quick Results', 'Portable'],
        price: 'Request Quote',
        badge: 'Best Seller'
      },
      {
        name: 'Automatic Weighing Scale',
        specs: ['Digital Display', 'High Precision', 'Easy Operation', 'Durable'],
        price: 'Request Quote',
        badge: null
      },
      {
        name: 'Data Processing Unit',
        specs: ['Real-time Tracking', 'Cloud Integration', 'Report Generation', 'User Friendly'],
        price: 'Request Quote',
        badge: null
      }
    ],
    chemicals: [
      {
        name: 'Cleaning Solution',
        specs: ['Food Grade', 'Effective', 'Cost Effective', 'Bulk Available'],
        price: 'Request Quote',
        badge: null
      },
      {
        name: 'Water Treatment Chemical',
        specs: ['Quality Assured', 'ISO Certified', 'Long Shelf Life', 'Easy Storage'],
        price: 'Request Quote',
        badge: null
      },
      {
        name: 'Maintenance Kit',
        specs: ['All Components', 'Original Parts', 'Installation Guide', '24/7 Support'],
        price: 'Request Quote',
        badge: 'Complete Solution'
      }
    ]
  };

  const categories = [
    { id: 'ro', name: '💧 RO Machines', color: 'from-blue-500 to-cyan-400' },
    { id: 'milk', name: '🥛 Milk Equipment', color: 'from-amber-500 to-orange-400' },
    { id: 'chemicals', name: '🧪 Chemicals', color: 'from-purple-500 to-pink-400' }
  ];

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Our Products</h1>
          <p className="text-xl text-slate-300">Premium Quality Solutions for Dairy Success</p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 px-4 bg-slate-900/50 backdrop-blur-xl sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-xl`
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products[activeCategory].map((product, idx) => (
              <div
                key={idx}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {product.badge && (
                    <div className="absolute -top-3 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <p className="text-slate-400 text-sm">Pricing</p>
                    <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {product.price}
                    </p>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
                      <MessageCircle className="w-5 h-5" />
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}