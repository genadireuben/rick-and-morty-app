interface Origin {
  name: string;
  url: string;
}

type Episode = string;

interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: int;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  episodes: Episode[];
  location: Location;
  image: string;
  url: string;
  created: string;
}
export interface Characters {
  character: Character;
}

export interface QueryParams {
  name: string;
  specie: string;
  gender: string;
  status: string;
}
