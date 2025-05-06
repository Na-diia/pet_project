export interface CrewProps {
   team: {
    id: string;
    name: string,
    images: {
      png: string,
      webp: string,
    },
    role: string,
    bio: string,
   }[]
};

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