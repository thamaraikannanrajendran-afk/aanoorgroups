import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Star } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ro');

  const productCategories = {
    ro: {
      name: '💧 RO & Water Systems',
      color: 'from-blue-500 to-cyan-400',
      products: [
        {
          name: 'Premium Home RO System',
          specs: ['8-Stage Purification', '25 LPH Capacity', 'TDS Controller', 'Auto Shutdown', 'Wall Mount'],
          price: 'Request Quote',
          badge: 'Popular'
        },
        {
          name: 'Commercial RO Plant',
          specs: ['Advanced Filtration', '50 LPH Capacity', 'Digital Display', 'Extended Warranty', 'Installation'],
          price: 'Request Quote',
          badge: 'Featured'
        },
        {
          name: 'Industrial RO System',
          specs: ['Heavy Duty Build', '100+ LPH', 'Real-time Monitoring', 'Expert Support', 'Maintenance'],
          price: 'Request Quote',
          badge: 'Premium'
        }
      ]
    },
    analyzers: {
      name: '🧪 Milk Analyzers',
      color: 'from-amber-500 to-orange-400',
      products: [
        {
          name: 'EKO Ultra PRO',
          specs: ['Digital Display', 'Fat Content', 'Protein Detection', 'Portable', 'Quick Results'],
          price: 'Request Quote',
          badge: 'Best Seller'
        },
        {
          name: 'Ekomilk Ultra',
          specs: ['Advanced Analysis', 'Multiple Parameters', 'Cloud Compatible', 'Easy Operation', 'Durable'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Ksheera Analyzer',
          specs: ['Precision Testing', 'Real-time Data', 'Compact Design', 'User Friendly', 'Warranty'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Lactoscan Analyzer',
          specs: ['Lactose Detection', 'Comprehensive Testing', 'Digital Interface', 'Reliable', 'Support'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Lactosure Eco',
          specs: ['Solar-Powered Option', 'Eco-Friendly', 'Field Ready', 'Independent Operation', 'Cost Effective'],
          price: 'Request Quote',
          badge: 'Eco-Friendly'
        }
      ]
    },
    milking: {
      name: '🥛 Milking Machines',
      color: 'from-red-500 to-pink-400',
      products: [
        {
          name: 'Single Cluster Milking Machine',
          specs: ['Single Unit Operation', 'Cow & Buffalo Compatible', 'Complete Extraction', 'Efficient Design', 'Dimensions: 64x138x95cm'],
          price: 'Request Quote',
          badge: 'Standard'
        },
        {
          name: 'Double Cluster Milking Machine',
          specs: ['Dual Unit Operation', 'Twin Extraction', 'High Efficiency', 'Time Saving', 'Industrial Grade'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Single Bucket Milking Machine (Oil Type)',
          specs: ['Oil-Lubricated', 'Single Bucket', 'Portable', 'Easy Maintenance', 'Cost Effective'],
          price: 'Request Quote',
          badge: null
        }
      ]
    },
    collection: {
      name: '📊 Milk Collection & Data Processing',
      color: 'from-purple-500 to-indigo-400',
      products: [
        {
          name: 'Data Processing Unit (DPU)',
          specs: ['Central Hub', 'Real-time Tracking', 'Data Management', 'Digital Records', 'Cloud Integration'],
          price: 'Request Quote',
          badge: 'Essential'
        },
        {
          name: 'DPU-Based Automatic Milk Collection',
          specs: ['Automated Collection', 'Accuracy', 'Time Efficient', 'Error Reduction', 'Digital Logging'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'PC-Based Automatic Milk Collection',
          specs: ['Computer Controlled', 'Advanced Analytics', 'Report Generation', 'Backup Systems', 'Scalable'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Hand-Held Based Collection Unit',
          specs: ['Portable Device', 'Field Operation', 'Wireless Sync', 'Battery Powered', 'Easy Navigation'],
          price: 'Request Quote',
          badge: 'Portable'
        },
        {
          name: 'Raw Milk Receiving Dock Automation',
          specs: ['Dock Integration', 'Batch Processing', 'Quality Check', 'Inventory Management', 'Compliance'],
          price: 'Request Quote',
          badge: null
        }
      ]
    },
    weighing: {
      name: '⚖️ Weighing & Measurement',
      color: 'from-green-500 to-emerald-400',
      products: [
        {
          name: 'Electronic Digital Weighing Scale',
          specs: ['Digital Precision', 'High Accuracy', 'Easy Reading', 'Durable Build', 'Wide Range'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Industrial Weighing Scale',
          specs: ['Heavy Duty', 'Large Capacity', 'Stainless Steel', 'Data Export', 'Warranty'],
          price: 'Request Quote',
          badge: null
        }
      ]
    },
    distribution: {
      name: '🚚 Distribution & Billing Automation',
      color: 'from-cyan-500 to-teal-400',
      products: [
        {
          name: 'Milk Distribution & Billing System',
          specs: ['GSM Enabled', 'GPRS Compatible', 'Email Integration', 'Automated Billing', 'Real-time Updates'],
          price: 'Request Quote',
          badge: 'Smart System'
        },
        {
          name: 'Chicken Distribution & Billing System',
          specs: ['Specialized for Poultry', 'GSM/GPRS Support', 'Inventory Tracking', 'Billing Automation', 'Custom Reports'],
          price: 'Request Quote',
          badge: null
        }
      ]
    },
    accessories: {
      name: '🔧 Accessories & Supplies',
      color: 'from-slate-500 to-gray-400',
      products: [
        {
          name: 'Ultrasonic Stirrer',
          specs: ['Milk Mixing', 'Uniform Distribution', 'Energy Efficient', 'Precision Control', 'Portable'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Milk Analyzer Cleaning Solution',
          specs: ['Daily Cleaning', 'Food Grade', 'Effective Sanitization', 'Easy to Use', 'Bulk Available'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Wall Mount Display Unit',
          specs: ['Real-time Display', 'Easy Visibility', 'Durable', 'Multiple Parameters', 'Sleek Design'],
          price: 'Request Quote',
          badge: null
        },
        {
          name: 'Hand Held Terminal',
          specs: ['Portable Device', 'Wireless Connection', 'Field Ready', 'Easy Operation', 'Rechargeable'],
          price: 'Request Quote',
          badge: null
        }
      ]
    },
    automation: {
      name: '⚡ Automation Solutions',
      color: 'from-fuchsia-500 to-rose-400',
      products: [
        {
          name: 'Chilling Center Automation (RMRD)',
          specs: ['Temperature Control', 'Bulk Storage', 'Monitoring System', 'Data Logging', 'Quality Assurance'],
          price: 'Request Quote',
          badge: 'Enterprise'
        },
        {
          name: 'Milk Collection Center Setup',
          specs: ['Complete Integration', 'End-to-End Solution', 'Staff Training', 'Documentation', 'Support'],
          price: 'Request Quote',
          badge: null
        }
      ]
    }
  };

  const categories = Object.keys(productCategories).map(key => ({
    id: key,
    name: productCategories[key].name,
    color: productCategories[key].color
  }));

  const currentCategory = productCategories[activeCategory];

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Complete Product Range</h1>
          <p className="text-xl text-slate-300">Comprehensive Dairy Equipment & Solutions</p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="py-8 px-4 bg-slate-900/50 backdrop-blur-xl sticky top-20 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
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
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white">{currentCategory.name}</h2>
            <p className="text-slate-400 mt-2">Browse our {currentCategory.products.length} products in this category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product, idx) => (
              <div
                key={idx}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {product.badge && (
                    <div className="absolute -top-3 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {product.price}
                    </p>
                    <a
                      href="https://wa.me/918111007798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOTAL PRODUCTS */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            {Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)}+ Products
          </h2>
          <p className="text-xl text-slate-300">Complete solutions for dairy businesses of all sizes</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-slate-300 mb-8">Our experts are ready to recommend the perfect solution</p>
          <a
            href="https://wa.me/918111007798"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Specialist
          </a>
        </div>
      </section>
    </div>
  );
}