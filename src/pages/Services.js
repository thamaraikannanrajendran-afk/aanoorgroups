import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Clock, Users, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Installation & Setup',
      description: 'Professional installation and configuration',
      features: ['Expert technicians', 'Quick setup', 'Testing included', 'Documentation']
    },
    {
      icon: Clock,
      title: 'Maintenance & Support',
      description: 'Regular maintenance and preventive care',
      features: ['Annual contracts', 'Regular check-ups', 'Priority support', 'Spare parts']
    },
    {
      icon: Users,
      title: 'Training & Consultation',
      description: 'Comprehensive training for your team',
      features: ['Operator training', 'Usage guidelines', 'Best practices', 'Support hotline']
    },
    {
      icon: Shield,
      title: 'Repair & Troubleshooting',
      description: 'Quick response repair services',
      features: ['24/7 support', 'Fast response', 'Expert diagnosis', 'Quality parts']
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-300">Complete Support & Maintenance Solutions</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((Service, idx) => {
              const Icon = Service.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {Service.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{Service.description}</p>
                    <ul className="space-y-3">
                      {Service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Our Process</h2>
            <p className="text-xl text-slate-400">Simple and efficient service delivery</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-0">
            {[
              { step: '1', title: 'Contact', desc: 'Reach out to us' },
              { step: '2', title: 'Assessment', desc: 'We evaluate needs' },
              { step: '3', title: 'Delivery', desc: 'Professional service' },
              { step: '4', title: 'Support', desc: 'Ongoing assistance' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 text-white text-2xl font-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Coverage Areas</h2>
            <p className="text-xl text-slate-400">Professional service coverage</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {['Erode', 'Namakkal'].map((area) => (
              <div
                key={area}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-white mb-2">{area}</h3>
                <p className="text-slate-400">Rapid response & quality service</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6">Need Professional Service?</h2>
          <p className="text-xl text-slate-300 mb-8">Get in touch with our expert team today</p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 gap-2"
          >
            <Phone className="w-5 h-5" />
            Request Service
          </Link>
        </div>
      </section>
    </div>
  );
}