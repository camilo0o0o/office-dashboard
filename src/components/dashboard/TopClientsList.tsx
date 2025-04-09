import React from 'react';
import { TopClientItem } from './TopClientItem';

interface ClientData {
  id: string;
  name: string;
  imageCount: number;
  percentageChange: number;
}

interface TopClientsListProps {
  clients: ClientData[];
}

export const TopClientsList: React.FC<TopClientsListProps> = ({ clients }) => {
  // Sort clients by image count in descending order and take top 5
  const topClients = [...clients]
    .sort((a, b) => b.imageCount - a.imageCount)
    .slice(0, 5);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {topClients.map((client, index) => (
        <TopClientItem
          key={client.id}
          rank={index + 1}
          clientName={client.name}
          imageCount={client.imageCount}
          percentageChange={client.percentageChange}
        />
      ))}
    </div>
  );
}; 