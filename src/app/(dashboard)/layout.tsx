'use client';

import React from 'react';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import ErrorBoundary from '@/processes/ErrorBoundary';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-light-gray-color">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden xl:block xl:w-64 bg-card shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border-r border-[#E5E7EB80] relative z-50">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 w-64 bg-card shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] border-r border-[#E5E7EB80] z-50 xl:hidden">
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </>
        )}

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden w-full">
          <div className="sticky top-0 z-20">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>
          <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
        </div>
      </div>
    </div>
  );
}
