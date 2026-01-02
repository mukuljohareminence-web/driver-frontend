'use client';

import React from 'react';
import { Card } from '@/shared/ui/card';
import { type Driver } from './types';
import { getTierColor, getTrendIcon } from './utils';

interface RankingsTableProps {
  drivers: Driver[];
  selectedPeriod: string;
}

export function RankingsTable({
  drivers,
  selectedPeriod,
}: RankingsTableProps): React.JSX.Element {
  return (
    <div className="space-y-4 bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-6">
      <div>
        <h2 className="text-base font-medium text-black-1f">Full Rankings</h2>
        <p className="text-base font-normal text-gray">
          Complete leaderboard for {selectedPeriod}
        </p>
      </div>

      <Card className="border-none rounded-[14px] overflow-hidden">
        <div className="overflow-x-auto -mx-6 sm:mx-0">
          <table className="w-full min-w-[600px] sm:min-w-0">
            <thead className="bg-[#F3F4F6] rounded-[14px]">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Rank
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Driver
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Tier
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Orders
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Points
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {drivers.map((driver) => (
                <tr
                  key={driver.id}
                  className={
                    driver.isCurrentUser ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-medium text-gray">
                      #{driver.rank}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-gradient flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                        {driver.initials}
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs sm:text-sm font-normal text-black-1f truncate">
                          {driver.name}
                        </span>
                        {driver.isCurrentUser && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-xs font-medium shrink-0">
                            You
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-normal ${getTierColor(
                        driver.tier,
                      )}`}
                    >
                      {driver.tier}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-normal text-black-1f">
                      {driver.orders.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="text-sm sm:text-base font-normal text-black-1f">
                      {driver.points.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    {getTrendIcon(driver.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
