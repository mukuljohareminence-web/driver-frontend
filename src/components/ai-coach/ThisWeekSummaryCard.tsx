'use client';

import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function ThisWeekSummaryCard(): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-3 mb-4">
        <BarChart3 className="w-5 h-5 text-blue-color" />
        <h2 className="text-base font-semibold text-black-1f">This Week</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-[#F3F4F680] rounded-[12px] p-3">
          <span className="text-sm font-normal text-gray">
            Orders Completed
          </span>
          <span className="text-base font-bold text-black-1f">48</span>
        </div>
        <div className="flex items-center justify-between bg-[#F3F4F680] rounded-[12px] p-3">
          <span className="text-sm font-normal text-gray">Points Earned</span>
          <span className="text-base font-bold text-green-color">+420</span>
        </div>
        <div className="flex items-center justify-between bg-[#F3F4F680] rounded-[12px] p-3">
          <span className="text-sm font-normal text-gray">Badges Unlocked</span>
          <span className="text-base font-bold text-orange-color">2</span>
        </div>
      </div>
    </Card>
  );
}
