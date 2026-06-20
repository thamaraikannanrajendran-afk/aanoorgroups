import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918111007798?text=Hello%20Aanoor%20Enterprises!%20I%20am%20interested%20in%20your%20dairy%20equipment%20and%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-40"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
