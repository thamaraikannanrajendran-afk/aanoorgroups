import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('ro');

  const productsData = {
    ro: [
      {
        id: 1,
        name: 'Premium Home RO System',
        specs: ['8 Stage Purification', '25 LPH Capacity', 'Auto Shutdown', 'TDS Controller'],
        image: '💧'
      },
      {
        id: 2,
        name: 'Commercial RO Plant',
        specs: ['Advanced Filtration', '50 LPH Capacity', 'Digital Display', 'Warranty Support'],
        image: '💧'
      },
      {
        id: 3,
        name: 'Industrial RO System',
        specs: ['Heavy Duty Design', '100+ LPH', 'Real-time Monitoring', 'Expert Installation'],
        image: '💧'
      }
    ],
    milk: [
      {
        id: 4,
        name: 'Digital Milk Analyzer',
        specs: ['Fat Content Analysis', 'Protein Detection', 'Quick Results', 'Portable Design'],
        image: '🥛'
      },
      {
        id: 5,
        name: 'Automatic Weighing Scale',
        specs: ['Digital Display', 'High Precision', 'Easy Operation', 'Durable Build'],
        image: '⚖️'
      },
      {
        id: 6,
        name: 'Data Processing Unit',
        specs: ['Real-time Tracking', 'Cloud Integration', 'Report Generation', 'User Friendly'],
        image: '💻'
      }
    ],
    chemicals: [
      {
        id: 7,
        name: 'Cleaning Solution',
        specs: ['Food Grade', 'Effective Sanitization', 'Cost Effective', 'Bulk Available'],
        image: '⚗️'
      },
      {
        id: 8,
        name: 'Water Treatment Chemical',
        specs: ['Quality Assured', 'ISO Certified', 'Long Shelf Life', 'Easy Storage'],
        image: '🧪'
      },
      {
        id: 9,
        name: 'Maintenance Kit',
        specs: ['All Components Included', 'Original Parts', 'Installation Guide', 'Support'],
        image: '🔧'
      }
    ]
  };

  const currentProducts = productsData[selectedCategory];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-accent-gold">Premium Quality Equipment & Solutions</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('ro')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'ro'
                  ? 'bg-primary-dark text-white'
                  : 'bg-gray-200 text-primary-dark hover:bg-gray-300'
              }`}
            >
              RO Machines
            </button>
            <button
              onClick={() => setSelectedCategory('milk')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'milk'
                  ? 'bg-primary-dark text-white'
                  : 'bg-gray-200 text-primary-dark hover:bg-gray-300'
              }`}
            >
              Milk Machines
            </button>
            <button
              onClick={() => setSelectedCategory('chemicals')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'chemicals'
                  ? 'bg-primary-dark text-white'
                  : 'bg-gray-200 text-primary-dark hover:bg-gray-300'
              }`}
            >
              Chemicals & Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-primary-dark to-primary-navy p-8 text-center text-5xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{product.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="text-accent-gold">✓</span> {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary-dark text-white hover:bg-primary-navy font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Phone size={18} /> Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-gold text-primary-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-lg mb-8">Contact us for custom solutions and special orders</p>
          <a
            href="https://wa.me/918111007798"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-dark text-white hover:bg-primary-navy font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}