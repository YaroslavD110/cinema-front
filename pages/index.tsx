import * as React from "react";
import Slider, { Settings } from "react-slick";

// Components
import Layout from "@app/components/Layout";
import FilmCard from "@app/components/UI/FilmCard";

// Config
import { apiEndpoint } from "shared/config";

// Types
import { IFilm } from "shared/types";

interface IHomePageProps {
  films: IFilm[];
}

const HomePage: NextFC<IHomePageProps> = props => {
  const slider = React.useRef(null);
  const slickSettings: Settings = {
    slidesToShow: 5,
    arrows: false,
    autoplay: true
  };

  // ** Methods **
  const sliderGoToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    if (slider.current) (slider.current as any).slickNext();
  };

  const sliderGoToPrev = (event: React.MouseEvent) => {
    event.preventDefault();
    if (slider.current) (slider.current as any).slickPrev();
  };

  return (
    <Layout title="Home page">
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="home__title">
                <b>recently added</b>
              </h1>

              <button
                onClick={sliderGoToPrev}
                className="home__nav home__nav--prev"
                type="button"
              >
                <i className="icon ion-ios-arrow-round-back"></i>
              </button>

              <button
                onClick={sliderGoToNext}
                className="home__nav home__nav--next"
                type="button"
              >
                <i className="icon ion-ios-arrow-round-forward"></i>
              </button>
            </div>

            <div className="col-12">
              <Slider ref={slider} {...slickSettings}>
                {props.films.map(film => (
                  <FilmCard
                    bigCard
                    key={film.id}
                    slug={film.slug}
                    title={film.title}
                    preview={film.posterUrl}
                    rating={film.IMDBRating}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">
                <b>CinemaGO</b> – Best Place for Movies
              </h2>
              <p className="section__text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of <b>using Lorem</b> Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using. Many desktop publishing packages and web page editors now
                use Lorem Ipsum as their default model text, and a search for
                'lorem ipsum' will uncover many web sites still in their
                infancy.
              </p>

              <p className="section__text">
                Content here, content here, making it look like{" "}
                <a href="#">readable</a> English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

HomePage.getInitialProps = async ctx => {
  const response: IHomePageProps = {
    films: []
  };

  try {
    const res = await fetch(`${apiEndpoint}/film?limit=25`);
    const data = await res.json();

    response.films = data;
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default HomePage;
