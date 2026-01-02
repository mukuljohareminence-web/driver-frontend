'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Trophy, Award, Sparkles, X } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps): React.JSX.Element {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: Award, label: 'Achievements', path: '/achievements' },
    { icon: Sparkles, label: 'AI Coach', path: '/ai-coach' },
  ];

  return (
    <aside className="flex flex-col h-full">
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between gap-3 px-4 mb-4 border-b border-[#E5E7EB80] py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue1-gradient flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="block">
            <span className="block text-gray text-xs font-medium">Driver</span>{' '}
            <span className="block text-black-1f text-base font-semibold">
              Rewards
            </span>
          </span>
        </div>
        {/* Close Button - Only visible on mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              href={item.path}
              key={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-2xl font-inter text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#3B82F61A] text-blue-color shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]'
                  : 'text-gray hover:bg-[#3B82F61A] hover:text-blue-color',
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Version */}
      <div className="mt-auto p-4 border-t text-center border-[#E5E7EB80]">
        <p className="text-xs font-medium text-gray">Version 1.0.0</p>
      </div>
    </aside>
  );
}
