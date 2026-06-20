import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Wrench, Zap } from 'lucide-react';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Home RO Machines',
      description: 'Advanced water purification systems for homes',
      icon: '💧',
      link: '/products#ro-machines'
    },
    {
      id: 2,
      name: 'Milk Analyzers',
      description: 'Precision testing equipment for milk quality',
      icon: '🥛',
      link: '/products#milk-machines'
    },
    {
      id: 3,
      name: 'Chemicals & Consumables',
      description: 'High-quality chemicals for dairy operations',
      icon: '⚗️',
      link: '/products#chemicals'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="text-accent-gold" size={32} />,
      title: 'Quality Assured',
      description: 'All products tested and certified'
    },
    {
      icon: <Wrench className="text-accent-gold" size={32} />,
      title: '24/7 Support',
      description: 'Professional installation and maintenance'
    },
    {
      icon: <Zap className="text-accent-gold" size={32} />,
      title: 'Fast Service',
      description: 'Quick response time in service areas'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reliable Dairy Equipment Solutions</h1>
          <p className="text-xl md:text-2xl text-accent-gold mb-8">Reliable. Trusted. Together.</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Premium RO machines, milk analyzers, and professional services for dairy farmers and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-accent-gold text-primary-dark font-bold py-3 px-8 rounded-lg hover:bg-accent-gold-light transition-colors">
              View Products
            </Link>
            <Link to="/contact" className="border-2 border-accent-gold text-accent-gold font-bold py-3 px-8 rounded-lg hover:bg-accent-gold hover:text-primary-dark transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive range of dairy equipment solutions tailored to meet your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={product.link} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-accent-gold font-semibold mt-4">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Service Areas</h2>
          <p className="text-center text-gray-600 mb-12">We provide professional services in the following areas</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-gold">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">📍 Erode</h3>
              <p className="text-gray-600">Quick response and professional service coverage</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-gold">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">📍 Namakkal</h3>
              <p className="text-gray-600">Dedicated support and installation services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Dairy Operations?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and product demonstration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918111007798" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> WhatsApp Chat
            </a>
            <Link to="/contact" className="bg-accent-gold text-primary-dark font-bold py-3 px-8 rounded-lg hover:bg-accent-gold-light transition-colors">
              Request Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}