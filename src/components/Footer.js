import React from 'react';
import { Phone, Mail, MapPin, Award, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-black text-white">
                AE
              </div>
              <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Aanoor</h3>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              <strong>Reliable. Trusted. Together.</strong>
            </p>
            <p className="text-xs text-slate-500">
              Professional dairy equipment and services provider
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-slate-400 hover:text-cyan-400 transition-colors">Products</a></li>
              <li><a href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-4 text-cyan-400">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+918111007798" className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+91 81110 07798</span>
              </a>
              <a href="mailto:aanoorenrerprises.kot@gmail.com" className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs">aanoorenrerprises.kot@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  3/390, Adukkunagar, Kothamangalam (Po),<br />
                  P.Velur (Tk), Namakkal (Dt)<br />
                  TN - 637213
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-black text-lg mb-4 text-cyan-400">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Erode
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Namakkal
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>&copy; 2024 Aanoor Enterprises. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span><strong>GSTIN:</strong> 33CVGPG8716C1ZU</span>
            <a href="https://wa.me/918111007798" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}