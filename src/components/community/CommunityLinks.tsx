import React from 'react';

export const CommunityLinks: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Join Our Communities
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Connect with fellow developers, share knowledge, and be part of our growing community
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <a
          href="https://chat.whatsapp.com/Jv69zXvWVhYAjpvyt4MoIJ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 md:p-8 bg-[#1f2937] hover:bg-[#2d3748] rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
        >
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">GitHub Yatri Community</h3>
            <p className="text-gray-400 text-lg">Join our WhatsApp group</p>
          </div>
        </a>

        <a
          href="https://discord.com/invite/92warrKq9j"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 md:p-8 bg-[#1f2937] hover:bg-[#2d3748] rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
        >
          <div className="text-center">
            <img
              src="https://raw.githubusercontent.com/yatricloud/yatri-images/5e4a7d69391893e3926361371b6d06750046f4a0/Yatri%20Community/Discord%20Yatri%20/Discord%20Logo/Discord-01.svg"
              alt="Discord"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Yatri Discord Community</h3>
            <p className="text-gray-400 text-lg">Join our Discord server</p>
          </div>
        </a>
      </div>
    </div>
  );
}; 