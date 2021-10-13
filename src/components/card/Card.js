import React from 'react';
import { useSelector } from 'react-redux';

import { wordEnding } from '../../utils/utils';

import './Card.css'

const Card = ({ hotel, checkInDateEn, checkInDateYear, daysAmount, onFavouritesClick, isFavourites }) => {
  const { favourites } = useSelector((store) => store.favourites);

  const isAddedToFavourites = favourites.some(item => item.hotelId === hotel.hotelId);
  const handleAddToFavouritesClick = () => {
    onFavouritesClick(hotel, isAddedToFavourites);
  }

  return (
    <li className={ isFavourites ? "hotel-card hotel-card--favourites" : "hotel-card"}>
      { !isFavourites && <div className="hotel-card__icon"></div> }
      <div className="hotel-card__info-wrapper">
        <div className="hotel-card__info-top">
          <h3 className={ isFavourites ? "hotel-card__title hotel-card__title--favourites" : "hotel-card__title"}>{hotel.hotelName}</h3>
          <button 
            className={isAddedToFavourites ? "hotel-card__favourites-icon hotel-card__favourites-icon--remove" : "hotel-card__favourites-icon hotel-card__favourites-icon--add"} 
            onClick={handleAddToFavouritesClick}
          ></button>
        </div>
        <p className="hotel-card__date">
          { `${checkInDateEn}, ${checkInDateYear} — ${daysAmount} ${wordEnding(daysAmount, ['день', 'дня', 'дней'])}` }
        </p>
        <div className="hotel-card__info-bottom">
          <div className={`hotel-card__stars hotel-card__${hotel.stars}stars`}></div>
          <div className="hotel-card__price">
            <span className="hotel-card__price-text">Price:</span>
            <span className="hotel-card__price-value">
              { new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0}).format(hotel.priceFrom) }
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;