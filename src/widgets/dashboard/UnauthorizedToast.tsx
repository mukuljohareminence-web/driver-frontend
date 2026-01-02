'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { errorToast } from '@/shared/lib/toast';

export default function UnauthorizedToast(): null {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasShownToast = React.useRef(false);

  React.useEffect((): void => {
    const unauthorized = searchParams.get('unauthorized');

    if (unauthorized === 'true' && !hasShownToast.current) {
      hasShownToast.current = true;
      errorToast('You are not authorized to access this page.');

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('unauthorized');
      router.replace(newUrl.toString());
    }
  }, [searchParams, router]);

  return null;
}
