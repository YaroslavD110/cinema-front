import * as React from "react";
import Link from "next/link";

// Components
import Layout from "@app/components/Layout";
import FilmCard from "@app/components/UI/FilmCard";

// Config
import { apiEndpoint, itemsPerCatalogPage } from "shared/config";

// Types
import { IFilm } from "shared/types";

interface ICatalogProps {
  currentPage: number;
  filmsNumber: number;
  films: IFilm[];
}

export const Catalog: NextFC<ICatalogProps> = props => {
  let pagination = [];
  const { films, filmsNumber, currentPage } = props;
  const paginationItemsNumber = Math.ceil(filmsNumber / itemsPerCatalogPage);

  if (currentPage !== 1) {
    pagination.push(
      <li key={0} className="paginator__item paginator__item--prev">
        <Link
          href={{
            pathname: "/films",
            query: {
              pageNumber: currentPage - 1
            }
          }}
          as={`/films/page/${currentPage - 1}`}
        >
          <a>
            <i className="icon ion-ios-arrow-back"></i>
          </a>
        </Link>
      </li>
    );
  }

  for (let i = 1; i <= paginationItemsNumber; i++) {
    pagination.push(
      <li
        key={i}
        className={`paginator__item${
          i === currentPage ? " paginator__item--active" : ""
        }`}
      >
        <Link
          href={{
            pathname: "/films",
            query: {
              pageNumber: i
            }
          }}
          as={`/films/page/${i}`}
        >
          <a>{i}</a>
        </Link>
      </li>
    );
  }

  if (currentPage !== paginationItemsNumber) {
    pagination.push(
      <li
        key={paginationItemsNumber + 1}
        className="paginator__item paginator__item--next"
      >
        <Link
          href={{
            pathname: "/films",
            query: {
              pageNumber: currentPage + 1
            }
          }}
          as={`/films/page/${currentPage + 1}`}
        >
          <a>
            <i className="icon ion-ios-arrow-forward"></i>
          </a>
        </Link>
      </li>
    );
  }

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

            <div className="col-12">
              <ul className="paginator">{pagination}</ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

Catalog.getInitialProps = async ctx => {
  const pageNumber = parseInt(ctx.query.pageNumber as string);
  const response: ICatalogProps = {
    filmsNumber: 0,
    currentPage: 1,
    films: []
  };

  try {
    if (pageNumber && pageNumber > 1) {
      response.currentPage = pageNumber;
    }

    const [res, resCount] = await Promise.all([
      fetch(
        `${apiEndpoint}/film?limit=${itemsPerCatalogPage}&offset=${(response.currentPage -
          1) *
          itemsPerCatalogPage}`
      ),
      fetch(`${apiEndpoint}/film/count`)
    ]);
    const data = await res.json();
    const filmsNumber = await resCount.json();

    response.filmsNumber = filmsNumber;
    response.films = [...data];
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default Catalog;
