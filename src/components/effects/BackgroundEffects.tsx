import React, { memo } from 'react';

export const BackgroundEffects = memo(() => (
  <>
    <div className="absolute inset-0 backdrop-blur-[120px] bg-gradient-to-br from-blue-600/10 to-white/10" />
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#007cff]/30 to-transparent rounded-full blur-3xl animate-slow-spin" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl animate-slow-spin-reverse" />
    </div>
  </>
));

BackgroundEffects.displayName = 'BackgroundEffects';