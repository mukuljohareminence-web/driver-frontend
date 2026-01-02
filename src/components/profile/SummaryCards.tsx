'use client';

import React from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function SummaryCards(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
        <h2 className="text-base font-normal text-gray">Total Points</h2>
        <div className="flex items-center justify-start gap-3 mt-10">
          <span className="w-12 h-12 min-w-12 min-h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-gradient flex items-center justify-center">
            {' '}
            <Trophy className="w-6 h-6 text-white" />
          </span>
          <div>
            <p className="text-2xl font-medium text-black-1f">2,450</p>
            <p className="text-xs text-gray font-normal">Total Points</p>
          </div>
        </div>
      </Card>
      <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
        <h2 className="text-base font-normal text-gray">Badges Earned</h2>
        <div className="flex items-center justify-start gap-3 mt-10">
          <span className="w-12 h-12 min-w-12 min-h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-green-gradient flex items-center justify-center">
            {' '}
            <Award className="w-6 h-6 text-white" />
          </span>
          <div>
            <p className="text-2xl font-medium text-black-1f">4</p>
            <p className="text-xs text-gray font-normal">Achievements</p>
          </div>
        </div>
      </Card>
      <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
        <h2 className="text-base font-normal text-gray">Current Streak</h2>
        <div className="flex items-center justify-start gap-3 mt-10">
          <span className="w-12 h-12 min-w-12 min-h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-orange-gradient flex items-center justify-center">
            {' '}
            <TrendingUp className="w-6 h-6 text-white" />
          </span>
          <div>
            <p className="text-2xl font-medium text-black-1f">14</p>
            <p className="text-xs text-gray font-normal">Days</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
