import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Download, Zap } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('analyzers');
  const [expandedProduct, setExpandedProduct] = useState(null);

  const productCategories = {
    analyzers: {
      name: '🧪 Milk Analyzers',
      color: 'from-amber-500 to-orange-400',
      icon: '🧪',
      description: 'Ultrasonic milk testing equipment with advanced analysis',
      products: [
        {
          model: 'LactoSure ECO',
          image: '/images/images (43).jpeg',
          description: 'Basic milk analyzer for small collection centers',
          specs: {
            'Measurement Time': '25-30 seconds',
            'Parameters': 'Fat, SNF, CLR, Protein, Lactose',
            'Display': 'Digital LCD',
            'Power': '40W, Battery option',
            'Capacity': 'Up to 2000 L/hour',
            'Material': 'ABS Plastic & Stainless Steel',
            'Weight': '1.5 kg',
            'Warranty': '1 Year'
          },
          badge: 'Most Popular',
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-S',
          image: '/images/images (42).jpeg',
          description: 'Solar-powered milk analyzer for remote areas',
          specs: {
            'Power Source': 'Solar + Battery Backup',
            'Measurement': 'Fat, SNF, CLR, Protein, Lactose, Salt',
            'Response Time': '25-30 seconds',
            'Operating Temp': '10-40°C',
            'Ideal For': 'Remote villages, portable use',
            'Weight': '1.5 kg',
            'Warranty': '1 Year',
            'CE Certified': 'Yes'
          },
          badge: 'Eco-Friendly',
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-SV',
          image: '/images/images (43).jpeg',
          description: 'Solar + vibro stirrer integrated model',
          specs: {
            'Power': 'Solar + Battery',
            'Integrated Stirrer': 'Yes (Vibro)',
            'Parameters': 'Fat, SNF, CLR, Protein, Lactose, Temperature',
            'Measurement Time': '25 seconds',
            'Auto Calibration': 'Yes',
            'External Display': 'Compatible',
            'Portability': 'Highly Portable',
            'Warranty': '1 Year'
          },
          badge: 'Advanced',
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-D',
          image: '/images/LactoSure-Eco-D-V4.jpg',
          description: 'Display model with external monitor',
          specs: {
            'Main Unit': 'LactoSure ECO',
            'External Display': 'Included',
            'Display Size': '7 inch',
            'Connection': 'Wireless/Wired',
            'For': 'Transparent testing at collection centers',
            'Parameters': 'Fat, SNF, CLR, Protein, Lactose, Salt',
            'Data Export': 'Yes',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-D-V4',
          image: '/images/LactoSure-Eco-D-V4.jpg',
          description: 'Premium display model with 4-parameter upgrade',
          specs: {
            'Parameters': '8 + (Fat, SNF, CLR, Protein, Lactose, Added Water, Salt, Temperature)',
            'Display': '7 inch color external monitor',
            'Water Detection': 'Advanced added water detection',
            'Connectivity': 'USB, Wireless, Ethernet',
            'Cloud Compatible': 'Yes (LactoSure Connect)',
            'Report Generation': 'Automated',
            'Accuracy': '±0.5%',
            'Warranty': '1 Year'
          },
          badge: 'Premium',
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-CP',
          image: '/images/ekomilk-ultra-milk-analyzer-1000x1000-1.jpg',
          description: 'Computer-connected analyzer for data logging',
          specs: {
            'Connectivity': 'USB/Serial to PC',
            'Software': 'LactoSure Manager included',
            'Data Storage': 'Up to 10,000 readings',
            'Report Types': 'Daily, Weekly, Monthly, Custom',
            'Parameters': 'Fat, SNF, CLR, Protein, Lactose, Salt, Water',
            'Multi-user': 'Yes with login',
            'Backup': 'Automatic cloud backup',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-SV-V4',
          image: '/images/images (43).jpeg',
          description: 'Premium solar model with advanced parameters',
          specs: {
            'Power': 'Solar + Battery + AC Adapter',
            'Stirrer': 'Vibro integrated',
            'Parameters': '8 Advanced (includes Mastitis detection)',
            'Cloud Sync': 'Real-time',
            'Field Ready': 'Fully rugged',
            'Battery Life': '200+ tests/charge',
            'Operating Range': '-10 to 50°C',
            'Warranty': '2 Years'
          },
          badge: 'Enterprise',
          price: 'Request Quote'
        },
        {
          model: 'LactoSure ECO-Mastitis',
          image: '/images/ekomilk-ultra-milk-analyzer-1000x1000-1.jpg',
          description: 'Specialized mastitis detection analyzer',
          specs: {
            'Specialty': 'Mastitis detection via conductivity',
            'Sensitivity': '98% accurate',
            'Parameters': 'Fat, SNF, CLR, Protein, Conductivity, Temperature',
            'Alert System': 'Visual + Audio',
            'Display': 'Color LCD',
            'Data Logging': '5000 readings',
            'Warranty': '1 Year',
            'Certification': 'ISO 9001'
          },
          badge: 'Specialized',
          price: 'Request Quote'
        }
      ]
    },
    dpu: {
      name: '📊 Data Processing Units (DPU)',
      color: 'from-purple-500 to-indigo-400',
      icon: '📊',
      description: 'Central hub for automatic milk collection and data management',
      products: [
        {
          model: 'DPU Standard',
          image: '/images/data-processor-for-milk-collection.jpg',
          description: 'Basic data processing unit for small centers',
          specs: {
            'Connectivity': '4 analyzer ports',
            'Display': '7 inch touchscreen',
            'Data Storage': '50,000 records',
            'Power': '220V AC',
            'USB/Network': 'USB 2.0, Ethernet',
            'Warranty': '1 Year',
            'Capacity': 'Up to 500 animals',
            'Report Types': 'Daily, Weekly, Monthly'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'DPU Advanced',
          image: '/images/dpu-based-milk-collection-unit.jpg',
          description: 'Advanced system with 8 analyzer ports',
          specs: {
            'Ports': '8 analyzer connections',
            'Cloud Integration': 'Yes (LactoSure Connect)',
            'Storage': '500,000 records',
            'Network': 'WiFi + Ethernet + 4G',
            'Reporting': 'Real-time dashboard',
            'Animal ID': 'RFID compatible',
            'Backup': 'Automatic cloud backup',
            'Warranty': '2 Years'
          },
          badge: 'Popular',
          price: 'Request Quote'
        },
        {
          model: 'DPU Enterprise',
          image: '/images/data-processor-for-milk-collection.jpg',
          description: 'Enterprise solution for large dairy plants',
          specs: {
            'Ports': '16 analyzer connections',
            'Processing': 'Multi-threaded analysis',
            'Storage': 'Up to 10 million records',
            'Connectivity': 'WiFi, 4G LTE, Satellite',
            'Features': 'Multi-site management',
            'API': 'REST API for integration',
            'Support': '24/7 technical support',
            'Warranty': '3 Years + on-site support'
          },
          badge: 'Enterprise',
          price: 'Request Quote'
        }
      ]
    },
    
    stirrers: {
      name: '🔄 Stirrers & Accessories',
      color: 'from-green-500 to-emerald-400',
      icon: '🔄',
      description: 'Complementary equipment for sample preparation',
      products: [
        {
          model: 'Ultrasonic Stirrer (Vibro)',
          image: '/images/51Dl4-GZDuL._AC_UF1000,1000_QL80_.jpg',
          description: 'Vibration-based milk sample mixing',
          specs: {
            'Technology': 'Ultrasonic vibration',
            'Mixing Time': '10-15 seconds',
            'Frequency': '20 kHz',
            'Container Size': '500ml - 2L',
            'Power': '20W',
            'Material': 'Stainless steel + plastic',
            'Battery Option': 'Yes (4 hours runtime)',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'Manual Stirrer',
          image: '/images/images (47).jpeg',
          description: 'Hand-operated sample mixing tool',
          specs: {
            'Type': 'Manual/Mechanical',
            'Material': 'Stainless steel',
            'Handle': 'Non-slip rubber grip',
            'Mixing Efficiency': '20-30 seconds',
            'Maintenance': 'Zero maintenance',
            'Cost': 'Very economical',
            'Suitable For': 'All container sizes',
            'Warranty': 'Lifetime'
          },
          badge: null,
          price: 'Request Quote'
        }
      ]
    },
    displays: {
      name: '📺 Display Units',
      color: 'from-cyan-500 to-teal-400',
      icon: '📺',
      description: 'External monitoring and transparency displays',
      products: [
        {
          model: '7 inch Color Display',
          image: '',
          description: 'High-visibility color monitor for analyzers',
          specs: {
            'Screen Size': '7 inches',
            'Resolution': '1024 x 600',
            'Type': 'Color TFT LCD',
            'Viewing Angle': '178°',
            'Connection': 'USB/HDMI',
            'Power': '12V DC',
            'Temperature Range': '0-50°C',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: '10 inch HD Display',
          image: '',
          description: 'Large HD monitor for clear visibility',
          specs: {
            'Screen Size': '10 inches',
            'Resolution': '1920 x 1200 HD',
            'Panel': 'IPS HD Panel',
            'Brightness': '300 cd/m²',
            'Connectivity': 'HDMI, USB, Ethernet',
            'Power': '220V AC with adapter',
            'Wall Mountable': 'Yes',
            'Warranty': '1.5 Years'
          },
          badge: 'Premium',
          price: 'Request Quote'
        }
      ]
    },
    printers: {
      name: '🖨️ Printers & Reports',
      color: 'from-fuchsia-500 to-rose-400',
      icon: '🖨️',
      description: 'Automated report printing and documentation',
      products: [
        {
          model: 'Thermal Printer (58mm)',
          image: '/images/6176dMNN8nL.jpg',
          description: 'Fast receipt-style thermal printer',
          specs: {
            'Type': 'Thermal',
            'Paper Width': '58mm',
            'Print Speed': '150mm/sec',
            'Resolution': '203 DPI',
            'Connection': 'USB/Serial/Ethernet',
            'Power': '12V DC',
            'Operating Temp': '0-50°C',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'A4 Thermal Printer',
          image: '',
          description: 'Full-size A4 report printer',
          specs: {
            'Paper Size': 'A4',
            'Print Speed': '100mm/sec',
            'Resolution': '203 DPI',
            'Connectivity': 'USB, Ethernet, WiFi',
            'Power': '220V AC',
            'Volume': 'High-capacity (5000 pages/month)',
            'Features': 'Auto-cutter, journal mode',
            'Warranty': '1.5 Years'
          },
          badge: null,
          price: 'Request Quote'
        }
      ]
    },
    collection: {
      name: '📦 Automatic Collection Systems',
      color: 'from-blue-500 to-indigo-400',
      icon: '📦',
      description: 'Automated milk collection and documentation',
      products: [
        {
          model: 'DPU-Based Auto Collection',
          image: '/images/dpu-based-milk-collection-unit.jpg',
          description: 'Fully automated collection with DPU integration',
          specs: {
            'Integration': 'DPU-based system',
            'Animal ID': 'RFID/Manual entry',
            'Quantity': 'Automatic weight measurement',
            'Quality': 'Instant analyzer reading',
            'Recording': 'Automatic digital log',
            'Capacity': '500+ animals/day',
            'Error Reduction': '99.8% accuracy',
            'Warranty': '2 Years'
          },
          badge: 'Advanced',
          price: 'Request Quote'
        },
        {
          model: 'Portable Hand-Held Unit',
          image: '',
          description: 'Field-ready portable collection device',
          specs: {
            'Type': 'Mobile device',
            'Battery': '8-hour operation',
            'WiFi/4G': 'Real-time sync',
            'Animal ID': 'Barcode/RFID scan',
            'Rugged': 'IP67 rated',
            'Weight': '1.2 kg',
            'Storage': '10,000 records',
            'Warranty': '1 Year'
          },
          badge: null,
          price: 'Request Quote'
        }
      ]
    },
    chemicals: {
      name: '🧴 Consumables & Chemicals',
      color: 'from-slate-500 to-gray-400',
      icon: '🧴',
      description: 'Cleaning solutions and maintenance supplies',
      products: [
        {
          model: 'Daily Cleaning Solution',
          image: '',
          description: 'Food-grade analyzer cleaning solution',
          specs: {
            'Type': 'Biodegradable',
            'Use': 'Daily analyzer cleaning',
            'Volume': '500ml bottle',
            'Efficiency': 'Complete cleaning in 2 mins',
            'Safe': 'Food-grade, non-toxic',
            'Cost per Test': '₹2-3',
            'Shelf Life': '2 years',
            'Quantity': 'Bulk packs available'
          },
          badge: null,
          price: 'Request Quote'
        },
        {
          model: 'Calibration Liquid',
          image: '',
          description: 'Reference standard for analyzer calibration',
          specs: {
            'Type': 'Certified reference standard',
            'Accuracy': '±0.1%',
            'Use': 'Monthly calibration',
            'Volume': '250ml',
            'Shelf Life': '1 year unopened',
            'Certification': 'ISO certified',
            'Storage': 'Keep at 4-25°C',
            'Price': 'Per calibration kit'
          },
          badge: null,
          price: 'Request Quote'
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
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Complete Product Catalog</h1>
          <p className="text-xl text-slate-300">Professional Dairy Equipment with Technical Specifications</p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="py-8 px-4 bg-slate-900/50 backdrop-blur-xl sticky top-20 z-40 border-b border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 justify-start md:justify-center min-w-max md:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-xs md:text-sm whitespace-nowrap ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-xl`
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/10'
                }`}
              >
                {cat.name.split(' ')[0]} {cat.name.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY HEADER */}
      <section className="py-12 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{currentCategory.icon}</div>
            <div>
              <h2 className="text-3xl font-black text-white">{currentCategory.name}</h2>
              <p className="text-slate-400 mt-2">{currentCategory.description}</p>
              <p className="text-sm text-slate-500 mt-2">{currentCategory.products.length} products available</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {currentCategory.products.map((product, idx) => (
              <div key={idx} className="group">
                <div
                  onClick={() => setExpandedProduct(expandedProduct === idx ? null : idx)}
                  className="bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* IMAGE PLACEHOLDER */}
                    <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-5xl border border-white/10 flex-shrink-0">
                      {product.image ? (
                        <img src={product.image} alt={product.model} className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        currentCategory.icon
                      )}
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-black text-white">{product.model}</h3>
                            {product.badge && (
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-400 mb-3">{product.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                              <span key={key} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                                <strong>{key}:</strong> {value}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${
                            expandedProduct === idx ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-2 items-end">
                      <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {product.price}
                      </p>
                      <a
                        href="https://wa.me/918111007798"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm flex items-center gap-1"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Quote
                      </a>
                    </div>
                  </div>
                </div>

                {/* EXPANDED DETAILS */}
                {expandedProduct === idx && (
                  <div className="bg-gradient-to-b from-slate-800/50 to-slate-900 border border-white/10 border-t-0 rounded-b-2xl p-8 mt-px">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-black text-cyan-400 mb-4">Technical Specifications</h4>
                        <div className="space-y-3">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex gap-4">
                              <span className="font-semibold text-slate-300 min-w-32">{key}:</span>
                              <span className="text-slate-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-cyan-400 mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {product.specs && Object.values(product.specs).map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300">
                              <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                      <a
                        href={"https://wa.me/918111007798?text=I%20am%20interested%20in%20the%20product:%20" + encodeURIComponent(product.model)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Get Quote on WhatsApp
                      </a>
                      <button className="px-6 py-3 border border-slate-600 text-slate-300 font-bold rounded-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Spec
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            {Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0)}+ Professional Products
          </h2>
          <p className="text-xl text-slate-300 mb-8">Complete solutions for dairy operations of all sizes</p>
          <a
            href="https://wa.me/918111007798"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Our Specialist
          </a>
        </div>
      </section>
    </div>
  );
}