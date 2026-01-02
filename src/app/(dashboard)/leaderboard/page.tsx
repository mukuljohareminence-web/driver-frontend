'use client';

import React from 'react';
import { AnimatedPage } from '@/components/AnimatedPage';
import { topDrivers, allDrivers } from '@/components/leaderboard/driverData';
import { FilterButtons } from '@/components/leaderboard/FilterButtons';
import { Top3Drivers } from '@/components/leaderboard/Top3Drivers';
import { RankingsTable } from '@/components/leaderboard/RankingsTable';

export default function LeaderboardPage(): React.JSX.Element {
  const [selectedPeriod, setSelectedPeriod] = React.useState('weekly');

  return (
    <AnimatedPage>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-black-1f">Leaderboard</h1>
          <p className="mt-1 text-base text-gray font-normal">
            See how you rank against other drivers
          </p>
        </div>

        {/* Filter Buttons */}
        <FilterButtons
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />

        {/* Top 3 Drivers */}
        <Top3Drivers topDrivers={topDrivers} />

        {/* Full Rankings */}
        <RankingsTable drivers={allDrivers} selectedPeriod={selectedPeriod} />
      </div>
    </AnimatedPage>
  );
}
