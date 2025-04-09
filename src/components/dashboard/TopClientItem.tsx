import React from 'react';
import { poppins } from "@/app/fonts";

interface TopClientItemProps {
  rank: number;
  clientName: string;
  imageCount: number;
  percentageChange: number;
}

export const TopClientItem: React.FC<TopClientItemProps> = ({
  rank,
  clientName,
  imageCount,
  percentageChange,
}) => {
  const isPositive = percentageChange >= 0;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const changeIcon = isPositive ? '↑' : '↓';

  return (
    <div className="flex items-center justify-between w-full py-3">
      <div className="flex items-center gap-3">
        <span className={`${poppins.className} font-bold text-nlb w-6`}>{rank}</span>
        <span className={`${poppins.className} font-medium`}>{clientName}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={`${poppins.className} font-bold text-xl`}>{imageCount.toLocaleString()}</span>
        <span className={`${poppins.className} text-sm ${changeColor}`}>
          {changeIcon} {Math.abs(percentageChange)}%
        </span>
      </div>
    </div>
  );
}; 