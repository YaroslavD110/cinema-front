import * as React from "react";
import Slider, { Settings } from "react-slick";

// Components
import Layout from "@app/components/Layout";
import FilmCard from "@app/components/UI/FilmCard";

// Config
import { apiEndpoint } from "shared/config";

interface IFilm {
  id: number;
  title: string;
  slug: string;
  IMDBRating: number;
  posterUrl: string;
}

interface IHomePageProps {
  films: IFilm[];
}

const HomePage: NextFC<IHomePageProps> = props => {
  const slider = React.useRef(null);
  const slickSettings: Settings = {
    slidesToShow: 5,
    arrows: false
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
                <b>NEW ITEMS</b> OF THIS SEASON
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
