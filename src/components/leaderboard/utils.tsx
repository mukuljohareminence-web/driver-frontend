import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import React from 'react';

export const getTierColor = (tier: string): string => {
  switch (tier) {
    case 'Gold':
      return 'bg-[#F59E0B26] text-[#F59E0B]';
    case 'Silver':
      return 'bg-[#C0C0C033] text-[#71717A]';
    case 'Bronze':
      return 'bg-[#CD7F3226] text-[#92400E] ';
    default:
      return 'bg-[#C0C0C033] text-[#71717A]';
  }
};

export const getTrendIcon = (trend: string): React.JSX.Element => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    case 'down':
      return <TrendingDown className="w-4 h-4 text-red-600" />;
    default:
      return <Minus className="w-4 h-4 text-gray-400" />;
  }
};
