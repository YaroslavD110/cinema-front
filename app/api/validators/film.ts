import { IFilmFull } from "shared/types.d";

export function filmValidator(film: any): IFilmFull | null {
  if (
    typeof film === "object" ||
    film.id ||
    film.slug ||
    film.title ||
    film.year ||
    film.description ||
    Array.isArray(film.screenshots) ||
    Array.isArray(film.genres) ||
    Array.isArray(film.actors) ||
    Array.isArray(film.countries)
  ) {
    return film;
  }

  return null;
}
