'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import type { FormErrorBoxProps } from './interface';

export function FormErrorBox({
  title,
  description,
  className,
  timeout = 4000,
}: FormErrorBoxProps): React.JSX.Element | null {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), timeout);
    return (): void => clearTimeout(timer);
  }, [timeout]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={cn(
        'w-full flex items-start gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-red-800 shadow-sm transition-opacity duration-700 ease-in-out opacity-100 animate-fade-in',
        className,
      )}
    >
      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
      <div className="flex flex-col">
        <h4 className="font-semibold text-red-700">{title}</h4>
        {description && (
          <p className="text-sm text-red-700 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
