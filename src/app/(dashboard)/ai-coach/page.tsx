'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AnimatedPage } from '@/components/AnimatedPage';
import LeftGrayArrow from '@/assets/svg/leftGrayArrow';
import { GreatMomentumCard } from '@/components/ai-coach/GreatMomentumCard';
import { PerformanceInsights } from '@/components/ai-coach/PerformanceInsights';
import { ActionableRecommendations } from '@/components/ai-coach/ActionableRecommendations';
import { WeeklyGoalCard } from '@/components/ai-coach/WeeklyGoalCard';
import { NextMilestoneCard } from '@/components/ai-coach/NextMilestoneCard';
import { ThisWeekSummaryCard } from '@/components/ai-coach/ThisWeekSummaryCard';

export default function AICoachPage(): React.JSX.Element {
  const router = useRouter();

  return (
    <AnimatedPage>
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="space-y-2">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 cursor-pointer  transition-colors"
          >
            <LeftGrayArrow />
            <span className="text-sm font-medium text-black-1f">
              {' '}
              Back to Dashboard
            </span>
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-black-1f">
              AI Performance Coach
            </h1>
            <p className="text-base font-normal text-gray mt-1">
              Personalized insights to help you improve
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6">
          {/* Left Column - Performance Insights */}
          <div className="w-full lg:flex-1 lg:w-auto">
            <GreatMomentumCard />
            <PerformanceInsights />
            <ActionableRecommendations />
          </div>
          {/* Right Column */}
          <div className="space-y-6 w-full lg:w-[300px] lg:min-w-[300px] lg:shrink-0">
            <WeeklyGoalCard />
            <NextMilestoneCard />
            <ThisWeekSummaryCard />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
