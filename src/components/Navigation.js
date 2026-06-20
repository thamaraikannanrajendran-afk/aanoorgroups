import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-950 to-slate-900 text-white shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:block bg-gradient-to-r from-slate-900/50 to-slate-800/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2 text-xs">
          <div className="flex justify-between items-center text-slate-300">
            <div className="flex gap-6">
              <a href="tel:+918111007798" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone size={14} /> +91 81110 07798
              </a>
              <a href="mailto:aanoorenrerprises.kot@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail size={14} /> aanoorenrerprises.kot@gmail.com
              </a>
            </div>
            <a href="https://wa.me/918111007798" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-green-600/20 hover:bg-green-600/30 px-3 py-1 rounded transition-all">
              <MessageCircle size={14} /> WhatsApp Support
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-black text-white">
              AE
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Aanoor</h1>
              <p className="text-xs text-slate-400">Enterprises</p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-cyan-400 transition-colors font-semibold">Home</a>
            <a href="/products" className="hover:text-cyan-400 transition-colors font-semibold">Products</a>
            <a href="/services" className="hover:text-cyan-400 transition-colors font-semibold">Services</a>
            <a href="/about" className="hover:text-cyan-400 transition-colors font-semibold">About</a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors font-semibold">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            <a href="/" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Home</a>
            <a href="/products" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Products</a>
            <a href="/services" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Services</a>
            <a href="/about" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">About</a>
            <a href="/contact" className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}