'use client';

import React, { Suspense } from 'react';

export default function SuspenseBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}): React.JSX.Element {
  return (
    <Suspense
      fallback={
        fallback ?? (
          <div className="p-8 text-sm text-muted-foreground">
            // TODO: provide a loading fallback
          </div>
        )
      }
    >
      {children}
    </Suspense>
  );
}
