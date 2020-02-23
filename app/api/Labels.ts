// Types
import { IGenre, ICountry, IDirector, IActor } from "shared/types";

// API config
import {
  API_GENRE_FETCH_ALL,
  API_ACTOR_FETCH_ALL,
  API_COUNTRY_FETCH_ALL,
  API_DIRECTOR_FETCH_ALL
} from "./config";

class Labels {
  public async fetchAllGenres(): Promise<IGenre[] | null> {
    try {
      const res = await fetch(API_GENRE_FETCH_ALL);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async fetchAllCountries(): Promise<ICountry[] | null> {
    try {
      const res = await fetch(API_COUNTRY_FETCH_ALL);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async fetchAllActors(): Promise<IActor[] | null> {
    try {
      const res = await fetch(API_ACTOR_FETCH_ALL);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async fetchAllDirectors(): Promise<IDirector[] | null> {
    try {
      const res = await fetch(API_DIRECTOR_FETCH_ALL);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export const LabelsAPI = new Labels();
