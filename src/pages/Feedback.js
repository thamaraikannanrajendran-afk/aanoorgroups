import React, { useState } from 'react';
import { Star } from 'lucide-react';

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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Feedback</h1>
          <p className="text-xl text-accent-gold">Share Your Experience With Us</p>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">We Value Your Feedback</h2>
            <p className="text-gray-600 mb-8">Help us improve by sharing your experience with our products and services</p>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                <p className="font-bold text-lg mb-2">Thank You!</p>
                <p>Your feedback has been received. We appreciate your time!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
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
                  <label className="block text-gray-700 font-semibold mb-4">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={32}
                          className={formData.rating >= star ? 'fill-accent-gold text-accent-gold' : 'text-gray-300'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Feedback</label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-gold"
                    placeholder="Share your experience, suggestions, or any feedback..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-dark text-white hover:bg-primary-navy font-bold py-3 rounded-lg transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Farmer X', text: 'Excellent products and great customer service!', rating: 5 },
              { name: 'Dairy Owner', text: 'Reliable equipment and fast installation.', rating: 5 },
              { name: 'Business Y', text: 'Professional team with quality support.', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-primary-dark">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}