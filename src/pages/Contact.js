import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Product Inquiry',
    message: ''
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'Product Inquiry', message: '' });
    }, 3000);
  };

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">We're here to help with your dairy equipment needs</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* INFO */}
            <div>
              <h2 className="text-4xl font-black text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <a
                  href="tel:+918111007798"
                  className="group flex gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-purple-500/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <p className="text-slate-300 group-hover:text-purple-400 transition-colors">+91 81110 07798</p>
                    <p className="text-sm text-slate-500 mt-1">Call us anytime</p>
                  </div>
                </a>

                <a
                  href="mailto:aanoorenrerprises.kot@gmail.com"
                  className="group flex gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-purple-500/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-slate-300 group-hover:text-purple-400 transition-colors text-sm break-all">aanoorenrerprises.kot@gmail.com</p>
                    <p className="text-sm text-slate-500 mt-1">Response within 24 hours</p>
                  </div>
                </a>

                <div className="flex gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      3/390, Adukkunagar,<br />
                      Kothamangalam (Po),<br />
                      P.Velur (Tk), Namakkal (Dt)<br />
                      Tamil Nadu - 637213
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918111007798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-6 bg-gradient-to-br from-green-600 to-emerald-600 border border-green-500/30 group-hover:border-green-400 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-white group-hover:text-green-100 transition-colors">Quick chat support available</p>
                    <p className="text-sm text-green-100 mt-1">Instant response</p>
                  </div>
                </a>
              </div>
            </div>

            {/* FORM */}
            <div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-4 rounded-xl text-center">
                    <p className="font-bold text-lg mb-1">✓ Thank you!</p>
                    <p>We'll respond within 24 hours</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-2 text-sm">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-2 text-sm">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="+91 XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-2 text-sm">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-2 text-sm">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Service Request">Service Request</option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-2 text-sm">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Service Areas</h2>
            <p className="text-xl text-slate-400">We serve these regions with fast and reliable support</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { area: 'Erode', emoji: '🏘️', desc: 'Fast response & professional service' },
              { area: 'Namakkal', emoji: '🏘️', desc: 'Dedicated support & installation' }
            ].map((item) => (
              <div
                key={item.area}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.area}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}