interface Picture {
  src: string;
  alt: string;
}
export interface Pictures {
  about: Picture[];
  landing: Picture[];
}

const pictures: Pictures = {
  landing: [
    {
      src: '/landing/DJI_0115.JPG',
      alt: 'Quality Control Testing',
    },
    {
      src: '/landing/DJI_0104.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/landing/DJI_0118.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_1383.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_2444.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_2447.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_2998.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_3353.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_4506.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_4924.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_5391.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_5848.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_7091.JPG',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_7097.jpeg',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_7177.jpeg',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_7398.jpeg',
      alt: 'Industrial Valves',
    },
    {
      src: '/landing/IMG_7827.jpeg',
      alt: 'Industrial Valves',
    },
  ],
  about: [
    {
      src: '/about/IMG_9783.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_9788.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_0618.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_1102.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_1320.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_2366.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_2999.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_3149.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_3927.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_4404.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_5811.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_6588.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_6810.jpeg',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_7226.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_7250.JPG',
      alt: 'Valve Manufacturing Process',
    },
    {
      src: '/about/IMG_9025.JPG',
      alt: 'Valve Manufacturing Process',
    },
  ],
};

export default pictures;
