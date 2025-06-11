import React from 'react';

interface ProgressBarProps {
  current: number;
  target: number;
}

export function ProgressBar({ current, target }: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100);
  
  return (
    <div className="w-full bg-white/10 rounded-full h-6 backdrop-blur-sm border border-white/20">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      >
        <div className="flex items-center justify-center h-full">
          <span className="text-xs font-semibold text-white">
            {current.toLocaleString()} / {target.toLocaleString()} Followers
          </span>
        </div>
      </div>
    </div>
  );
}