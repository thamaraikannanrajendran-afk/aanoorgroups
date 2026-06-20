import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    serviceType: 'inquiry'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real implementation, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '', serviceType: 'inquiry' });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-accent-gold">We're here to help</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-dark mb-2">Phone</h3>
                    <a href="tel:+918111007798" className="text-gray-600 hover:text-primary-dark transition-colors">
                      +91 81110 07798
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-dark mb-2">Email</h3>
                    <a href="mailto:aanoorenrerprises.kot@gmail.com" className="text-gray-600 hover:text-primary-dark transition-colors break-all">
                      aanoorenrerprises.kot@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-dark mb-2">Location</h3>
                    <p className="text-gray-600">
                      3/390, Adukkunagar,<br />
                      Kothamangalam (Po),<br />
                      P.Velur (Tk), Namakkal (Dt)<br />
                      TN - 637213
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-primary-dark mb-2">WhatsApp</h3>
                    <a href="https://wa.me/918111007798" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-dark transition-colors">
                      Click to Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <p className="font-bold">Thank you!</p>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    >
                      <option value="inquiry">Product Inquiry</option>
                      <option value="service">Service Request</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-dark text-white hover:bg-primary-navy font-bold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://wa.me/918111007798"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} /> WhatsApp Chat
            </a>
            <a
              href="tel:+918111007798"
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-dark font-bold py-4 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={24} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}