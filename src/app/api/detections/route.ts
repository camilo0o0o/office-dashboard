import { readFileSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export interface DetectionBox {
  id: string;
  label: string;
  confidence: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  color: string;
}

// Assign colors based on labels
const colorMap: {[key: string]: string} = {
  'coca-cola': '#E63946',
  'pepsi': '#4895EF',
  'fanta': '#FF9F1C',
  'coca-cola-zero': '#444444',
  'unknown': '#D3D3D3',
  // Add more labels and colors as needed
};

export async function GET() {
  try {
    // Read the example response file
    const filePath = path.join(process.cwd(), 'src/data/mock/exampleResponse.txt');
    const fileContents = readFileSync(filePath, 'utf8');
    
    // Parse the JSON data
    const parsedData = JSON.parse(fileContents);
    
    // Extract detections - Navigate through the nested structure to find bbox data
    const detections = parsedData?.data?.viewer?.imageRecognitionTask?.result?.detections || [];
    
    // Map the data to our DetectionBox format
    const detectionBoxes: DetectionBox[] = detections.map((detection: any, index: number) => {
      // Extract the bounding box data
      const bbox = detection.boundingBox;
      
      // Normalize the label
      const label = detection.label?.toLowerCase() || 'unknown';
      
      // Assign a color from our map or generate a color
      const color = colorMap[label] || `hsl(${index * 137.5 % 360}, 70%, 50%)`;
      
      return {
        id: detection.id || `detection-${index}`,
        label: detection.label || 'Unknown',
        confidence: detection.confidence || 0,
        boundingBox: {
          x: bbox.x,
          y: bbox.y,
          width: bbox.width,
          height: bbox.height
        },
        color
      };
    });
    
    // Return the detection boxes as JSON
    return NextResponse.json(detectionBoxes);
  } catch (error) {
    console.error('Error parsing detections:', error);
    return NextResponse.json({ error: 'Failed to parse detection data' }, { status: 500 });
  }
} 