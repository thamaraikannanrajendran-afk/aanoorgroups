import React from 'react';
import { MapPin, Phone, Mail, Award, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    { icon: '🏆', title: 'Excellence', desc: 'Highest quality standards' },
    { icon: '🤝', title: 'Trust', desc: 'Built on honest relationships' },
    { icon: '⚡', title: 'Innovation', desc: 'Cutting-edge solutions' }
  ];

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Aanoor Enterprises</h1>
          <p className="text-2xl text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold">Reliable. Trusted. Together.</p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">About Us</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Aanoor Enterprises is your trusted partner for premium dairy equipment solutions. We specialize in providing high-quality RO systems, milk testing equipment, and professional support services.
                </p>
                <p>
                  With headquarters in Kothamangalam, Namakkal, we've committed ourselves to delivering excellence across Erode and Namakkal regions.
                </p>
                <p>
                  Our team of experts understands the dairy industry intimately and works closely with partners to provide tailored solutions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6">Mission</h3>
              <p className="text-slate-300 mb-8 text-lg">
                To provide reliable, high-quality dairy equipment and services that empower farmers and businesses to succeed.
              </p>
              <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6">Vision</h3>
              <p className="text-slate-300 text-lg">
                To be the trusted leader in dairy equipment solutions, known for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPRIETOR */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">Leadership</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-12 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">R. Gopinath</h3>
            <p className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold text-xl mb-6">Proprietor & Founder</p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Leading Aanoor Enterprises with a vision to provide quality dairy equipment solutions. With dedication and expertise, building trust with every customer and driving innovation in the dairy sector.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="tel:+918111007798"
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-cyan-500/30">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-white mb-3">Phone</h3>
              <p className="text-slate-300 hover:text-cyan-400 transition-colors">+91 81110 07798</p>
            </a>

            <a
              href="mailto:aanoorenrerprises.kot@gmail.com"
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-cyan-500/30">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-white mb-3">Email</h3>
              <p className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">aanoorenrerprises.kot@gmail.com</p>
            </a>

            <a
              href="#"
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg shadow-cyan-500/30">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-white mb-3">Location</h3>
              <p className="text-slate-300 text-sm">Kothamangalam, Namakkal, TN</p>
            </a>
          </div>
        </div>
      </section>

      {/* GST */}
      <section className="py-8 px-4 bg-slate-900 border-t border-white/10 text-center">
        <p className="text-slate-400 text-sm">
          <span className="font-bold text-white">GSTIN:</span> 33CVGPG8716C1ZU
        </p>
      </section>
    </div>
  );
}