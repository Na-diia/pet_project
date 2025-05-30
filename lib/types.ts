export interface TecnologyProps {
  item: {
    id: string;
    name: string;
    images: {
        portrait: string,
        landscape: string,
    },
    description: string,
  }[]
};

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