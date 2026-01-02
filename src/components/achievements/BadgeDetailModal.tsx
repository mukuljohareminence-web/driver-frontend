'use client';

import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { Dialog, DialogContent, DialogFooter } from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { type Badge } from './types';
import { getRarityColor } from './utils';

interface BadgeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  badge: Badge | null;
}

export function BadgeDetailModal({
  isOpen,
  onClose,
  badge,
}: BadgeDetailModalProps): React.JSX.Element {
  if (!badge) return <></>;

  const progressPercentage = badge.progress
    ? Math.round((badge.progress.current / badge.progress.target) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-white rounded-[14px]">
        <div className="px-6 pt-6 pb-0 space-y-4">
          {/* Badge Icon */}
          <div className="flex justify-center">
            <div
              className={`w-24 h-24 rounded-2xl ${badge.iconBg} flex items-center justify-center relative shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1)]`}
            >
              {badge.iconImage ? (
                <Image
                  src={badge.iconImage as unknown as StaticImageData}
                  alt={badge.name}
                  width={55}
                  height={40}
                  className={`object-contain ${!badge.earned ? 'opacity-50 grayscale' : ''}`}
                />
              ) : (
                <></>
              )}
              {!badge.earned && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-[#6B7280]" strokeWidth={2} />
                </div>
              )}
            </div>
          </div>

          {/* Badge Name */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-black-1f mb-2">
              {badge.name}
            </h2>
            <p className="text-sm font-normal text-gray">{badge.description}</p>
          </div>
          <div className="space-y-0 block">
            {/* Rarity */}
            <div className="space-y-2 mb-3 bg-[#F3F4F6] rounded-[12px] p-4 flex items-center justify-between">
              <p className="text-sm font-normal text-gray m-0 p-0">Rarity</p>
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium  ${getRarityColor(
                  badge.rarity,
                )}`}
              >
                {badge.rarity}
              </span>
            </div>
            {badge.earned && (
              <div className="bg-[#10B9811A] rounded-[12px] p-4 border border-[#10B98133]">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-color" />
                  <span className="text-sm font-medium text-green-color">
                    Unlocked
                  </span>
                </div>
                {badge.earned && badge.earnedDate ? (
                  <div className="space-y-2">
                    <p className="text-sm font-normal text-gray">
                      Earned on {badge.earnedDate}
                    </p>
                  </div>
                ) : null}
              </div>
            )}
            <div className="space-y-2 mb-0.5">
              {!badge.earned && (
                <div className="bg-[#F3F4F6] rounded-[12px] p-4">
                  <div className="flex items-center gap-2 rounded-lg mb-1.5">
                    <Lock className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Locked
                    </span>
                  </div>
                  <p className="text-sm font-normal text-gray">
                    Currently ranked #12. Keep earning points!
                  </p>
                </div>
              )}
            </div>

            {/* Earned Date or Progress */}
            {badge.progress ? (
              <div className="space-y-1 mt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray text-xs font-normal">
                    Progress
                  </span>
                  <span className="text-gray text-xs font-normal">
                    {badge.progress.current} / {badge.progress.target}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full  bg-green-blue-gradient rounded-full"
                    style={{
                      width: `${
                        (badge.progress.current / badge.progress.target) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="block mt-0">
                  <span className="text-gray text-xs font-normal">
                    {progressPercentage}%
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Footer with Close Button */}
        <DialogFooter className="p-6 pt-0">
          <Button
            onClick={onClose}
            className="w-full bg-blue-color cursor-pointer hover:bg-blue-color/90 text-white h-10 rounded-lg font-medium"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
