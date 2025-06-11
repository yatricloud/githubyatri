import React from 'react';
import { Linkedin } from 'lucide-react';

interface FollowButtonProps {
  onClick: () => void;
}

export default function FollowButton({ onClick }: FollowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Linkedin className="w-5 h-5 mr-2" />
      <span>Follow Yatri Cloud</span>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007cff] to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
    </button>
  );
}