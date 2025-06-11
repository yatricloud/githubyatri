import React from 'react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#0d1117]/30 border-b border-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png"
                alt="Yatri Cloud"
                className="h-10 w-10"
              />
              <span className="ml-3 text-xl font-semibold text-white">Yatri Cloud</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="https://github.com/yatricloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/yatricloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Discord
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
