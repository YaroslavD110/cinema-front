import * as React from "react";

// Components
import Layout from "@app/components/Layout";
import FilmCard from "@app/components/UI/FilmCard";

// Config
import { apiEndpoint } from "shared/config";

// Types
import { IFilm } from "shared/types";

interface ICatalogProps {
  films: IFilm[];
}

export const Catalog: NextFC<ICatalogProps> = props => {
  const { films } = props;

  console.log("films :", films);

  return (
    <Layout title="Catalog page">
      <section className="section section--first catalog--bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__wrap">
                <h2 className="section__title">Catalog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="filter">
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>

      <section className="catalog">
        <div className="container">
          <div className="row">
            {films.map(film => (
              <div key={film.id} className="col-6 col-sm-4 col-md-3 col-xl-2">
                <FilmCard
                  title={film.title}
                  slug={film.slug}
                  preview={film.posterUrl}
                  rating={film.IMDBRating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Catalog.getInitialProps = async () => {
  const response: ICatalogProps = {
    films: []
  };

  try {
    const res = await fetch(`${apiEndpoint}/film?limit=30`);
    const data = await res.json();

    response.films = [...data];
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default Catalog;
