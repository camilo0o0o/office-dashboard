"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShelfImage } from './ShelfImage';
import { DetectionBox } from '@/data/mock/detectionParser';

interface RecentActivityProps {
  recentImage: {
    url: string;
    alt: string;
  };
  topProducts: Array<{
    id: string;
    name: string;
    count: number;
    color: string;
  }>;
  clientName: string;
  initialDetections?: DetectionBox[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ 
  recentImage, 
  topProducts, 
  clientName,
  initialDetections = [] 
}) => {
  const [detections, setDetections] = useState<DetectionBox[]>(initialDetections);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetections = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/detections');
        
        if (!response.ok) {
          throw new Error('Failed to fetch detection data');
        }
        
        const data = await response.json();
        setDetections(data);
      } catch (err) {
        console.error('Error fetching detections:', err);
        setError('Failed to load detection data');
        // Fallback to initial detections
        setDetections(initialDetections);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDetections();
  }, [initialDetections]);

  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      {/* Left column - Recent Image with detections */}
      <div className="flex flex-col h-full relative">
        {loading && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
            <div className="text-gray-500">Loading detection data...</div>
          </div>
        )}
        
        <ShelfImage 
          imageUrl={recentImage.url}
          alt={recentImage.alt}
          detections={detections}
        />
        
        {error && (
          <div className="mt-2 text-red-500 text-sm">{error}</div>
        )}
      </div>

      {/* Right column - Top Products */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Share of Shelf Top 5</h3>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div key={product.id} className="flex items-center space-x-3">
              <div 
                className="h-10 w-10 rounded" 
                style={{ backgroundColor: product.color }}
              />
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">{product.count} Facings</p>
              </div>
              <div className="text-2xl font-semibold">
                {product.count}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 