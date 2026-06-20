import React from 'react';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Aanoor Enterprises</h1>
          <p className="text-xl text-accent-gold">Reliable. Trusted. Together.</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">About Us</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Aanoor Enterprises is a trusted provider of premium dairy equipment and professional services. We are committed to delivering quality products and exceptional customer support.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our team of experts understands the dairy industry and works closely with farmers and businesses to provide tailored solutions that meet their specific needs.
              </p>
              <p className="text-gray-600 text-lg">
                With our headquarters in Kothamangalam, Namakkal, we serve customers across Erode and Namakkal with dedication and professionalism.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-dark to-primary-navy p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold text-accent-gold mb-6">Our Mission</h3>
              <p className="mb-6">To provide reliable, high-quality dairy equipment and services that empower farmers and businesses to succeed.</p>
              <h3 className="text-2xl font-bold text-accent-gold mb-6">Our Vision</h3>
              <p>To be the trusted partner for dairy equipment solutions across the region, known for quality, reliability, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">Leadership</h2>
          <div className="bg-gradient-to-r from-primary-dark to-primary-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">R. Gopinath</h3>
            <p className="text-accent-gold text-lg font-semibold mb-4">Proprietor & Founder</p>
            <p className="text-gray-300">
              Leading Aanoor Enterprises with a vision to provide quality dairy equipment solutions to the region. With dedication and expertise, building trust with every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Reliability', desc: 'Dependable service and quality products' },
              { icon: '🤝', title: 'Trust', desc: 'Built on honest relationships and transparency' },
              { icon: '💪', title: 'Excellence', desc: 'Committed to highest standards' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="text-accent-gold mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href="tel:+918111007798" className="text-gray-300 hover:text-accent-gold transition-colors">
                +91 81110 07798
              </a>
            </div>
            <div className="text-center">
              <Mail className="text-accent-gold mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href="mailto:aanoorenrerprises.kot@gmail.com" className="text-gray-300 hover:text-accent-gold transition-colors break-all">
                aanoorenrerprises.kot@gmail.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="text-accent-gold mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">
                3/390, Adukkunagar, Kothamangalam (Po), P.Velur (Tk), Namakkal (Dt) - 637213
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GST Info */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            <strong>GSTIN:</strong> 33CVGPG8716C1ZU
          </p>
        </div>
      </section>
    </div>
  );
}