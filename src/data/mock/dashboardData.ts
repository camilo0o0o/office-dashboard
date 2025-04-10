export const clientsData = [
  { id: '1', name: 'CPM - Suntory', imageCount: 17023, percentageChange: 29.07 },
  { id: '2', name: 'Randstad (Grupo CTC)', imageCount: 246, percentageChange: -94.02 },
  { id: '3', name: 'Cona - Greenville [Coolers]', imageCount: 20950, percentageChange: 2936.23 },
  { id: '4', name: 'OneDoor [Prod]', imageCount: 6143, percentageChange: 96.32 },
  { id: '5', name: 'AG Barr [Demo]', imageCount: 10421, percentageChange: -9.92 },
  { id: '6', name: 'ABI', imageCount: 3125, percentageChange: -6.04 },
];

export const shelfProductsData = {
  cpm: {
    image: '/shelf_img.jpg',
    products: [
      { id: '1', name: 'Coca Cola 500ml', count: 25, color: '#E63946' },
      { id: '2', name: 'Unknown', count: 22, color: '#D3D3D3' },
      { id: '3', name: 'Pepsi 330ml', count: 19, color: '#4895EF' },
      { id: '4', name: 'Fanta Orange', count: 14, color: '#FF9F1C' },
      { id: '5', name: 'Coca Cola Zero', count: 10, color: '#444444' },
    ]
  },
  randstad: {
    image: '/randstad-image.jpg',
    products: [
      { id: '1', name: 'Work Desks', count: 42, color: '#2A9D8F' },
      { id: '2', name: 'Office Chairs', count: 31, color: '#E9C46A' },
      { id: '3', name: 'Meeting Rooms', count: 15, color: '#F4A261' },
      { id: '4', name: 'Reception Areas', count: 8, color: '#E76F51' },
      { id: '5', name: 'Other', count: 4, color: '#264653' },
    ]
  },
  cona: {
    image: '/coolers-image.jpg',
    products: [
      { id: '1', name: 'Coca Cola Classic', count: 35, color: '#E63946' },
      { id: '2', name: 'Diet Coke', count: 28, color: '#A8DADC' },
      { id: '3', name: 'Sprite', count: 20, color: '#1D3557' },
      { id: '4', name: 'Fanta', count: 12, color: '#FF9F1C' },
      { id: '5', name: 'Other Beverages', count: 5, color: '#457B9D' },
    ]
  }
};

export const dashboardConfig = {
  title: "Neurolabs Office Dashboard",
  refreshInterval: 300000, // 5 minutes in milliseconds
  cards: [
    {
      id: "bobby",
      title: "👁️ Bobby AI Overlord",
      type: "image",
      gridSpan: 3
    },
    {
      id: "topClients",
      title: "🏆 Images Processed Weekly Top 5",
      subtitle: "April 6 - April 12",
      type: "clients-list",
      gridSpan: 3
    },
    {
      id: "clientsActivity",
      title: "📸 What are clients sending - CPM",
      subtitle: "Last updated: 10 minutes ago",
      type: "recent-activity",
      client: "cpm",
      gridSpan: 6
    },
    {
      id: "metrics",
      title: "📊 System Metrics",
      type: "metrics",
      gridSpan: 12
    }
  ]
}; 