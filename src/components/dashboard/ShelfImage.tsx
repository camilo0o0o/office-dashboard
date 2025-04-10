"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { DetectionBox } from '@/data/mock/detectionParser';

interface ShelfImageProps {
  imageUrl: string;
  alt: string;
  detections: DetectionBox[];
  showBoxes?: boolean;
}

export const ShelfImage: React.FC<ShelfImageProps> = ({ 
  imageUrl, 
  alt, 
  detections, 
  showBoxes = true 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Update dimensions when container resizes
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };
    
    // Initial update
    updateDimensions();
    
    // Add resize observer
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full rounded-lg overflow-hidden border border-gray-200 shadow-sm"
      style={{ minHeight: '380px' }}
    >
      {/* Main image */}
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
      
      {/* Bounding boxes */}
      {showBoxes && dimensions.width > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {detections.map((detection) => {
            const { x, y, width, height } = detection.boundingBox;
            return (
              <div
                key={detection.id}
                className="absolute border-2 box-content"
                style={{
                  left: `${x * 100}%`,
                  top: `${y * 100}%`,
                  width: `${width * 100}%`,
                  height: `${height * 100}%`,
                  borderColor: detection.color,
                  backgroundColor: `${detection.color}20` // 20 is hex for 12.5% opacity
                }}
              >
                <div 
                  className="absolute top-0 left-0 transform -translate-y-full text-xs text-white px-1 rounded"
                  style={{ backgroundColor: detection.color }}
                >
                  {detection.label} ({Math.round(detection.confidence * 100)}%)
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}; 