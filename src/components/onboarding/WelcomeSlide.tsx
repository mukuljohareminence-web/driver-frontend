'use client';

import React from 'react';
import { Trophy, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

interface WelcomeSlideProps {
  onNext: () => void;
}

export function WelcomeSlide({ onNext }: WelcomeSlideProps): React.JSX.Element {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 rounded-xl bg-green-blue-gradient shadow-lg flex items-center justify-center">
          <Trophy className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-black-1f">
            Welcome to Driver Rewards!
          </h1>
          <p className="text-xl font-normal text-gray max-w-[490px] mx-auto">
            Track your performance, earn points, and compete with other drivers
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Earn Points Card */}
        <Card className="border-none bg-white rounded-[16px] px-6 pb-6 pt-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-[16px] bg-blue-100 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-color" strokeWidth={2} />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold text-black-1f mb-2">
                Earn Points
              </h3>
              <p className="text-sm text-gray font-normal leading-relaxed">
                Complete deliveries on-time and earn points for every success
              </p>
            </div>
          </div>
        </Card>

        {/* Climb Tiers Card */}
        <Card className="border-none bg-white rounded-[16px] px-6 pb-6 pt-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-[16px] bg-green-100 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-[#10B981]" strokeWidth={2} />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold text-black-1f mb-2">
                Climb Tiers
              </h3>
              <p className="text-sm text-gray font-normal leading-relaxed">
                Progress from Bronze to Silver to Gold and unlock rewards
              </p>
            </div>
          </div>
        </Card>

        {/* Win Badges Card */}
        <Card className="border-none bg-white rounded-[16px] px-6 pb-6 pt-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-[16px] bg-orange-100 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#FE9A00]" strokeWidth={2} />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold text-black-1f mb-2">
                Win Badges
              </h3>
              <p className="text-sm text-gray font-normal leading-relaxed">
                Unlock achievements and showcase your driving excellence
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Call to Action Button */}
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={onNext}
          className="bg-blue-color hover:bg-blue-color/90 text-white h-[56px]  p-4 rounded-[10px] font-medium text-base"
        >
          Let&apos;s Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
