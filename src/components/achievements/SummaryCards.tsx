'use client';

import React from 'react';
import { Card } from '@/shared/ui/card';

interface SummaryCardsProps {
  earnedCount: number;
  totalCount: number;
  completionRate: number;
  lockedCount: number;
}

export function SummaryCards({
  earnedCount,
  totalCount,
  completionRate,
  lockedCount,
}: SummaryCardsProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
        <div className="space-y-3">
          <p className="text-sm font-normal text-gray">BADGES EARNED</p>
          <div className="flex items-end justify-start gap-2 mt-8">
            <span className="text-4xl font-semibold text-black-1f">
              {earnedCount}{' '}
            </span>
            <span className="text-gray text-base font-normal">
              {' '}
              / {totalCount}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-blue-gradient rounded-full"
              style={{ width: `${(earnedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        </div>
      </Card>

      <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-2">COMPLETION RATE</p>
          <div className="block mt-8">
            <div className="flex items-center justify-between ">
              <span className="text-4xl font-semibold text-black-1f">
                {completionRate}%
              </span>
            </div>
            <p className="text-sm text-gray font-normal">
              {lockedCount} badges left to unlock
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
