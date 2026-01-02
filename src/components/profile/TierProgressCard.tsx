'use client';

import React from 'react';
import { Trophy } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function TierProgressCard(): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-black-1f" />
        <h3 className="text-base font-semibold text-black-1f">Tier Progress</h3>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 justify-between mb-2">
            <span className="text-sm text-gray font-norma">Current Tier</span>
            <span className="font-normal text-sm text-black-1f">Silver</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray font-normal">Points:</span>
            <span className="text-sm text-black-1f font-normal">
              2,450 / 5,000
            </span>
          </div>
          <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div
              className="h-full bg-green-blue-gradient rounded-full"
              style={{ width: '49%' }}
            ></div>
          </div>
        </div>
        <div className="p-4 rounded-[12px] bg-[#F3F4F6]">
          <p className="text-sm font-medium text-black-1a mb-1">
            Next: Gold Tier
          </p>
          <p className="text-xs text-gray-2">2550 points to go</p>
        </div>
      </div>
    </Card>
  );
}
