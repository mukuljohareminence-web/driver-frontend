'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { AnimatedPage } from '@/components/AnimatedPage';
import { UserProfileCard } from '@/components/profile/UserProfileCard';
import { TierProgressCard } from '@/components/profile/TierProgressCard';
import { QuickActionsCard } from '@/components/profile/QuickActionsCard';
import { PerformanceOverviewCard } from '@/components/profile/PerformanceOverviewCard';
import { SummaryCards } from '@/components/profile/SummaryCards';
import { MonthlyPerformanceCard } from '@/components/profile/MonthlyPerformanceCard';
import { NotificationPreferencesCard } from '@/components/profile/NotificationPreferencesCard';
import { EditProfileModal } from '@/components/profile/EditProfileModal';

export default function ProfilePage(): React.JSX.Element {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: 'Alex Johnson',
    phoneNumber: '+1 (555) 123-4567',
    region: 'North Region',
    team: 'Team Alpha',
  });
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: true,
    achievements: true,
    leaderboard: false,
    performanceTips: true,
  });

  const monthlyData = [
    { month: 'Nov', orders: 78, points: 820 },
    { month: 'Dec', orders: 89, points: 950 },
    { month: 'Jan', orders: 67, points: 680 },
  ];

  const maxOrders = Math.max(...monthlyData.map((d) => d.orders));

  const handleNotificationChange = (
    key: keyof typeof notifications,
    value: boolean,
  ): void => {
    setNotifications({ ...notifications, [key]: value });
  };

  const handleSave = (): void => {
    // TODO: Save form data
    setIsEditModalOpen(false);
  };

  return (
    <AnimatedPage>
      <div className="space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 cursor-pointer text-sm text-black-1f font-medium hover:text-black-1a transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-[310px] lg:min-w-[310px] space-y-6">
            <UserProfileCard onEditClick={() => setIsEditModalOpen(true)} />
            <TierProgressCard />
            <QuickActionsCard />
          </div>

          {/* Right Column */}
          <div className="space-y-6 w-full lg:flex-1 lg:w-auto">
            <PerformanceOverviewCard />
            <SummaryCards />
            <MonthlyPerformanceCard
              monthlyData={monthlyData}
              maxOrders={maxOrders}
            />
            <NotificationPreferencesCard
              notifications={notifications}
              onNotificationChange={handleNotificationChange}
            />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        formData={formData}
        onFormDataChange={setFormData}
        onSave={handleSave}
      />
    </AnimatedPage>
  );
}
