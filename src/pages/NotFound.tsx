import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-medium rounded-md transition-colors duration-200"
        >
          Return Home
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://github.com/yatricloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            GitHub Community
          </a>
          <a
            href="https://discord.gg/yatricloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Discord Server
          </a>
        </div>
      </div>
    </div>
  );
}; 