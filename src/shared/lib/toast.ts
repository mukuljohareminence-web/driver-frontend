'use client';
import { toast } from 'sonner';

const baseToastClass =
  'text-3xl font-semibold p-6 rounded-lg shadow-lg border-none';
const descriptionClass = 'text-base font-normal mt-1';

export const successToast = (
  heading = 'Operation Successful',
  description?: string,
  duration = 4000,
): void => {
  toast.success(heading, {
    description,
    duration,
    className: `bg-blue-600 text-white ${baseToastClass}`,
    descriptionClassName: `text-white ${descriptionClass}`,
  });
};

export const errorToast = (
  heading: string,
  description?: string,
  duration = 4000,
): void => {
  toast.error(heading, {
    description,
    duration,
    className: `bg-red-600 text-white ${baseToastClass}`,
    descriptionClassName: `text-white ${descriptionClass}`,
  });
};
