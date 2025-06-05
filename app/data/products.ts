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

/*
cats - different pages
Low pressure pneumatic
high pressure gas 
hydraulic
valve maintenance products
electrics

*/

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

export type Product1 = {
  id: number;
  brand: string;
  name: string;
  size?: string;
  material?: string;
  type?: string;
  old_pn: string;
  description: string;
  category: string;
  // icon: React.ComponentType;
  color: string;
  downloadableFiles: DownloadableFile[];
};

export const products1 = [
  {
    id: 420492,
    brand: 'Sealweld',
    name: 'Check Valve, Internal, Flow Wolf Inner Check',
    size: '1/4"',
    material: 'Stainless Steel',
    type: 'Duo',
    old_pn: 'F-FW-IC1/4-SS-DUO',
    description:
      'Internal check valve designed for Flow Wolf systems; ensures unidirectional flow control.',
    category: 'Check Valves',
    color: '#1E40AF',
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
      {
        name: '3D Model',
        url: '/path/to/3d-model.step',
        type: 'STEP',
      },
      {
        name: 'Datasheet',
        url: '/path/to/datasheet.xlsx',
        type: 'Excel',
      },
    ],
  },
  {
    id: 420436,
    brand: 'Sealweld',
    name: 'Flow Wolf Buttonhead Fitting',
    size: '1/2"',
    material: 'Stainless Steel',
    features: ['CRN', 'MX'],
    old_pn: 'F FW1/2-BH-SS-CRN-MX',
    description:
      'Buttonhead fitting for Flow Wolf systems; provides a secure connection for various fittings.',
    category: 'Flow Wolf Fittings',
    color: '#047857',
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
      {
        name: '3D Model',
        url: '/path/to/3d-model.step',
        type: 'STEP',
      },
      {
        name: 'Datasheet',
        url: '/path/to/datasheet.xlsx',
        type: 'Excel',
      },
    ],
  },
  {
    id: 420496,
    brand: 'Sealweld',
    name: 'Flow Wolf Inner Check',
    size: '3/8"',
    material: 'Stainless Steel',
    type: 'Duo',
    old_pn: 'F-FW-IC3/8-SS-DUO',
    category: 'Check Valves',
    description:
      'Internal check valve for Flow Wolf systems, ensuring unidirectional flow and reliable operation.',
    color: '#B91C1C',
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
  },
  {
    id: 420453,
    brand: 'Sealweld',
    name: 'Flow Wolf Buttonhead Fitting',
    size: '1/4"',
    material: 'Stainless Steel',
    features: ['CRN', 'MX'],
    old_pn: 'F FW1/4-BH-SS-CRN-MX',
    category: 'Flow Wolf Fittings',
    description:
      'Buttonhead fitting for Flow Wolf systems, providing secure and versatile connections.',
    color: '#7C3AED',
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
  },
  {
    id: 420362,
    brand: 'Valtex',
    name: 'Body Vent Fitting',
    size: '1"',
    material: 'Stainless Steel',
    old_pn: 'F-BV1-TC3-SS',
    category: 'Valve Fittings',
    description:
      'Body vent fitting for safe and efficient venting in valve assemblies.',
    color: '#C2410C',
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
  },
  {
    id: 420380,
    brand: 'Valtex',
    name: 'Body Vent Fitting',
    size: '3/4"',
    material: 'Stainless Steel',
    old_pn: 'F-BV3/4-TC3-SS',
    category: 'Valve Fittings',
    description:
      'Body vent fitting for safe and efficient venting in valve assemblies.',
    color: '#0369A1',
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
  },
  {
    id: 400811,
    brand: 'Val-Tex',
    name: '700 Bulk Lube Sealant',
    size: '10 LB Can',
    old_pn: '700-S-10',
    category: 'Sealants',
    description:
      'High-performance bulk lube sealant for industrial valve maintenance.',
    color: '#4338CA',
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
  },
  {
    id: 422058,
    brand: 'Sealweld',
    name: '#5050 Ball Valve Sealant',
    size: '10 LB Pail',
    old_pn: 'S-VS-10P',
    category: 'Sealants',
    description:
      'Premium ball valve sealant for effective sealing and protection.',
    color: '#15803D',
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
  },
  {
    id: 400908,
    brand: 'Sealweld',
    name: '80-BOX-B Sticks',
    old_pn: '80-B',
    category: 'Sealants',
    description:
      'Versatile sealant sticks for a variety of valve applications.',
    color: '#9D174D',
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
  },
  {
    id: 422002,
    brand: 'Sealweld',
    name: 'Total-Lube #911',
    size: '10 LB Pail',
    old_pn: 'S-TL-10P',
    category: 'Lubricants',
    description:
      'Total-Lube #911 for superior lubrication and protection of valve components.',
    color: '#92400E',
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
  },
  {
    id: 401720,
    brand: 'Val-Tex',
    name: 'Valve Flush',
    size: '4-Quart Bottles',
    old_pn: 'VF-CTN',
    category: 'Valve Maintenance',
    description:
      'Valve flush solution for cleaning and maintaining valve systems.',
    color: '#1E40AF',
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
  },
  {
    id: 420794,
    brand: 'Sealweld',
    name: 'Giant Buttonhead Coupler with Top Entry Plug',
    old_pn: 'H CPSG-3',
    category: 'Couplers',
    description:
      'Heavy-duty buttonhead coupler with top entry plug for robust connections.',
    color: '#047857',
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
  },
  {
    id: 420665,
    brand: 'Sealweld',
    name: 'EZ Loader Transfer Loading Device',
    old_pn: 'G-EZ-LOADER',
    category: 'Loading Devices',
    description:
      'EZ Loader device for efficient and safe transfer loading operations.',
    color: '#B91C1C',
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
  },
  {
    id: 420685,
    brand: 'Sealweld',
    name: 'Supergun Injection Pump with EZ Loader and Case',
    old_pn: 'G-SGUN-CK01',
    category: 'Injection Pumps',
    description:
      'Supergun injection pump set with EZ Loader and carrying case for field use.',
    color: '#7C3AED',
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
  },
  {
    id: 420646,
    brand: 'Activ-8',
    name: 'Sealant Injection Pump',
    old_pn: 'G-A8GUN-C',
    category: 'Injection Pumps',
    description:
      'Sealant injection pump for precise and efficient sealant application.',
    color: '#C2410C',
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
  },
];
