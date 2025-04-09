import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 h-screen w-screen">
      {children}
    </div>
  );
}; 