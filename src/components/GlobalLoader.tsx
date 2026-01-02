'use client';

import React from 'react';
import { Spinner } from '@/shared/ui/spinner';
import { cn } from '@/shared/lib/utils';
import type { GlobalLoaderProps } from './interface';

export function GlobalLoader({
  fullScreen = false,
  size = 'size-10',
  variant = 'bars',
}: GlobalLoaderProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-white/70',
        fullScreen ? 'fixed inset-0 backdrop-blur-sm z-[9999]' : 'w-full p-20',
      )}
    >
      <Spinner variant={variant} className={size} />
    </div>
  );
}
