'use client';

import React from 'react';
import { Zap, Target } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function ActionableRecommendations(): React.JSX.Element {
  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-black-1f">
        Actionable Recommendations
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Complete 5 more orders */}
        <Card className="p-6 bg-white rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-2xl bg-golden-gradient flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-black-1f mb-1">
                    Complete 5 more orders this week
                  </h3>
                  <p className="text-xs text-gray font-normal">
                    Reward: Unlock &quot;Speed Demon&quot; badge
                  </p>
                </div>
                <div className="flex flex-col items-end justify-end text-sm">
                  <span className="text-sm font-bold text-black-1f block">
                    15/25
                  </span>
                  <span className="text-xs text-gray font-normal">
                    completed
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-blue-gradient rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <span className="text-xs text-gray font-normal">
                  60% complete
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Maintain 95%+ on-time rate */}
        <Card className="p-6 bg-white rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-gradient flex items-center justify-center shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-black-1f mb-1">
                    Maintain 95%+ on-time rate
                  </h3>
                  <p className="text-xs text-gray font-normal">
                    +50 bonus points
                  </p>
                </div>
                <div className="flex flex-col items-end justify-end text-sm">
                  <span className="text-sm font-bold text-black-1f block">
                    94/95
                  </span>
                  <span className="text-xs text-gray font-normal">
                    completed
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-blue-gradient rounded-full"
                    style={{ width: '94%' }}
                  ></div>
                </div>
                <span className="text-xs text-gray font-normal">
                  94% complete
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
