export interface Heroe {
        id: string;
        name: string;
        powerstats: {
          intelligence: string,
          strength: string,
          speed: string,
          durability: string,
          power: string,
          combat: string
        };
        appearance: {
          gender: string
        };
        biography: {
          firstAppearance: string,
          alignment: string
        };
        images: {
          md: string,
          lg: string
        };
}
