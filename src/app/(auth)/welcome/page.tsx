'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleGetStarted = (): void => {
    router.push('/how-it-works');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 rounded-xl bg-green-blue-gradient shadow-lg flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-black-1a">
              Welcome to Driver Rewards!
            </h1>
            <p className="text-base text-gray-2 max-w-md mx-auto">
              Track your performance, earn points, and compete with other
              drivers
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Earn Points Card */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-black-1a">
                  Earn Points
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Complete deliveries on-time and earn points for every success
                </p>
              </div>
            </div>
          </Card>

          {/* Climb Tiers Card */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-green-600" strokeWidth={2} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-black-1a">
                  Climb Tiers
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Progress from Bronze to Silver to Gold and unlock rewards
                </p>
              </div>
            </div>
          </Card>

          {/* Win Badges Card */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col items-start space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" strokeWidth={2} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-black-1a">
                  Win Badges
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
                  Unlock achievements and showcase your driving excellence
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={handleGetStarted}
            className="bg-blue-color hover:bg-blue-color/90 text-white h-12 px-8 rounded-lg font-semibold text-base"
          >
            Let&apos;s Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-color"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
