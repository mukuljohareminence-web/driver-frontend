'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/shared/ui/card';
import { cn } from '@/shared/lib/utils';
import type { AuthCardProps } from './interface';

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps): React.JSX.Element {
  return (
    <Card
      className={cn(
        'w-full max-w-md border border-blue-200 shadow-lg bg-white',
        className,
      )}
    >
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-semibold text-blue-600">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-blue-800">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-6 mt-2">
        {children}
      </CardContent>

      {footer && (
        <CardFooter className="flex justify-center">{footer}</CardFooter>
      )}
    </Card>
  );
}
