'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  Bell,
  ChevronDown,
  Trophy,
  Sparkles,
  MessageCircle,
  User,
  Settings,
  LogOut,
  Menu,
} from 'lucide-react';
import { Input } from '@/shared/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/shared/ui/dropdown-menu';
import { useAppMutation } from '@/features/auth/hooks/useAppMutation';
import { logoutRequest } from '@/features/auth/api';
import { successToast } from '@/shared/lib/toast';
import type { AuthResponseTypes } from '@/features/auth/schema/responses';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps): React.JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const logoutMutation = useAppMutation<AuthResponseTypes['MessageResponse']>({
    mutationFn: logoutRequest,
    skipDefaultErrorHandling: true,
    onSuccess: (): void => {
      successToast('Logged out successfully');
      router.replace('/login');
    },
  });

  const getPageTitle = (): string => {
    if (pathname === '/leaderboard') return 'Leaderboard';
    if (pathname === '/ai-coach') return 'AI Coach';
    if (pathname === '/achievements') return 'Achievements';
    if (pathname === '/profile') return 'Profile & Settings';
    return 'Dashboard';
  };
  const notifications = [
    {
      id: 1,
      icon: Trophy,
      iconColor: 'text-[#FE9A00]',
      iconBg: 'bg-[#FE9A001A]',
      message: "You unlocked 'Speed Demon' badge!",
      time: '5 min ago',
      unread: true,
    },
    {
      id: 2,
      icon: Sparkles,
      iconColor: 'text-[#3B82F6]',
      iconBg: 'bg-[#3B82F61A]',
      message: 'AI Coach has new insights for you',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      icon: MessageCircle,
      iconColor: 'text-[#10B981]',
      iconBg: 'bg-[#10B9811A]',
      message: 'You moved up 3 spots on the leaderboard',
      time: '2 hours ago',
      unread: true,
    },
  ];

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-1 border-b bg-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="xl:hidden p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-black-1f" />
        </button>

        {/* Title */}
        <h1 className="text-lg sm:text-xl font-semibold text-black-1f font-inter truncate">
          {getPageTitle()}
        </h1>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 max-w-md w-full xl:min-w-[400px]">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-2" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-[#F3F4F680] border-none rounded-[10px] w-full"
            />
          </div>
        </div>
      </div>
      {/* Right Side - Notifications and User */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 outline-none hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <Bell className="w-5 h-5 text-black-1f" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full">
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#EF4444] rounded-full animate-ping"></span>
              </span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-80 p-0 bg-white border border-[#E5E7EB] rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
          >
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-black-1a">
                Notifications
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification): React.JSX.Element => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className="flex items-start gap-3 p-4 hover:bg-[#3B82F60D] border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-2xl ${notification.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon
                        className={`w-5 h-5 ${notification.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-normal text-black-1a mb-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray font-normal">
                        {notification.time}
                      </p>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-blue-color shrink-0 mt-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center cursor-pointer gap-2 sm:gap-3 hover:bg-gray-50 px-2 sm:px-3 py-2 rounded-lg transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-blue-gradient flex items-center justify-center text-white font-semibold text-sm sm:text-base">
              JD
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-black-1f">John Driver</p>
              <p className="text-xs text-gray font-medium">ID: #DR-1234</p>
            </div>
            <ChevronDown className="hidden sm:block w-4 h-4 text-gray" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="px-2 pb-2.5 pt-1.5 border-b border-gray-200 mb-1">
              <p className="text-sm font-medium text-black-1a">John Driver</p>
              <p className="text-xs text-gray-2">john.driver@email.com</p>
            </div>
            <DropdownMenuItem
              onClick={(): void => router.push('/profile')}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(): void => router.push('/profile')}
              className="cursor-pointer"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              variant="destructive"
              onSelect={(event): void => {
                event.preventDefault();
                if (!logoutMutation.isPending) logoutMutation.mutate();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
