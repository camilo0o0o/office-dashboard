// This file provides detection data for both server and client components

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

// For client-side use, we provide mock detection data
export const mockDetectionBoxes: DetectionBox[] = [
  {
    id: "det-1",
    label: "Coca Cola 500ml",
    confidence: 0.95,
    boundingBox: { x: 0.2, y: 0.3, width: 0.1, height: 0.2 },
    color: "#E63946"
  },
  {
    id: "det-2",
    label: "Pepsi 330ml",
    confidence: 0.88,
    boundingBox: { x: 0.4, y: 0.35, width: 0.08, height: 0.15 },
    color: "#4895EF"
  },
  {
    id: "det-3",
    label: "Fanta Orange",
    confidence: 0.92,
    boundingBox: { x: 0.6, y: 0.4, width: 0.09, height: 0.18 },
    color: "#FF9F1C"
  },
  {
    id: "det-4",
    label: "Coca Cola Zero",
    confidence: 0.85,
    boundingBox: { x: 0.3, y: 0.6, width: 0.1, height: 0.2 },
    color: "#444444"
  },
  // More realistic shelf detections
  {
    id: "det-5",
    label: "Coca Cola 500ml",
    confidence: 0.91,
    boundingBox: { x: 0.1, y: 0.35, width: 0.05, height: 0.15 },
    color: "#E63946"
  },
  {
    id: "det-6",
    label: "Fanta Orange",
    confidence: 0.87,
    boundingBox: { x: 0.7, y: 0.45, width: 0.06, height: 0.12 },
    color: "#FF9F1C"
  },
  {
    id: "det-7",
    label: "Pepsi 330ml",
    confidence: 0.93,
    boundingBox: { x: 0.5, y: 0.5, width: 0.05, height: 0.1 },
    color: "#4895EF"
  }
]; 