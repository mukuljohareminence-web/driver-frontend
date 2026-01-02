'use client';

import React from 'react';
import { Package, Clock, CheckCircle, Star } from 'lucide-react';
import { Card } from '@/shared/ui/card';

export function PerformanceOverviewCard(): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-[14px] p-6">
      <div className="mb-4">
        <h3 className="text-base font-medium text-black-1a mb-3">
          Performance Overview
        </h3>
        <p className="text-base font-normal text-gray">
          Your all-time statistics
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center">
          <span className="w-12 h-12 min-w-12 min-h-12 mx-auto shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-purple-gradient flex items-center justify-center">
            {' '}
            <Package className="w-6 h-6 text-white mx-auto" />
          </span>
          <p className="text-2xl font-medium text-black-1a mt-2">234</p>
          <p className="text-xs text-gray font-normal mt-0">Total Orders</p>
        </div>
        <div className="text-center">
          <span className="w-12 h-12 min-w-12 min-h-12 mx-auto shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-gradient flex items-center justify-center">
            {' '}
            <Clock className="w-6 h-6 text-white mx-auto mb-0" />
          </span>

          <p className="text-2xl font-medium text-black-1a mt-2">94%</p>
          <p className="text-xs text-gray font-normal mt-0">On-Time Rate</p>
        </div>
        <div className="text-center ">
          <span className="w-12 h-12 min-w-12 min-h-12 mx-auto shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-green-gradient flex items-center justify-center">
            {' '}
            <CheckCircle className="w-6 h-6 text-white mx-auto mb-0" />
          </span>
          <p className="text-2xl font-medium text-black-1a mt-2">97%</p>
          <p className="text-xs text-gray font-normal mt-0">Completion Rate</p>
        </div>
        <div className="text-center">
          <span className="w-12 h-12 min-w-12 min-h-12 mx-auto shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-2xl bg-orange-gradient flex items-center justify-center">
            {' '}
            <Star className="w-6 h-6 text-white mx-auto mb-0" />
          </span>
          <p className="text-2xl font-medium text-black-1a mt-2">4.8</p>
          <p className="text-xs text-gray font-normal mt-0">Avg Rating</p>
        </div>
      </div>
    </Card>
  );
}
