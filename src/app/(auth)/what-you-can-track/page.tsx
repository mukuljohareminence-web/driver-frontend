'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Clock,
  CheckCircle,
  Package,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleGoToDashboard = (): void => {
    // TODO: Navigate to dashboard
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-black-1a">
            What You Can Track
          </h1>
          <p className="text-base text-gray-2">
            Monitor the metrics that matter most
          </p>
        </div>

        {/* Metric Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup On-Time Rate */}
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-black-1a">
                  Pickup On-Time Rate
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
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
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-black-1a">
                  Completion Rate
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
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
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                <Package className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-black-1a">
                  Orders Completed
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
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
          <Card className="border border-[#0000001A] bg-white rounded-[14px] p-6 shadow-sm">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-black-1a">
                  AI Performance Insights
                </h3>
                <p className="text-sm text-gray-2 font-normal leading-relaxed">
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
        <Card className="border border-[#0000001A] bg-gradient-to-r from-green-50 to-emerald-50 rounded-[14px] p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-yellow-600" strokeWidth={2} />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-base font-semibold text-black-1a">Pro Tip</h3>
              <p className="text-sm text-gray-2 font-normal leading-relaxed">
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
            onClick={handleGoToDashboard}
            className="bg-blue-color hover:bg-blue-color/90 text-white h-12 px-8 rounded-lg font-semibold text-base"
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-color"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
