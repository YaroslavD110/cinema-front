import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";

// Components
import Layout from "@app/components/Layout";
import { CollapseText } from "app/components/UI/CollapseText";

// Config
import { apiEndpoint } from "shared/config";

// Types
import { IGenre, IDirector, ICountry, IActor } from "shared/types";

interface IFilmPageProps {
  id: number;
  title: string;
  engTitle?: string;
  slug: string;
  posterImg?: string;
  iframeURL?: string;
  production?: string;
  releaseDate?: string;
  description: string;
  IMDBRating: number;
  year: number;
  genres: IGenre[];
  directors: IDirector[];
  countries: ICountry[];
  actors: IActor[];
}

interface ILink {
  id: number;
  name: string;
  as: string;
}

export const FilmPage: NextFC<IFilmPageProps> = props => {
  const renderLinksList = (links: ILink[]) =>
    links.map(({ id, name, as }) => (
      <Link key={id} href={"/[labelName]/[slug]"} as={as}>
        <a>{name}</a>
      </Link>
    ));

  const directors = renderLinksList(
    props.directors.map(({ id, name, slug }) => ({
      id,
      name,
      as: `/director/${slug}`
    }))
  );

  const genres = renderLinksList(
    props.genres.map(({ id, label, slug }) => ({
      id,
      name: label,
      as: `/genre/${slug}`
    }))
  );

  const countries = renderLinksList(
    props.countries.map(({ id, name, slug }) => ({
      id,
      name,
      as: `/country/${slug}`
    }))
  );

  const actors = renderLinksList(
    props.actors.map(({ id, name, slug }) => ({
      id,
      name,
      as: `/actor/${slug}`
    }))
  );

  return (
    <Layout title="Film page">
      <section className="section section--details section--bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">{props.title}</h1>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                    <div className="card__cover">
                      <img src={props.posterImg} alt={props.title} />
                      <span className="card__rate card__rate--green">
                        {props.IMDBRating}
                      </span>
                    </div>
                  </div>

                  <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span> {directors}
                        </li>
                        {props.production && (
                          <li>
                            <span>Production:</span> {props.production}
                          </li>
                        )}
                        <li>
                          <span>Genre:</span> {genres}
                        </li>
                        <li>
                          <span>Actors:</span> {actors}
                        </li>
                        <li>
                          <span>Release:</span>{" "}
                          {props.releaseDate || props.year}
                        </li>
                        <li>
                          <span>Country:</span> {countries}
                        </li>
                      </ul>
                      <div className="b-description_readmore_wrapper js-description_readmore_wrapper">
                        <CollapseText text={props.description} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {props.iframeURL && (
              <div className="col-12 col-lg-6">
                <iframe
                  src={props.iframeURL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

FilmPage.getInitialProps = async ctx => {
  const slug = ctx.query.slug;
  let response: IFilmPageProps = {
    id: 0,
    title: "Unknown",
    slug: slug as string,
    posterImg: "",
    description: "",
    IMDBRating: NaN,
    year: NaN,
    genres: [],
    directors: [],
    countries: [],
    actors: []
  };

  try {
    const res = await fetch(`${apiEndpoint}/film/slug/${slug}`);
    const data = await res.json();

    if (data.releaseDate) {
      data.releaseDate = format(new Date(data.releaseDate), "dd MMMM yyyy");
    }

    response = { ...data };
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default FilmPage;
