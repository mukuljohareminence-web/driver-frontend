'use client';

import React from 'react';
import { Card } from '@/shared/ui/card';
import { Switch } from '@/components/profile/Switch';

interface NotificationPreferencesCardProps {
  notifications: {
    email: boolean;
    sms: boolean;
    achievements: boolean;
    leaderboard: boolean;
    performanceTips: boolean;
  };
  onNotificationChange: (
    key: keyof NotificationPreferencesCardProps['notifications'],
    value: boolean,
  ) => void;
}

export function NotificationPreferencesCard({
  notifications,
  onNotificationChange,
}: NotificationPreferencesCardProps): React.JSX.Element {
  return (
    <Card className="border border-[#E5E7EB] bg-white rounded-2xl p-6">
      <div className="mb-4">
        <h3 className="text-base font-medium text-black-1a">
          Notification Preferences
        </h3>
        <p className="text-base text-gray font-normal mt-3">
          Manage how you receive updates
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
          <div>
            <p className="text-sm font-normal text-black-1f">
              Email Notifications
            </p>
            <p className="text-xs font-normal text-gray">
              Receive updates via email
            </p>
          </div>
          <Switch
            checked={notifications.email}
            onCheckedChange={(checked) =>
              onNotificationChange('email', checked)
            }
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
          <div>
            <p className="text-sm font-normal text-black-1f">SMS Alerts</p>
            <p className="text-xs font-normal text-gray">
              Get text message alerts
            </p>
          </div>
          <Switch
            checked={notifications.sms}
            onCheckedChange={(checked) => onNotificationChange('sms', checked)}
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
          <div>
            <p className="text-sm font-normal text-black-1f">
              Achievement Notifications
            </p>
            <p className="text-xs font-normal text-gray">
              Alert when you earn badges
            </p>
          </div>
          <Switch
            checked={notifications.achievements}
            onCheckedChange={(checked) =>
              onNotificationChange('achievements', checked)
            }
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4  ">
          <div>
            <p className="text-sm font-normal text-black-1f">
              Leaderboard Updates
            </p>
            <p className="text-xs font-normal text-gray">
              Weekly ranking summaries
            </p>
          </div>
          <Switch
            checked={notifications.leaderboard}
            onCheckedChange={(checked) =>
              onNotificationChange('leaderboard', checked)
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-normal text-black-1f">
              Performance Tips
            </p>
            <p className="text-xs font-normal text-gray">
              AI coaching suggestions
            </p>
          </div>
          <Switch
            checked={notifications.performanceTips}
            onCheckedChange={(checked) =>
              onNotificationChange('performanceTips', checked)
            }
          />
        </div>
      </div>
    </Card>
  );
}
