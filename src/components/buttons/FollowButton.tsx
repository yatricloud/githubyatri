import React from 'react';

interface FollowButtonProps {
  onClick: () => void;
}

export function FollowButton({ onClick }: FollowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 
        bg-gradient-to-r from-blue-600 to-blue-500 
        hover:from-blue-500 hover:to-blue-400 
        rounded-lg shadow-lg hover:shadow-xl 
        transform hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-100"
    >
      Follow Yatri Cloud
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg" />
    </button>
  );
}