import React, { useState } from 'react';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-gray-300 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
          
          {/* Menu Content */}
          <div className="fixed top-16 left-0 right-0 bg-[#0d1117] border-b border-gray-800 shadow-xl">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
              <a
                href="https://github.com/yatricloud"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#1f2937] transition-colors duration-200"
                onClick={toggleMenu}
              >
                GitHub
              </a>
              <a
                href="https://chat.whatsapp.com/Jv69zXvWVhYAjpvyt4MoIJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#1f2937] transition-colors duration-200"
                onClick={toggleMenu}
              >
                WhatsApp
              </a>
              <a
                href="https://discord.com/invite/92warrKq9j"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-[#1f2937] transition-colors duration-200"
                onClick={toggleMenu}
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 