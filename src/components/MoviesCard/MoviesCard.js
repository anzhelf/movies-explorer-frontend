import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mark from '../../images/mark.svg';
import MarkActiv from '../../images/markActiv.svg';
import DeleteMark from '../../images/delete.svg';
import './MoviesCard.css';
import '../Animation/Animation.css';
import { MOVIES_API } from "../../constants/Api";

function MoviesCard({ addMovie, card, deleteMovie, type }) {
  const saveMovies = JSON.parse(localStorage.getItem('saveMoviesList'));
  const [isLiked, setIsLiked] = useState(saveMovies?.some((i) => i.movieId === card.id))

  function handleClick() {
    if (isLiked) {
      const saveMoviesList = JSON.parse(localStorage.getItem('saveMoviesList'));
      const saveCard = saveMoviesList.find((i) => i.movieId === card.id);
      deleteMovie(saveCard);
    } else if (!isLiked) {
      addMovie(card);
    }
    setIsLiked(!isLiked)
  }

  function handleDeleteMovie() {
    deleteMovie(card);
    setIsLiked(false);
  }

  return (
    <div className='card'>

      <div className='card__info-box'>

        <div className='card__text-box'>
          <h2 className='card__title'>{card.nameRU}</h2>
          <p className='card__subtitle'>
            {card.duration > 60 ? `${Math.floor(card.duration / 60)}ч ${card.duration % 60}м` : `${card.duration}м`}
          </p>
        </div>

        {
          type ? <button className={`card__button ${isLiked ? 'card__button_activ' : ''} animation__button`} onClick={handleClick}>
            <img src={isLiked ? MarkActiv : Mark} className='card__mark' alt="Иконка добавить в закладки. Флажёк в кругу." />
          </button>
            : <button className={`card__button animation__button`} onClick={handleDeleteMovie}>
              <img src={DeleteMark} className='card__mark_delete' alt="Иконка удалить закладок. крестик в кругу." />
            </button>
        }

      </div>

      <Link to={card.trailerLink} target="_blank" ><img src={type ? (MOVIES_API + card.image.url) : card.image} className='card__image' alt="Фото в карточке фильма." /></Link>
    </div>
  );
}

export default MoviesCard;