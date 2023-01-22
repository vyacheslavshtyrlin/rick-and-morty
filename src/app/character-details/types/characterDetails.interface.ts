export interface CharactereDetailsInterface {
  name: string;
  gender: string;
  status: string;
  species: string;
  id: string;
  location: {
    name: string;
  };
  episode: {
    name: string;
  }[];
}
