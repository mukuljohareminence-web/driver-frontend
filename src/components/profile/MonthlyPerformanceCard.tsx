'use client';

import React from 'react';
import { Card } from '@/shared/ui/card';

interface MonthlyData {
  month: string;
  orders: number;
  points: number;
}

interface MonthlyPerformanceCardProps {
  monthlyData: MonthlyData[];
  maxOrders: number;
}

export function MonthlyPerformanceCard({
  monthlyData,
  maxOrders,
}: MonthlyPerformanceCardProps): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
      <div className="mb-4">
        <h3 className="text-base font-medium text-black-1a">
          Monthly Performance
        </h3>
        <p className="text-base font-normal text-gray mt-3">
          Last 3 months activity
        </p>
      </div>
      <div className="space-y-4">
        {monthlyData.map((data) => (
          <div
            key={data.month}
            className="space-y-2 flex items-center justify-between gap-4"
          >
            <div className="flex items-center justify-start min-w-12">
              <span className="font-medium text-gray text-sm">
                {data.month}
              </span>
            </div>
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray font-normal text-sm">Orders</span>
                <span className="text-black-1f text-sm font-medium">
                  {data.orders}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-blue-gradient rounded-full"
                  style={{
                    width: `${(data.orders / maxOrders) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray font-normal text-sm">Points</span>
                <span className="text-blue-color text-sm font-medium">
                  {data.points}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
