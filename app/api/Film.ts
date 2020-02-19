import { API_FILM_FETCH, API_FILM_FETCH_COUNT } from "./config";

// Types
import { IFilmFull } from "shared/types.d";

// Validators
import { filmValidator } from "./validators/film";

class Film {
  public async fetchAll(offset?: number) {
    try {
      const url = new URL(API_FILM_FETCH);

      if (offset) {
        url.searchParams.append("offset", offset.toString());
      }

      const res = await fetch(url.toString());
      const data = await res.json();

      const films: IFilmFull[] = data.map(filmValidator).filter(Boolean);

      return films;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async fetchCount() {
    try {
      const res = await fetch(API_FILM_FETCH_COUNT);
      const data = await res.json();

      return parseInt(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export const FilmAPI = new Film();
