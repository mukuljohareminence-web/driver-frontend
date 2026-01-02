'use client';

import React from 'react';
import { Award } from 'lucide-react';
import MilestoneIcon from '@/assets/svg/milestoneIcon';

export function NextMilestoneCard(): React.JSX.Element {
  return (
    <div className="border border-[#E5E7EB80] bg-light-blue-card-gradient  rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <MilestoneIcon />
              <h2 className="text-base font-medium text-black-1f">
                Next Milestone
              </h2>
            </div>
            <p className="text-base font-normal text-gray">
              You&apos;re almost there!
            </p>
          </div>
        </div>
        <div className="bg-[#FFFFFFCC] rounded-2xl p-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-orange-Box-gradient shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-base font-semibold text-black-1f">
                Gold Tier
              </h3>
              <p className="text-xs text-gray font-normal">
                Unlock premium benefits
              </p>
            </div>
            <div className="w-full space-y-2">
              <div className="flex flex-col items-center justify-center text-sm">
                <span className="text-2xl font-bold text-black-1f">100</span>
                <span className="text-gray text-xs font-medium">
                  {' '}
                  points to go
                </span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-blue-gradient rounded-full"
                  style={{ width: '96%' }}
                ></div>
              </div>
              <div className="text-center">
                <span className="text-xs font-normal text-gray">2,450</span>
                <span className="text-xs text-gray"> / </span>
                <span className="text-xs font-normal text-gray">
                  2,550 points
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
