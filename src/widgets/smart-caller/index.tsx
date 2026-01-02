// Stub SmartCaller widget for build compatibility
// TODO: Implement actual SmartCaller widget when needed

import React from 'react';

export const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return <td className={className}>{children}</td>;
};

export const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return <th className={className}>{children}</th>;
};

export const DefaultButton = ({
  children,
  onClick,
  can = true,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  can?: boolean;
  [key: string]: unknown;
}): React.JSX.Element | null => {
  if (!can) return null;
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const SmartCaller = {
  TableCell,
  TableHeader,
  DefaultButton,
};

export default SmartCaller;
