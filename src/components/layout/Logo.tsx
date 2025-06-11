import React from 'react';
import { APP_CONFIG } from '../../utils/constants';

export function Logo() {
  return (
    <div className="w-40 h-40 mx-auto mb-8">
      <img
        src={APP_CONFIG.company.logo}
        alt={`${APP_CONFIG.company.name} Logo`}
        className="w-full h-full object-contain animate-float"
        loading="eager"
      />
    </div>
  );
}