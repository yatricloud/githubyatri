import React from 'react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  return (
    <header className="w-full backdrop-blur-md bg-[#0d1117]/80 border-b border-gray-800/50 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png"
              alt="Yatri Cloud"
              className="h-10 w-10"
            />
            <span className="ml-3 text-xl font-semibold text-white">Yatri Cloud</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/yatricloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://chat.whatsapp.com/Jv69zXvWVhYAjpvyt4MoIJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="https://discord.com/invite/92warrKq9j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Discord
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};
