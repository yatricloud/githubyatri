import React from 'react';

export const YatriCloudInfo: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-8">
      <div className="flex justify-center mb-8 relative">
        <div className="relative">
          <img
            src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Logo/yatricloud-round-transparent.png"
            alt="Yatri Cloud"
            className="w-24 h-24 md:w-32 md:h-32"
          />
          
        </div>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Welcome to Yatri Cloud
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
        Join our vibrant community of developers, innovators, and tech enthusiasts. 
        Collaborate, learn, and grow together in the world of cloud computing and open source.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
        <div className="bg-[#1f2937] p-6 md:p-8 rounded-lg transform hover:scale-[1.02] transition-transform duration-200">
          <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
          <p className="text-gray-400">Contribute to exciting open source projects and make a difference</p>
        </div>
        
        <div className="bg-[#1f2937] p-6 md:p-8 rounded-lg transform hover:scale-[1.02] transition-transform duration-200">
          <h3 className="text-xl font-semibold text-white mb-3">Cloud Computing</h3>
          <p className="text-gray-400">Learn and explore the latest in cloud technologies</p>
        </div>
        
        <div className="bg-[#1f2937] p-6 md:p-8 rounded-lg transform hover:scale-[1.02] transition-transform duration-200">
          <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
          <p className="text-gray-400">Connect with like-minded developers and share knowledge</p>
        </div>
      </div>
    </div>
  );
}; 