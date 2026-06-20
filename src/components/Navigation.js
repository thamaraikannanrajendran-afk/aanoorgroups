import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
              <span className="text-primary-dark font-bold text-xl">AE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Aanoor</h1>
              <p className="text-xs text-accent-gold">Enterprises</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-accent-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#feedback"
              className="bg-accent-gold text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-gold-light transition-colors"
            >
              Feedback
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-accent-gold"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary-navy">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 px-4 hover:bg-primary-navy rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#feedback"
              className="block py-2 px-4 bg-accent-gold text-primary-dark rounded mt-2 hover:bg-accent-gold-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
