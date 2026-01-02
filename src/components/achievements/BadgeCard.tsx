'use client';

import React from 'react';
import { Lock } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { Card } from '@/shared/ui/card';
import GreenCheckedIcon from '@/assets/svg/greenCheckedIcon';
import { type Badge } from './types';
import { getRarityColor, getRarityBorderColor } from './utils';

interface BadgeCardProps {
  badge: Badge;
  onClick: () => void;
}

export function BadgeCard({
  badge,
  onClick,
}: BadgeCardProps): React.JSX.Element {
  const Icon = badge.icon;
  const progressPercentage = badge.progress
    ? Math.min((badge.progress.current / badge.progress.target) * 100, 100)
    : 0;

  return (
    <Card
      onClick={onClick}
      className={`border-[1.6px] ${getRarityBorderColor(badge.rarity, badge.earned)} rounded-[14px] p-6  transition-shadow cursor-pointer text-center`}
    >
      <div className="space-y-4">
        {/* Icon and Status */}
        <div className="flex items-center justify-center">
          <div
            className={`w-20 h-20 rounded-2xl ${badge.iconBg} flex items-center justify-center relative`}
          >
            {badge.iconImage ? (
              <>
                <Image
                  src={badge.iconImage as unknown as StaticImageData}
                  alt={badge.name}
                  width={40}
                  height={40}
                  className={`object-contain ${!badge.earned ? 'opacity-50 grayscale' : ''}`}
                />
                {badge.earned && (
                  <div className="absolute -top-2 -right-2 w-9 h-9 flex items-center justify-center">
                    <GreenCheckedIcon />
                  </div>
                )}
                {!badge.earned && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#6B7280]" strokeWidth={2} />
                  </div>
                )}
              </>
            ) : (
              <>
                {badge.earned && (
                  <div className="absolute -top-2 -right-2 w-9 h-9 flex items-center justify-center">
                    <GreenCheckedIcon />
                  </div>
                )}
                {!badge.earned && <Lock className="w-6 h-6 text-[#6B7280]" />}
              </>
            )}
          </div>
        </div>

        {/* Badge Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-black-1f">{badge.name}</h3>
          <p className="text-sm text-gray font-normal">{badge.description}</p>
        </div>
        <div className="flex items-center justify-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium  ${getRarityColor(
              badge.rarity,
            )}`}
          >
            {badge.rarity}
          </span>
        </div>
        {/* Progress or Earned Date */}
        {badge.earned && badge.earnedDate ? (
          <div className="pt-0">
            <p className="text-xs text-gray font-normal">
              Earned {badge.earnedDate}
            </p>
          </div>
        ) : badge.progress ? (
          <div className="space-y-2 pt-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray text-xs font-normal">Progress</span>
              <span className="text-gray text-xs font-normal">
                {badge.progress.current} / {badge.progress.target}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-blue-gradient rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
