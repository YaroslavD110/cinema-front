import * as React from "react";

interface IFilmCardProps {
  title: string;
  preview: string;
  rating: number;
}

export const FilmCard: React.FC<IFilmCardProps> = props => {
  const { title, preview, rating } = props;

  return (
    <div className="card">
      <div className="card__cover">
        <img src={preview} alt={title} />
        <a href="#" className="card__play">
          <i className="icon ion-ios-play"></i>
        </a>
        <span className="card__rate card__rate--green">{rating}</span>
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
