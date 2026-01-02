'use client';

import React from 'react';
import {
  Clock,
  CheckCircle,
  Package,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import Image from 'next/image';
import proTipImage from '@/assets/images/icons/proTipsLightIcon.png';

interface WhatYouCanTrackSlideProps {
  onComplete: () => void;
}

export function WhatYouCanTrackSlide({
  onComplete,
}: WhatYouCanTrackSlideProps): React.JSX.Element {
  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold text-black-1f">
          What You Can Track
        </h1>
        <p className="text-xl text-gray font-normal">
          Monitor the metrics that matter most
        </p>
      </div>

      {/* Metric Cards Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pickup On-Time Rate */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex space-y-3 gap-4 items-start">
            <div className="w-13 h-13 min-w-13 min-h-13 rounded-2xl bg-blue-gradient flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-black-1f">
                Pickup On-Time Rate
              </h3>
              <p className="text-sm text-gray font-normal">
                Track how consistently you arrive on time for pickups. Higher
                rates earn more points.
              </p>
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
                  Target: 90%+
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Completion Rate */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex space-y-3 gap-4 items-start">
            <div className="w-13 h-13 min-w-13 min-h-13 rounded-2xl bg-green-gradient flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-black-1f">
                Completion Rate
              </h3>
              <p className="text-sm text-gray font-normal">
                Percentage of orders successfully completed. Shows your
                reliability.
              </p>
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                  Target: 95%+
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Orders Completed */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex space-y-3 gap-4 items-start">
            <div className="w-13 h-13 min-w-13 min-h-13 rounded-2xl bg-orange-gradient flex items-center justify-center">
              <Package className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-black-1f">
                Orders Completed
              </h3>
              <p className="text-sm text-gray font-normal">
                Total number of deliveries you&apos;ve completed. Volume
                matters.
              </p>
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                  Daily Goal: 20+
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Performance Insights */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-6 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex space-y-3 gap-4 items-start">
            <div className="w-13 h-13 min-w-13 min-h-13 rounded-2xl bg-purple-gradient flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-black-1f">
                AI Performance Insights
              </h3>
              <p className="text-sm text-gray font-normal">
                Get personalized tips and recommendations to improve your
                performance.
              </p>
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">
                  Updated Daily
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Pro Tip Card */}
      <Card className="border border-[#E5E7EB80] bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4">
          <div className="w-13 h-13 min-w-13 min-h-13 rounded-2xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <Image src={proTipImage} alt="Pro Tip" width={32} height={32} />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-semibold text-black-1f">Pro Tip</h3>
            <p className="text-sm text-gray font-normal leading-relaxed">
              Focus on consistency. Maintaining high performance across all
              metrics will help you climb tiers faster and unlock better
              rewards.
            </p>
          </div>
        </div>
      </Card>

      {/* Call to Action Button */}
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={onComplete}
          className="bg-blue-color hover:bg-blue-color/90 text-white h-12 px-8 rounded-lg font-semibold text-base"
        >
          Go to Dashboard
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
