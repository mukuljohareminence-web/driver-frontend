'use client';

import React from 'react';
import { AnimatedPage } from '@/components/AnimatedPage';
import { badges } from '@/components/achievements/badgeData';
import { SummaryCards } from '@/components/achievements/SummaryCards';
import { FilterTabs } from '@/components/achievements/FilterTabs';
import { BadgeCard } from '@/components/achievements/BadgeCard';
import { BadgeDetailModal } from '@/components/achievements/BadgeDetailModal';
import { type Badge } from '@/components/achievements/types';

export default function AchievementsPage(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = React.useState<
    'all' | 'earned' | 'locked'
  >('all');
  const [selectedBadge, setSelectedBadge] = React.useState<Badge | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const earnedCount = badges.filter((b) => b.earned).length;
  const lockedCount = badges.filter((b) => !b.earned).length;
  const totalCount = badges.length;
  const completionRate = Math.round((earnedCount / totalCount) * 100);

  const filteredBadges =
    activeFilter === 'all'
      ? badges
      : activeFilter === 'earned'
        ? badges.filter((b) => b.earned)
        : badges.filter((b) => !b.earned);

  const handleBadgeClick = (badge: Badge): void => {
    setSelectedBadge(badge);
    setIsModalOpen(true);
  };

  return (
    <AnimatedPage>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-black-1f">
            Achievements & Badges
          </h1>
          <p className="mt-1 text-base text-gray font-normal">
            Track your progress and unlock exclusive badges
          </p>
        </div>

        {/* Summary Cards */}
        <SummaryCards
          earnedCount={earnedCount}
          totalCount={totalCount}
          completionRate={completionRate}
          lockedCount={lockedCount}
        />

        {/* Filter Tabs */}
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          totalCount={totalCount}
          earnedCount={earnedCount}
          lockedCount={lockedCount}
        />

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBadges.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              onClick={() => handleBadgeClick(badge)}
            />
          ))}
        </div>
      </div>

      {/* Badge Detail Modal */}
      <BadgeDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        badge={selectedBadge}
      />
    </AnimatedPage>
  );
}
