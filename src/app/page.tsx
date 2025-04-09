import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { TopClientsList } from '@/components/dashboard/TopClientsList';
import Image from 'next/image';

// Sample data - replace with your actual data source
const sampleClients = [
  { id: '1', name: 'Acme Corp', imageCount: 12500, percentageChange: 12.5 },
  { id: '2', name: 'Tech Solutions', imageCount: 9800, percentageChange: -3.2 },
  { id: '3', name: 'Global Industries', imageCount: 7500, percentageChange: 5.7 },
  { id: '4', name: 'Innovate Co', imageCount: 6200, percentageChange: 8.3 },
  { id: '5', name: 'Future Systems', imageCount: 5100, percentageChange: -1.5 },
  { id: '6', name: 'Digital Works', imageCount: 4800, percentageChange: 2.1 },
];

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardCard title="Bobby AI Overlord" className="col-span-3">
        <div className="flex flex-col items-center justify-center mt-4">
          <Image src="/bobby.png" alt="Bobby" width={500} height={500} />
        </div>
      </DashboardCard>
      <DashboardCard title="🏆 Images Processed Weekly Top 5" subtitle="April 6 - April 12" className="col-span-3">
        <TopClientsList clients={sampleClients} />
      </DashboardCard>
      <DashboardCard title="📸 What are customers sending?" subtitle="Last updated: 10 minutes ago" className="col-span-6">
        <p>Recent activity will go here</p>
      </DashboardCard>
      <DashboardCard title="Something else" className="col-span-12">
        <p>Something else</p>
      </DashboardCard>
    </DashboardLayout>
  );
}
