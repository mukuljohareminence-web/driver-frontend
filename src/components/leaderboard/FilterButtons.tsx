'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface FilterButtonsProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export function FilterButtons({
  selectedPeriod,
  onPeriodChange,
}: FilterButtonsProps): React.JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-4 sm:gap-3 bg-white shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] rounded-2xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 flex-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#F3F4F680] rounded-2xl p-1">
          <Button
            variant={selectedPeriod === 'daily' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPeriodChange('daily')}
            className={`hover:bg-blue-color rounded-[12px] hover:text-white text-xs sm:text-sm font-medium flex-1 sm:flex-initial ${selectedPeriod === 'daily' ? 'bg-blue-color text-white  hover:bg-blue-color' : 'border-none bg-transparent shadow-none '}`}
          >
            Daily
          </Button>
          <Button
            variant={selectedPeriod === 'weekly' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPeriodChange('weekly')}
            className={`hover:bg-blue-color rounded-[12px] hover:text-white text-xs sm:text-sm font-medium flex-1 sm:flex-initial ${selectedPeriod === 'weekly' ? 'bg-blue-color text-white  hover:bg-blue-color' : 'border-none bg-transparent shadow-none '}`}
          >
            Weekly
          </Button>
          <Button
            variant={selectedPeriod === 'monthly' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPeriodChange('monthly')}
            className={`hover:bg-blue-color rounded-[12px] hover:text-white text-xs sm:text-sm font-medium flex-1 sm:flex-initial ${selectedPeriod === 'monthly' ? 'bg-blue-color text-white hover:bg-blue-color' : 'border-none bg-transparent shadow-none '}`}
          >
            Monthly
          </Button>
          <Button
            variant={selectedPeriod === 'all-time' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPeriodChange('all-time')}
            className={`hover:bg-blue-color rounded-[12px] hover:text-white text-xs sm:text-sm font-medium flex-1 sm:flex-initial ${selectedPeriod === 'all-time' ? 'bg-blue-color text-white hover:bg-blue-color' : 'border-none bg-transparent shadow-none '}`}
          >
            All-Time
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="all-regions">
            <SelectTrigger className="w-full sm:w-40 h-9 text-sm font-medium text-black-1f rounded-[12px] bg-[#FAFBFC]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-regions">All Regions</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-teams">
            <SelectTrigger className="w-full sm:w-40 h-9 text-sm font-medium text-black-1f rounded-[12px] bg-[#FAFBFC]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-teams">All Teams</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 px-2.5 bg-[#FAFBFC] h-9 rounded-[10px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] w-full sm:w-auto"
      >
        <Search className="w-4 h-4" />
        Find Me
      </Button>
    </div>
  );
}
