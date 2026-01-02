'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Clock,
  CheckCircle,
  Package,
  Trophy,
  TrendingUp,
  Zap,
  Gift,
  Sparkles,
} from 'lucide-react';
import { AnimatedPage } from '@/components/AnimatedPage';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import ArrowRightIcon from '@/assets/svg/arrowRightIcon';
import GrothWhiteIcon from '@/assets/svg/grothWhiteIcon';
import ProTipsIcon from '@/assets/svg/proTipsIcon';
import StarWhiteIcon from '@/assets/svg/starWhiteIcon';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import type { SafeUser } from '@/features/auth/schema/responses/SafeUserSchema';

export default function DashboardHome(): React.JSX.Element {
  const router = useRouter();
  const loggedInUser = useSelector(
    (state: RootState): SafeUser | null => state.user.user,
  );

  return (
    <AnimatedPage>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold text-black-1f">
            Dashboard
          </h1>
          <p className="mt-1 text-base font-normal font-inter text-gray">
            Welcome back, {loggedInUser?.name ?? 'Driver'}! Here&apos;s your
            performance overview.
          </p>
        </div>

        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pickup On-Time */}
          <Card className="border border-[#E5E7EB80] bg-lightBlueBox-gradient rounded-2xl p-6 shadow-[0_2px_8px_0px_rgba(59,130,246,0.08)]">
            <div className="flex items-center justify-start gap-2.5 mb-4">
              <div className="w-11 h-11 min-w-11 min-h-11 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-gradient flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm font-normal font-inter text-gray">
                PICKUP ON-TIME
              </p>
            </div>
            <div className="space-y-1 mt-4">
              <p className=" text-2xl md:text-3xl xl:text-4xl font-bold text-black-1f mb-0">
                94%
              </p>
              <div className="block">
                <span className="text-xs font-normal font-inter text-gray mb-1">
                  Target: 90%+
                </span>
                <div className="flex items-center gap-1 text-green-color text-xs">
                  <TrendingUp className="w-3 h-3 text-green-color" />
                  <span className="text-xs font-normal font-inter text-green-color">
                    +2% from last week
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Completion Rate */}
          <Card className="border border-[#E5E7EB80] bg-lightGreenBox-gradient rounded-2xl p-6 shadow-[0_2px_8px_0px_rgba(16,185,129,0.08)]">
            <div className="flex items-center justify-start gap-2.5 mb-4">
              <div className="w-11 h-11 min-w-11 min-h-11 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-green-gradient flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm font-normal font-inter text-gray">
                COMPLETION RATE
              </p>
            </div>
            <div className="space-y-1 mt-4">
              <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-black-1f mb-0">
                97%
              </p>
              <div className="block">
                <span className="text-xs font-normal font-inter text-gray mb-1">
                  Target: 95%+
                </span>
                <div className="flex items-center gap-1 text-green-color text-xs">
                  <TrendingUp className="w-3 h-3 text-green-color" />
                  <span className="text-xs font-normal font-inter text-green-color">
                    Excellent performance!
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Orders Completed */}
          <Card className="border border-[#E5E7EB80] bg-lightOrangeBox-gradient rounded-2xl p-6 shadow-[0_2px_8px_0px_rgba(245,158,11,0.08)]">
            <div className="flex items-center justify-start gap-2.5 mb-4">
              <div className="w-11 h-11 min-w-11 min-h-11 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-orange-gradient flex items-center justify-center">
                <Package className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm font-normal font-inter text-gray">
                ORDERS COMPLETED
              </p>
            </div>
            <div className="space-y-1 mt-4">
              <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-black-1f mb-0">
                234
              </p>
              <div className="block">
                <span className="text-xs font-normal font-inter text-gray mb-1 block">
                  This month
                </span>
                <span className="text-xs font-normal font-inter text-gray">
                  15 orders today
                </span>
              </div>
            </div>
          </Card>

          {/* Leaderboard Rank */}
          <Card className="border border-[#E5E7EB80] bg-lightPurpleBox-gradient rounded-2xl p-6 shadow-[0_2px_8px_0px_rgba(139,92,246,0.08)]">
            <div className="flex items-center justify-start gap-2.5 mb-4">
              <div className="w-11 h-11 min-w-11 min-h-11 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-purple-gradient flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-normal font-inter text-gray">
                LEADERBOARD RANK
              </p>
            </div>
            <div className="space-y-1 mt-4">
              <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-black-1f mb-0">
                #12
              </p>
              <div className="block">
                <span className="text-xs font-normal font-inter text-gray mb-1 block">
                  of 150 drivers
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="text-xs font-normal font-inter text-blue-color flex items-center gap-1"
            >
              View leaderboard <ArrowRightIcon />
            </Link>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left Column - Progress Section */}
          <div className="space-y-6 w-full lg:flex-1">
            {/* Your Progress */}
            <Card className="border border-[#E5E7EB80] bg-white rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <div className="bg-yourProgress-gradient rounded-tl-2xl flex items-center justify-between rounded-tr-2xl p-6">
                <div className="block">
                  <div className="flex items-center gap-2 mb-0">
                    <Trophy className="w-5 h-5 text-[#3B82F6]" />
                    <h2 className="text-base font-medium text-black-1f">
                      Your Progress
                    </h2>
                  </div>
                  <p className="text-base text-gray font-normal mb-0">
                    You&apos;re on track to reach Gold tier!
                  </p>
                </div>
                <span className="px-4 py-2 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-grayBox-gradient text-gray-700 text-xs font-medium">
                  <span className="text-white text-base font-semibold block">
                    Silver
                  </span>
                  <span className="text-xs font-medium text-white">
                    {' '}
                    Current Tier
                  </span>
                </span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-end justify-between mb-2">
                    <span className="block">
                      <span className="text-4xl font-semibold text-black-1f">
                        2,450
                      </span>{' '}
                      <span className="text-gray text-sm font-normal block">
                        of 5,000 points
                      </span>
                    </span>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-normal text-gray block">
                        Next tier
                      </span>
                      <span className="text-base font-semibold text-orange-color">
                        Gold
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-blue-gradient rounded-full"
                      style={{ width: '49%' }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray font-medium">
                      2,550 more points to reach Gold
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E7EB]">
                  <div className="text-center bg-[#F3F4F680] rounded-[12px] p-4">
                    <p className="text-2xl font-semibold text-black-1f">234</p>
                    <p className="text-xs text-gray font-medium">Orders</p>
                  </div>
                  <div className="text-center bg-[#F3F4F680] rounded-[12px] p-4">
                    <p className="text-2xl font-semibold text-black-1f">94%</p>
                    <p className="text-xs text-gray font-medium">On-Time</p>
                  </div>
                  <div className="text-center bg-[#F3F4F680] rounded-[12px] p-4">
                    <p className="text-2xl font-semibold text-black-1f">97%</p>
                    <p className="text-xs text-gray font-medium">Completed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="border border-[#E5E7EB80] bg-white rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-6">
              <div className="mb-4">
                <h2 className="text-base font-medium text-black-1f mb-0">
                  Recent Activity
                </h2>
                <p className="text-base font-normal text-gray mb-0">
                  Your latest achievements and milestones
                </p>
              </div>
              <div className="space-y-6 mt-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#10B9811A] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black-1f">
                      Earned 15 points for on-time delivery
                    </p>
                    <p className="text-xs text-gray font-normal">10 min ago</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold text-green-color">
                      +15
                    </span>{' '}
                    <span className="text-xs text-gray font-normal">
                      points
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FE9A001A] flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-[#FE9A00]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black-1f">
                      Unlocked &quot;Speed Demon&quot; badge
                    </p>
                    <p className="text-xs text-gray font-normal">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3B82F61A] flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black-1f">
                      You reached Silver tier!
                    </p>
                    <p className="text-xs text-gray font-normal">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#10B9811A] flex items-center justify-center shrink-0">
                    <Gift className="w-5 h-5 text-green-color" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black-1f">
                      Earned 20 points for daily streak
                    </p>
                    <p className="text-xs text-gray font-normal">1 day ago</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold text-green-color">
                      +20
                    </span>{' '}
                    <span className="text-xs text-gray font-normal">
                      points
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - AI Performance Coach */}
          <div className="space-y-6 w-full lg:min-w-[296px] lg:w-[296px] lg:flex-shrink-0">
            <Card
              style={{
                background: 'linear-gradient(0deg, #FAFBFC, #FAFBFC)',
                backgroundImage:
                  'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(16, 185, 129, 0.2) 100%)',
              }}
              className="border border-[#3B82F633] rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="text-base font-medium text-black-1f">
                  AI Performance Coach
                </h2>
              </div>
              <p className="text-base font-normal text-gray mb-6">
                Personalized insights for you
              </p>

              <div className="space-y-4">
                {/* Insight 1 */}
                <div className="p-4 bg-[#FFFFFFCC] rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 min-w-8 min-h-8 rounded-[12px] bg-green-gradient flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <GrothWhiteIcon />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black-1f mb-1">
                        Great momentum!🎉
                      </p>
                      <p className="text-xs text-gray font-normal">
                        Your completion rate improved by 3% this week. Keep up
                        the excellent work!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="p-4 bg-[#FFFFFFCC] rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 min-w-8 min-h-8 rounded-[12px] bg-blue-gradient flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <ProTipsIcon />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black-1f mb-1">
                        Pro Tip
                      </p>
                      <p className="text-xs text-gray font-normal">
                        Complete 5 more orders this week to unlock the
                        &quot;Speed Demon&quot; badge.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight 3 */}
                <div className="p-4 bg-[#FFFFFFCC] rounded-2xl shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#E5E7EB80]">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 min-w-8 min-h-8 rounded-[12px] bg-orange-gradient flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                      <StarWhiteIcon />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black-1f mb-2">
                        This Week&apos;s Goal
                      </p>
                      <p className="text-xs text-gray font-normal mb-3">
                        Maintain 95%+ on-time rate to earn bonus points
                      </p>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-blue-gradient rounded-full"
                          style={{ width: '72%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray font-normal mt-2">
                        72% complete
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={(): void => router.push('/ai-coach')}
                className="w-full bg-blue-color text-white mt-6 rounded-[10px] text-sm font-medium hover:bg-blue-color/90 hover:text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
              >
                View All Insights
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
