import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-primary-dark font-bold">AE</span>
              </div>
              <h3 className="text-xl font-bold">Aanoor</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              <strong>Reliable. Trusted. Together.</strong>
            </p>
            <p className="text-xs text-gray-400">
              Quality dairy equipment and professional services since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent-gold transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-accent-gold" />
                <a href="tel:+918111007798" className="hover:text-accent-gold transition-colors">
                  +91 81110 07798
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-accent-gold" />
                <a href="mailto:aanoorenrerprises.kot@gmail.com" className="hover:text-accent-gold transition-colors">
                  aanoorenrerprises.kot@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent-gold" />
                <div className="text-xs">
                  <p>3/390, Adukkunagar,</p>
                  <p>Kothamangalam (Po),</p>
                  <p>P.Velur (Tk), Namakkal (Dt)</p>
                  <p>TN - 637213</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent-gold">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Erode</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Namakkal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-gold">✓</span>
                <span>Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-primary-navy" />

        {/* Bottom Footer */}
        <div className="py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Aanoor Enterprises. All rights reserved.</p>
          <p>GSTIN: 33CVGPG8716C1ZU</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://wa.me/918111007798" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
