import React from 'react';

export function MessageBanner() {
  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-fade-in">
      <p className="text-2xl font-medium text-white/90 leading-relaxed">
        We are here today because of your support, and we need it today.
      </p>
      <p className="text-xl text-white/80 leading-relaxed">
        Please repost, comment, and follow to help us grow our community!
      </p>
    </div>
  );
}