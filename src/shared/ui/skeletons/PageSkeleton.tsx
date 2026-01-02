'use client';

export default function PageSkeleton(): React.JSX.Element {
  return (
    <div className="animate-pulse space-y-3 p-6">
      <div className="h-6 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );
}
