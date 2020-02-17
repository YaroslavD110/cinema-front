export interface IFilm {
  id: number;
  title: string;
  slug: string;
  IMDBRating?: number;
  posterImg?: string;
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  label: string;
  slug: string;
}

export interface IDirector {
  id: number;
  name: string;
  slug: string;
}

export interface IActor {
  id: number;
  name: string;
  slug: string;
}

export interface ICountry {
  id: number;
  name: string;
  slug: string;
}

export interface IAccessCredentials {
  accessToken: string;
  refreshToken: string;
}
