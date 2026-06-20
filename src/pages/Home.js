import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Phone, MessageCircle } from 'lucide-react';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Premium RO Systems',
      description: 'Advanced water purification for your home and business',
      icon: '💧',
      color: 'from-blue-500 to-cyan-400',
      link: '/products#ro'
    },
    {
      id: 2,
      name: 'Milk Testing Equipment',
      description: 'Precision dairy analyzers for quality assurance',
      icon: '🥛',
      color: 'from-amber-500 to-orange-400',
      link: '/products#milk'
    },
    {
      id: 3,
      name: 'Professional Services',
      description: 'Expert installation and 24/7 support',
      icon: '🔧',
      color: 'from-purple-500 to-pink-400',
      link: '/services'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      desc: '24-48 hour installation'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Guaranteed',
      desc: 'Extended warranty options'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      desc: 'Dedicated support team'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-cyan-400 text-sm font-semibold border border-white/20 hover:border-white/40 transition-all duration-300">
              ✨ Premium Dairy Equipment Solutions
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
            Quality Equipment<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Built for Success</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional dairy equipment and expert services serving Erode and Namakkal with innovation and reliability
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/918111007798"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-white/60"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 px-4 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Our Solutions</h2>
            <p className="text-xl text-slate-400">Comprehensive dairy equipment and services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={product.id}
                to={product.link}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-2xl p-8 transition-all duration-300">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 mb-6">{product.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 px-4 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Service Areas</h2>
            <p className="text-xl text-slate-400">Professional coverage in key regions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {['Erode', 'Namakkal'].map((area, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-white mb-2">{area}</h3>
                <p className="text-slate-400">Fast response & quality service</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6">Ready to Upgrade?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your free consultation today. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918111007798"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Now
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Request Call
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}