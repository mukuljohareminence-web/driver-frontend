'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function WeeklyGoalCard(): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-5 h-5 text-orange-color" />
              <h2 className="text-base font-medium text-black-1f">
                Weekly Goal
              </h2>
            </div>
            <p className="text-base font-normal text-gray">
              Weekly Performance Goal
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-[#F3F4F680] rounded-2xl p-4">
            <p className="text-sm font-normal text-black-1f">
              Maintain 95%+ on-time rate to earn bonus points
            </p>
            <div className="space-y-2 mt-3">
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-blue-gradient rounded-full"
                  style={{ width: '72%' }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-sm ">
                <span className="text-gray text-xs font-medium">
                  72% complete
                </span>
                <span className="text-gray text-xs font-medium">
                  2 days left
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray text-sm font-medium">Status:</span>
              <span className="text-sm font-bold text-green-color">
                On track
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
