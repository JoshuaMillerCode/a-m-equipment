import {
  Droplet,
  Gauge,
  Filter,
  Thermometer,
  Wrench,
  Zap,
  Minimize2,
  Maximize2,
  RefreshCw,
  Sliders,
} from 'lucide-react';
import type React from 'react';

export type DownloadableFile = {
  name: string;
  url: string;
  type: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  // icon: React.ComponentType;
  color: string;
  downloadableFiles: DownloadableFile[];
};

export const categories = [
  'All',
  'Ball Valves',
  'Gate Valves',
  'Globe Valves',
  'Check Valves',
  'Butterfly Valves',
  'Pressure Relief Valves',
  'Control Valves',
  'Solenoid Valves',
  'Needle Valves',
  'Diaphragm Valves',
];

const iconMap = {
  Droplet,
  Gauge,
  Filter,
  Thermometer,
  Wrench,
  Zap,
  Minimize2,
  Maximize2,
  RefreshCw,
  Sliders,
};

const colorPalette = [
  '#1E40AF', // Deep Blue
  '#047857', // Forest Green
  '#B91C1C', // Ruby Red
  '#7C3AED', // Royal Purple
  '#C2410C', // Burnt Orange
  '#0369A1', // Ocean Blue
  '#4338CA', // Indigo
  '#15803D', // Emerald Green
  '#9D174D', // Magenta
  '#92400E', // Bronze
];

function generateProducts(count: number): Product[] {
  const products: Product[] = [];
  const iconKeys = Object.keys(iconMap);

  for (let i = 0; i < count; i++) {
    const iconKey = iconKeys[Math.floor(Math.random() * iconKeys.length)];
    const category =
      categories[Math.floor(Math.random() * (categories.length - 1)) + 1]; // Exclude 'All'
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    products.push({
      id: `${i + 1}`,
      name: `${category.slice(0, -1)} ${i + 1}`,
      description: `High-quality ${category.toLowerCase()} designed for optimal performance in various industrial applications. Engineered with precision and durability in mind, this valve ensures reliable operation and long-lasting service life.`,
      category,
      // icon: iconMap[iconKey],
      color,
      downloadableFiles: [
        {
          name: 'Technical Specifications',
          url: '/path/to/tech-specs.pdf',
          type: 'PDF',
        },
        {
          name: 'Installation Guide',
          url: '/path/to/installation-guide.pdf',
          type: 'PDF',
        },
        { name: '3D Model', url: '/path/to/3d-model.step', type: 'STEP' },
        { name: 'Datasheet', url: '/path/to/datasheet.xlsx', type: 'Excel' },
      ],
    });
  }

  return products;
}

export const products = generateProducts(100);
