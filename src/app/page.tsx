'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { TopClientsList } from '@/components/dashboard/TopClientsList';
import { Balloons, BalloonsRef } from '@/components/ui/balloons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRef } from 'react';

// Sample data - replace with your actual data source
const sampleClients = [
  { id: '1', name: 'CPM - Suntory', imageCount: 26033, percentageChange: 56.07 },
  { id: '2', name: 'Randstad (Grupo CTC)', imageCount: 319, percentageChange: -92.3 },
  { id: '3', name: 'Cona - Greenville [Coolers]', imageCount: 20950, percentageChange: 446.28 },
  { id: '4', name: 'OneDoor [Prod]', imageCount: 11720, percentageChange: 215.65 },
  { id: '5', name: 'AG Barr [Demo]', imageCount: 13341, percentageChange: -2.58 },
  { id: '6', name: 'ABI', imageCount: 4087, percentageChange: -17.9 },
];

export default function Home() {
  const balloonsRef = useRef<BalloonsRef | null>(null);

  const handleLaunch = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation();
    }
  };

  return (
    <DashboardLayout>
      <DashboardCard title="Bobby AI Overlord" className="col-span-3">
        <div className="flex flex-col items-center justify-center mt-4 gap-4">
          <Image src="/bobby.png" alt="Bobby" width={500} height={500} />
          <Button 
            onClick={handleLaunch}
            className="bg-nlb hover:bg-nlb/90 text-white"
          >
            Launch Dashboard! 🚀
          </Button>
          <Balloons 
            ref={balloonsRef}
            type="default"
          />
        </div>
      </DashboardCard>
      <DashboardCard title="🏆 Images Processed Weekly Top 5" subtitle="April 6 - April 1 | Updated: 9:00 am" className="col-span-3">
        <TopClientsList clients={sampleClients} />
      </DashboardCard>
      <DashboardCard title="📸 What are customers sending?" subtitle="Last updated: -" className="col-span-6">
        <div className ="font-bold text-center">
          <p>WORK IN PROGRESS...</p>
          <p>🚧👷‍♂️</p>
        </div>
      </DashboardCard>
      <DashboardCard title=" " className="col-span-12">
        <p> </p>
      </DashboardCard>
    </DashboardLayout>
  );
}
