'use client';

import React from 'react';

interface FilterTabsProps {
  activeFilter: 'all' | 'earned' | 'locked';
  onFilterChange: (filter: 'all' | 'earned' | 'locked') => void;
  totalCount: number;
  earnedCount: number;
  lockedCount: number;
}

export function FilterTabs({
  activeFilter,
  onFilterChange,
  totalCount,
  earnedCount,
  lockedCount,
}: FilterTabsProps): React.JSX.Element {
  return (
    <div className="border border-[#E5E7EB] bg-white rounded-2xl p-5 xl:p-7">
      <div className="inline-flex items-center bg-[#F3F4F6] rounded-2xl p-1 gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-6 xl:px-12 py-2 rounded-2xl text-sm cursor-pointer text-black-1f font-medium transition-colors ${
            activeFilter === 'all'
              ? 'bg-white '
              : 'bg-transparent  hover:bg-white'
          }`}
        >
          All ({totalCount})
        </button>
        <button
          onClick={() => onFilterChange('earned')}
          className={`px-6 xl:px-12 py-2 rounded-2xl text-sm cursor-pointer text-black-1f font-medium transition-colors ${
            activeFilter === 'earned'
              ? 'bg-white '
              : 'bg-transparent  hover:bg-white'
          }`}
        >
          Earned ({earnedCount})
        </button>
        <button
          onClick={() => onFilterChange('locked')}
          className={`px-6 xl:px-12 py-2 rounded-2xl text-sm cursor-pointer text-black-1f font-medium transition-colors ${
            activeFilter === 'locked'
              ? 'bg-white '
              : 'bg-transparent  hover:bg-white'
          }`}
        >
          Locked ({lockedCount})
        </button>
      </div>
    </div>
  );
}
