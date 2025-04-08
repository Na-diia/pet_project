

export interface PlanetProps {
    props: 
      {
          name: string;
          images: {
           png: string;
           webp: string;
          };
          description: string;
          distance: string;
          travel: string;
      }[]
  };