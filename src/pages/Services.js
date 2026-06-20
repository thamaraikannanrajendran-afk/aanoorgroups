import React from 'react';
import { Wrench, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <Wrench className="text-accent-gold" size={40} />,
      title: 'Installation & Setup',
      description: 'Professional installation and configuration of all dairy equipment',
      features: ['Expert technicians', 'Quick setup', 'Testing included', 'Documentation']
    },
    {
      id: 2,
      icon: <Clock className="text-accent-gold" size={40} />,
      title: 'Maintenance & Support',
      description: 'Regular maintenance and preventive care for optimal performance',
      features: ['Annual contracts', 'Regular check-ups', 'Priority support', 'Spare parts']
    },
    {
      id: 3,
      icon: <Users className="text-accent-gold" size={40} />,
      title: 'Training & Consultation',
      description: 'Comprehensive training and expert consultation for your team',
      features: ['Operator training', 'Usage guidelines', 'Best practices', 'Support hotline']
    },
    {
      id: 4,
      icon: <Shield className="text-accent-gold" size={40} />,
      title: 'Repair & Troubleshooting',
      description: 'Quick response repair services and technical troubleshooting',
      features: ['24/7 support', 'Fast response', 'Expert diagnosis', 'Quality parts']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-accent-gold">Complete Support & Maintenance Solutions</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div>{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-accent-gold font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', desc: 'Reach out via phone or WhatsApp' },
              { step: '2', title: 'Assessment', desc: 'We evaluate your needs' },
              { step: '3', title: 'Service', desc: 'Professional service delivery' },
              { step: '4', title: 'Follow-up', desc: 'Ongoing support & maintenance' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-primary-dark text-white text-4xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Service Coverage Areas</h2>
          <p className="text-lg text-gray-300 mb-8">We provide professional services in these regions</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-primary-navy p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">Erode</h3>
              <p className="text-gray-300">Fast response & comprehensive coverage</p>
            </div>
            <div className="bg-primary-navy p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-accent-gold mb-4">Namakkal</h3>
              <p className="text-gray-300">Dedicated support & installation team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-accent-gold text-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Service?</h2>
          <p className="text-lg mb-8">Request a service visit or consultation today</p>
          <Link to="/contact" className="inline-block bg-primary-dark text-white hover:bg-primary-navy font-bold py-3 px-8 rounded-lg transition-colors">
            Request Service
          </Link>
        </div>
      </section>
    </div>
  );
}