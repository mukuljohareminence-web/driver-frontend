'use client';

import React from 'react';
import { Bell, Shield, HelpCircle } from 'lucide-react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

export function QuickActionsCard(): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
      <h3 className="text-base font-semibold text-black-1a mb-4">
        Quick Actions
      </h3>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full rounded-[10px] text-sm font-medium text-black-1f justify-start bg-[#FAFBFC] gap-3 border-[#E5E7EB] shadow-none"
        >
          <Bell className="w-5 h-5 text-black-1f" />
          Notifications
        </Button>
        <Button
          variant="outline"
          className="w-full rounded-[10px] text-sm font-medium text-black-1f justify-start bg-[#FAFBFC] gap-3 border-[#E5E7EB] shadow-none"
        >
          <Shield className="w-5 h-5 text-black-1f" />
          Privacy & Security
        </Button>
        <Button
          variant="outline"
          className="w-full rounded-[10px] text-sm font-medium text-black-1f justify-start bg-[#FAFBFC] gap-3 border-[#E5E7EB]  shadow-none"
        >
          <HelpCircle className="w-5 h-5 text-black-1f" />
          Help & Support
        </Button>
      </div>
    </Card>
  );
}
