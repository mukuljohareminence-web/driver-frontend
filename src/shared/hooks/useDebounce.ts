'use client';

import { useEffect, useState } from 'react';
import { DebounceEnum } from './interface';

export function useDebounce<T>(value: T, delay = DebounceEnum.delayInMs): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect((): (() => void) => {
    const timer = setTimeout((): void => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
