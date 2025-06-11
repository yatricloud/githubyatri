import React from 'react';
import { RewardCard, rewards } from './RewardCard';

export function RewardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
      {rewards.map((reward, index) => (
        <RewardCard key={index} {...reward} />
      ))}
    </div>
  );
}