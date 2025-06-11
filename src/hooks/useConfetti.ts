import { useState, useEffect } from 'react';

export function useConfetti(duration: number = 3000) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), duration);
      return () => clearTimeout(timer);
    }
  }, [showConfetti, duration]);

  return {
    showConfetti,
    triggerConfetti: () => setShowConfetti(true),
  };
}