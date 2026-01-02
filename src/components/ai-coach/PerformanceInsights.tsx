'use client';

import React from 'react';
import { Clock, CheckCircle, Package, TrendingUp } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function PerformanceInsights(): React.JSX.Element {
  return (
    <div className="lg:col-span-2 space-y-4 mt-6">
      <h2 className="text-lg font-semibold text-black-1f">
        Performance Insights
      </h2>

      {/* On-Time Performance */}
      <Card className="p-6 bg-white rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
        <div className="flex gap-4">
          <div className="w-12 h-12 min-w-12 min-h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-gradient flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold text-black-1f mb-0">
                On-Time Performance
              </h3>
              <span className="p-0 text-green-color flex items-center gap-2 text-xs font-medium shrink-0">
                <TrendingUp className="w-4 h-4 text-[#10B981]" /> +3%
              </span>
            </div>
            <div className="block space-y-1">
              <h3 className="text-sm font-medium text-black-1f">
                Your pickup on-time rate improved by 3% this week
              </h3>
              <p className="text-xs text-gray font-normal leading-relaxed">
                You arrived on time for 94% of your pickups. This is above the
                90% target and puts you in the top 25% of drivers.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Completion Rate */}
      <Card className="p-6 bg-white rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
        <div className="flex gap-4">
          <div className="w-12 h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-green-gradient flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold text-black-1f mb-0">
                Completion Rate
              </h3>
              <span className="p-0 text-gray flex items-center gap-2 text-xs font-medium shrink-0">
                -- Stable
              </span>
            </div>
            <div className="block space-y-1">
              <h3 className="text-sm font-medium text-black-1f">
                Excellent completion rate maintained
              </h3>
              <p className="text-xs text-gray font-normal leading-relaxed">
                Your 97% completion rate is outstanding. Keep maintaining this
                consistency to maximize your tier progression.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Order Volume */}
      <Card className="p-6 bg-white rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
        <div className="flex gap-4">
          <div className="w-12 h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-orange-gradient flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold text-black-1f mb-0">
                Order Volume
              </h3>
              <span className="p-0 text-green-color flex items-center gap-2 text-xs font-medium shrink-0">
                <TrendingUp className="w-4 h-4 text-[#10B981]" /> +12%
              </span>
            </div>
            <div className="block space-y-1">
              <h3 className="text-sm font-medium text-black-1f">
                Order volume trending upward
              </h3>
              <p className="text-xs text-gray font-normal leading-relaxed">
                You completed 15 orders today, up from your average of 13.
                Maintaining this pace will help you reach your weekly goal.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
