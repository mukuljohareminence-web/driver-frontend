import { type StaticImageData } from 'next/image';
import type React from 'react';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  earned: boolean;
  earnedDate?: string;
  progress?: { current: number; target: number };
  iconImage?: StaticImageData;
}
