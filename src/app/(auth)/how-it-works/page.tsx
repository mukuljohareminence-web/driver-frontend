'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Star,
  TrendingUp,
  Gift,
  ArrowRight,
  Target,
  Zap,
  Trophy,
} from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleContinue = (): void => {
    router.push('/what-you-can-track');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-black-1a">How It Works</h1>
          <p className="text-base text-gray-2">
            Understanding points, tiers, and badges
          </p>
        </div>

        {/* Information Cards */}
        <div className="space-y-4">
          {/* Card 1: Earn Points */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-base font-semibold text-black-1a">
                  Earn Points
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Complete deliveries on time, maintain high completion rates,
                  and provide excellent service to earn points every day.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    <span className="text-xs font-medium text-blue-600">
                      On-time Pickup
                    </span>
                    <span className="text-xs text-blue-600 ml-1">
                      +10 points
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="text-xs font-medium text-green-600">
                      Completed Order
                    </span>
                    <span className="text-xs text-green-600 ml-1">
                      +5 points
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
                    <span className="text-xs font-medium text-orange-600">
                      Daily Streak
                    </span>
                    <span className="text-xs text-orange-600 ml-1">
                      +20 points
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: Climb Tiers */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp
                  className="w-6 h-6 text-orange-600"
                  strokeWidth={2}
                />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-base font-semibold text-black-1a">
                  Climb Tiers
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Accumulate points to advance through Bronze, Silver, and Gold
                  tiers. Higher tiers unlock better rewards and recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 rounded-full bg-orange-50 border border-orange-300">
                    <span className="text-xs font-medium text-orange-700">
                      Bronze
                    </span>
                    <span className="text-xs text-orange-700 ml-1">
                      0 - 999 pts
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gray-50 border border-gray-300">
                    <span className="text-xs font-medium text-gray-700">
                      Silver
                    </span>
                    <span className="text-xs text-gray-700 ml-1">
                      1,000 - 4,999 pts
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-300">
                    <span className="text-xs font-medium text-yellow-700">
                      Gold
                    </span>
                    <span className="text-xs text-yellow-700 ml-1">
                      5,000+ pts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: Unlock Badges */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-green-600" strokeWidth={2} />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-base font-semibold text-black-1a">
                  Unlock Badges
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Complete special challenges and milestones to earn exclusive
                  achievement badges that showcase your expertise.
                </p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-600" strokeWidth={2} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" strokeWidth={2} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Trophy
                      className="w-5 h-5 text-yellow-600"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={handleContinue}
            className="bg-blue-color hover:bg-blue-color/90 text-white h-12 px-8 rounded-lg font-semibold text-base"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-color"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
