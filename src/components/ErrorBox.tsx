import { cn } from '@/shared/lib/utils';
import type { AxiosResponse } from 'axios';
import type { ErrorResponse } from '@/shared/types/api-response';

export default function ErrorBox({
  response,
}: {
  response?: AxiosResponse<ErrorResponse> | undefined;
}): React.JSX.Element {
  return (
    <div
      className={cn(
        'w-full rounded-md border border-red-500 bg-red-50 p-4 text-center mt-4 mb-4',
        'text-red-600 text-xl font-semibold',
      )}
    >
      {response?.data?.message ?? 'Something went wrong'}
    </div>
  );
}
