import React from 'react';
import { poppins } from "@/app/fonts";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  subtitle,
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border border-gray-500/10 ${className}`}>
      <h2 className={`${poppins.className} text-xl font-semibold`}>{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {children}
      </div>
    </div>
  );
}; 