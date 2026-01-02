'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function GreatMomentumCard(): React.JSX.Element {
  return (
    <Card
      style={{
        background: 'linear-gradient(0deg, #FAFBFC, #FAFBFC)',
        backgroundImage:
          'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(16, 185, 129, 0.2) 100%)',
      }}
      className="border border-[#3B82F633] rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] p-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-green-blue-gradient flex items-center justify-center shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
        <div className="flex-1 space-y-1">
          <div>
            <h2 className="text-xl font-semibold text-black-1f mb-1">
              Great momentum this week! ✨
            </h2>
            <p className="text-base font-normal text-gray">
              Your performance is trending upward across all key metrics.
              You&apos;re on track to reach Gold tier by next month if you
              maintain this pace. Keep up the excellent work!
            </p>
          </div>
          <div className=" pt-0 flex items-center gap-4">
            <div className="flex items-center justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-color"></div>
              <span className="text-sm text-gray font-normal">
                On-time rate:
              </span>
              <div className="flex items-center gap-0">
                <span className="text-sm font-bold text-black-1f">+3%</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-color"></div>
              <span className="text-sm text-gray font-normal">
                Order volume:
              </span>
              <div className="flex items-center gap-0">
                <span className="text-sm font-bold text-black-1f">+12%</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-color"></div>
              <span className="text-sm text-gray font-normal">
                Completion rate:
              </span>
              <div className="flex items-center gap-0">
                <span className="text-sm font-bold text-black-1f">Stable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
