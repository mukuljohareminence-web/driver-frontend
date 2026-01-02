'use client';

import React from 'react';
import Image from 'next/image';
import McDriverIcon from '@/assets/images/icons/mcDriveIcon.png';
import SarahDriverIcon from '@/assets/images/icons/smDriverIcon.png';
import EmilyDriverIcon from '@/assets/images/icons/erDriverIcon.png';
import GoldIcon from '@/assets/images/icons/goldIcon.png';
import { type TopDriver } from './types';

interface Top3DriversProps {
  topDrivers: TopDriver[];
}

export function Top3Drivers({
  topDrivers,
}: Top3DriversProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      {/* Rank 2 */}
      <div className="flex flex-col items-center space-y-3 order-2 md:order-1">
        <div className=" flex items-center justify-center relative">
          <div className="w-20 h-20 rounded-full bg-orange-Box-gradient shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-base font-semibold text-white">
              {topDrivers[0]?.initials || ''}
            </span>
          </div>
          <div className="absolute -top-3 -right-2 transform ">
            <Image
              src={McDriverIcon}
              alt="McDriverIcon"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-base font-medium text-black-1f">
            {topDrivers[0]?.name || ''}
          </p>
          <p className="text-xs text-[#71717A] font-medium w-[50px] mx-auto bg-[#C0C0C026] rounded-full px-2 py-1">
            {topDrivers[0]?.tier || ''}
          </p>
          <div>
            <p className="text-3xl font-bold text-black-1f">
              {topDrivers[0]?.points?.toLocaleString() || ''}
            </p>
            <span className="text-xs text-gray font-medium">points</span>
          </div>
        </div>
      </div>

      {/* Rank 1 */}
      <div className="flex flex-col items-center space-y-3 order-1 md:order-2">
        <div className="flex flex-col items-center justify-center">
          <Image src={GoldIcon} alt="icon" />
          <div className=" flex flex-col items-center justify-center relative">
            <div className="w-24 h-24 rounded-full bg-orange-Box-gradient shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <span className="text-base font-semibold text-white">
                {topDrivers[1]?.initials || ''}
              </span>
            </div>
            <div className="absolute -top-3 -right-2 transform ">
              <Image
                src={SarahDriverIcon}
                alt="SarahDriverIcon"
                width={65}
                height={65}
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-base font-semibold text-black-1f">
            {topDrivers[1]?.name || ''}
          </p>
          <p className="text-xs text-[#CA8A04] font-medium w-[50px] mx-auto bg-[#FFD70026] rounded-full px-2 py-1">
            {topDrivers[1]?.tier || ''}
          </p>
          <div>
            <p className="text-3xl font-bold text-black-1f">
              {topDrivers[1]?.points?.toLocaleString() || ''}{' '}
            </p>
            <span className="text-xs text-gray font-medium">points</span>
          </div>
        </div>
      </div>

      {/* Rank 3 */}
      <div className="flex flex-col items-center space-y-3 order-3">
        <div className="flex items-center justify-center relative">
          <div className="w-20 h-20 rounded-full bg-bronze-Box-gradient shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-base font-semibold text-white">
              {topDrivers[2]?.initials || ''}
            </span>
          </div>
          <div className="absolute -top-3 -right-2 transform ">
            <Image
              src={EmilyDriverIcon}
              alt="EmilyDriverIcon"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-base font-semibold text-black-1f">
            {topDrivers[2]?.name || ''}
          </p>
          <p className="text-xs text-[#92400E] font-medium w-[56px] mx-auto bg-[#CD7F3226] rounded-full px-2 py-1">
            {topDrivers[2]?.tier || ''}
          </p>
          <div>
            <p className="text-3xl font-bold text-black-1f">
              {topDrivers[2]?.points?.toLocaleString() || ''}
            </p>
            <span className="text-xs text-gray font-medium">points</span>
          </div>
        </div>
      </div>
    </div>
  );
}
