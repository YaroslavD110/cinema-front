export interface IFilm {
  id: number;
  title: string;
  slug: string;
  IMDBRating?: number;
  posterImg?: string;
  genres: IGenre[];
}

export interface IFilmFull extends IFilm {
  engTitle: string;
  year: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  iframeURL?: string;
  releaseDate?: string;
  runtime?: number;
  IMDBid?: string;
  IMDBRating?: number;
  production?: string;
  posterImg?: string;
  screenshots: string[];
  countries: ICountry[];
  directors: IDirector[];
  actors: IActor[];
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
