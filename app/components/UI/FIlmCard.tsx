import * as React from "react";
import Link from "next/link";

interface IFilmCardProps {
  title: string;
  preview: string;
  rating: number;
  slug: string;
  bigCard?: boolean;
}

export const FilmCard: React.FC<IFilmCardProps> = props => {
  const { title, preview, rating, slug, bigCard } = props;

  return (
    <div className={`card${bigCard ? " card--big" : ""}`}>
      <div className="card__cover">
        <img src={preview} alt={title} />
        <Link href="/films/[slug]" as={`/films/${slug}`}>
          <a className="card__play">
            <i className="icon ion-ios-play"></i>
          </a>
        </Link>
        <span
          className={`card__rate ${
            rating >= 7 ? "card__rate--green" : "card__rate--red"
          }`}
        >
          {rating}
        </span>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <a href="#">{title}</a>
        </h3>
        <span className="card__category">
          <a href="#">Action</a>
          <a href="#">Triler</a>
        </span>
      </div>
    </div>
  );
};

export default FilmCard;
