import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © 2025 Yatri Cloud. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/yatricloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://chat.whatsapp.com/Jv69zXvWVhYAjpvyt4MoIJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://discord.com/invite/92warrKq9j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};