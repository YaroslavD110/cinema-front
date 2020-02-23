import * as React from "react";

// Components
import AdminLayout from "@app/components/admin/AdminLayout";
import TopRow from "@app/components/admin/EditFilm/TopRow";
import LabelsRow from "@app/components/admin/EditFilm/LabelsRow";
import MainRow from "@app/components/admin/EditFilm/MainRow";

// API
import { FilmAPI } from "@app/api/Film";
import { LabelsAPI } from "@app/api/Labels";

// Types
import { IFilmFull, IGenre, IActor, ICountry, IDirector } from "shared/types";

interface IFilmPageProps {
  film: IFilmFull;
  genres: IGenre[];
  countries: ICountry[];
  actors: IActor[];
  directors: IDirector[];
}

export const FilmPage: NextFC<IFilmPageProps> = props => {
  const { film } = props;

  return (
    <AdminLayout title="Film page">
      <TopRow {...film} />
      <MainRow {...film} />
      <LabelsRow {...film} />
    </AdminLayout>
  );
};

FilmPage.getInitialProps = async ctx => {
  const id = parseInt(ctx.query.id as string);

  const film = await FilmAPI.fetch(id);
  const genres = await LabelsAPI.fetchAllGenres();
  const actors = await LabelsAPI.fetchAllActors();
  const countries = await LabelsAPI.fetchAllCountries();
  const directors = await LabelsAPI.fetchAllDirectors();

  return {
    film: film!,
    genres: genres!,
    actors: actors!,
    countries: countries!,
    directors: directors!
  };
};

export default FilmPage;
