'use client';

import React from 'react';
import { Star, TrendingUp, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import Image from 'next/image';
import BadgeIcon1 from '@/assets/images/icons/badgeIcon-1.png';
import BadgeIcon2 from '@/assets/images/icons/badgeIcon-2.png';
import BadgeIcon3 from '@/assets/images/icons/badgeIcon-3.png';
import BadgeIcon4 from '@/assets/images/icons/badgeIcon-4.png';

interface HowItWorksSlideProps {
  onNext: () => void;
}

export function HowItWorksSlide({
  onNext,
}: HowItWorksSlideProps): React.JSX.Element {
  return (
    <div className="w-full max-w-3xl space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold text-black-1f">How It Works</h1>
        <p className="text-base xl:text-xl font-normal text-gray max-w-[490px] mx-auto">
          Understanding points, tiers, and badges
        </p>
      </div>

      {/* Information Cards */}
      <div className="space-y-4">
        {/* Card 1: Earn Points */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-8 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-lg bg-blue-gradient flex items-center justify-center flex-shrink-0 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <Star className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-base lg:text-xl font-semibold text-black-1f mb-1.5">
                Earn Points
              </h3>
              <p className="text-base font-normal text-gray mb-2">
                Complete deliveries on time, maintain high completion rates, and
                provide excellent service to earn points every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-3 py-2 rounded-2xl bg-[#F3F4F680] border-none ">
                  <span className="text-xs font-medium text-gray block">
                    On-time Pickup
                  </span>
                  <span className="text-sm font-bold text-blue-color">
                    +10 points
                  </span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-[#F3F4F680] border-none">
                  <span className="text-xs font-medium text-gray block">
                    Completed Order
                  </span>
                  <span className="text-sm font-bold text-green-color">
                    +5 points
                  </span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-[#F3F4F680] border-none">
                  <span className="text-xs font-medium text-gray block">
                    Daily Streak
                  </span>
                  <span className="text-sm font-bold text-orange-color">
                    +20 points
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Climb Tiers */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-8 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-lg bg-orange-gradient flex items-center justify-center flex-shrink-0 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <TrendingUp className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-base lg:text-xl font-semibold text-black-1f mb-1.5">
                Climb Tiers
              </h3>
              <p className="text-base font-normal text-gray mb-2">
                Accumulate points to advance through Bronze, Silver, and Gold
                tiers. Higher tiers unlock better rewards and recognition.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-3 rounded-2xl bg-[#CD7F320D] w-[196px] border border-[#CD7F324D]">
                  <span className="text-sm font-semibold text-[#CD7F32] block">
                    Bronze
                  </span>
                  <span className="text-xs font-medium text-gray">
                    0 - 999 pts
                  </span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-[#C0C0C00D] w-[196px] border border-[#C0C0C066">
                  <span className="text-sm font-semibold text-[#71717A] block">
                    Silver
                  </span>
                  <span className="text-xs font-medium text-gray">
                    1,000 - 4,999 pts
                  </span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-[#FFD7000D] w-[196px] border border-[#FFD70066]">
                  <span className="text-sm font-semibold text-[#CA8A04] block">
                    Gold
                  </span>
                  <span className="text-xs font-medium text-gray">
                    5,000+ pts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 3: Unlock Badges */}
        <Card className="border border-[#E5E7EB80] bg-white rounded-2xl p-8 shadow-[0px_6px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-lg bg-green-gradient flex items-center justify-center flex-shrink-0 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <Gift className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-base lg:text-xl font-semibold text-black-1f mb-1.5">
                Unlock Badges
              </h3>
              <p className="text-base font-normal text-gray mb-2">
                Complete special challenges and milestones to earn exclusive
                achievement badges that showcase your expertise.
              </p>
              <div className="flex gap-3">
                <div className="w-13 h-13 p-3 shadow-[0px_6px_10px_-3px_rgba(0,0,0,0.1)] rounded-2xl bg-light-blue-gradient flex items-center justify-center">
                  <Image src={BadgeIcon1} alt="Target" width={33} height={32} />
                </div>
                <div className="w-13 h-13 p-3 shadow-[0px_6px_10px_-3px_rgba(0,0,0,0.1)] rounded-2xl bg-light-green-gradient flex items-center justify-center">
                  <Image src={BadgeIcon2} alt="Target" width={33} height={32} />
                </div>
                <div className="w-13 h-13 p-3 shadow-[0px_6px_10px_-3px_rgba(0,0,0,0.1)] rounded-2xl bg-light-orange-gradient flex items-center justify-center">
                  <Image src={BadgeIcon3} alt="Target" width={33} height={32} />
                </div>
                <div className="w-13 h-13 p-3 shadow-[0px_6px_10px_-3px_rgba(0,0,0,0.1)] rounded-2xl bg-light-purple-gradient flex items-center justify-center">
                  <Image src={BadgeIcon4} alt="Target" width={33} height={32} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Call to Action Button */}
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={onNext}
          className="bg-blue-color hover:bg-blue-color/90 text-white h-12 px-8 rounded-lg font-semibold text-base"
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
