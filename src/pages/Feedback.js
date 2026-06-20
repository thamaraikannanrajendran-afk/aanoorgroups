import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: 5,
    feedback: ''
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
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', rating: 5, feedback: '' });
    }, 3000);
  };

  return (
    <div className="overflow-hidden bg-slate-950">
      {/* HERO */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Customer Feedback</h1>
          <p className="text-xl text-slate-300">Share your experience with us</p>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-black text-white mb-2">We Value Your Feedback</h2>
            <p className="text-slate-400 mb-8">Help us improve by sharing your experience with our products and services</p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-8 py-6 rounded-xl text-center">
                <p className="font-bold text-lg mb-2">✓ Thank You!</p>
                <p>Your feedback has been received and will help us improve</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+91 XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-4">Rate Your Experience *</label>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className="transition-all duration-300 hover:scale-125"
                      >
                        <Star
                          size={40}
                          className={formData.rating >= star ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Your Feedback *</label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Share your experience, suggestions, or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Customer Testimonials</h2>
            <p className="text-xl text-slate-400">Real feedback from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Farmer Ravi', text: 'Excellent products and outstanding customer service!', rating: 5 },
              { name: 'Dairy Owner', text: 'Reliable equipment with professional installation and support.', rating: 5 },
              { name: 'Cooperative Society', text: 'Best quality solutions we could find in the market today.', rating: 5 }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-bold text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}