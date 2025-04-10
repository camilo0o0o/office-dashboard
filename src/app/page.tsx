import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { TopClientsList } from '@/components/dashboard/TopClientsList';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import Image from 'next/image';
import { clientsData, shelfProductsData } from '@/data/mock/dashboardData';
import { mockDetectionBoxes } from '@/data/mock/detectionParser';

export default function Home() {
  // Get the data for CPM client
  const cpmData = shelfProductsData.cpm;

  return (
    <DashboardLayout>
      <DashboardCard title="👁️ Bobby AI Overlord" className="col-span-3">
        <div className="flex flex-col items-center justify-center mt-4">
          <Image src="/bobby.png" alt="Bobby" width={500} height={500} />
        </div>
      </DashboardCard>
      <DashboardCard title="🏆 Images Processed Weekly Top 5" subtitle="April 6 - April 12" className="col-span-3">
        <TopClientsList clients={clientsData} />
      </DashboardCard>
      <DashboardCard title="📸 What are clients sending - CPM" subtitle="Last updated: 10 minutes ago" className="col-span-6">
        <RecentActivity
          recentImage={{
            url: cpmData.image,
            alt: "Shelf display with product facings"
          }}
          topProducts={cpmData.products}
          clientName="CPM"
          initialDetections={mockDetectionBoxes}
        />
      </DashboardCard>
      <DashboardCard title="Something else" className="col-span-12">
        <p>Something else</p>
      </DashboardCard>
    </DashboardLayout>
  );
}
