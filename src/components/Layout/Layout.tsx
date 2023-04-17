import React, { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
