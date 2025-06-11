import React from 'react';
import { Trophy, Gift, Newspaper, BookOpen, Award } from 'lucide-react';

interface RewardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RewardCard = ({ icon, title, description }: RewardProps) => {
  return (
    <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-blue-100/80">{description}</p>
      </div>
    </div>
  );
};

export const rewards = [
  {
    icon: <Trophy size={32} className="text-yellow-400" />,
    title: "LinkedIn Premium",
    description: "Get 3 months of FREE LinkedIn Premium access"
  },
  {
    icon: <Newspaper size={32} className="text-green-400" />,
    title: "Featured Post",
    description: "Get featured in our LinkedIn post reaching 50k+ followers"
  },
  {
    icon: <Award size={32} className="text-purple-400" />,
    title: "Certification Vouchers",
    description: "Win FREE certification exam vouchers"
  },
  {
    icon: <BookOpen size={32} className="text-orange-400" />,
    title: "Live Projects",
    description: "Access to real-world project experience"
  },
  {
    icon: <Gift size={32} className="text-pink-400" />,
    title: "Expert Tips",
    description: "Exclusive certification preparation guides"
  }
];

export default RewardCard;