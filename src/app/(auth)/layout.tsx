import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(0deg, #FAFBFC, #FAFBFC)',
        backgroundImage:
          'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(16, 185, 129, 0.2) 100%)',
      }}
    >
      {children}
    </div>
  );
}
