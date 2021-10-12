import React from 'react';
import { useSelector } from 'react-redux';

import './Card.css'

const Card = ({ hotel, checkInDateEn, checkInDateYear, daysAmount, onAddToFavourites, isFavourites }) => {
  const store = useSelector((store) => store);

  const wordEnding = (count, endings) => {
    const countLastNum = count % 10;

    if (count > 10 && count < 20) { return endings[2]; }
    if (countLastNum > 1 && countLastNum < 5) { return endings[1]; }
    if (countLastNum === 1) { return endings[0]; }

    return endings[2]
  }

  const isAddedToFavourites = store.favourites.favourites.some(item => item.hotelId === hotel.hotelId);
  const handleAddToFavouritesClick = () => {
    onAddToFavourites(hotel, isAddedToFavourites);
  }

  return (
    <li className={ isFavourites ? "hotel-card hotel-card--favourites" : "hotel-card"}>
      { !isFavourites && <div className="hotel-card__icon"></div> }
      <div className="hotel-card__info">
        <h3 className="hotel-card__title">{ hotel.hotelName }</h3>
        <span className="hotel-card__date">{ `${checkInDateEn}, ${checkInDateYear} — ${daysAmount} ${wordEnding(daysAmount, ['день', 'дня', 'дней'])}` }</span>
        <div className={`hotel-card__stars hotel-card__${hotel.stars}stars`}></div>
      </div>
      <div className="hotel-card__additional">
        <button className={isAddedToFavourites ? "hotel-card__delete-from-favourites" : "hotel-card__add-to-favourites"} onClick={handleAddToFavouritesClick}></button>
        <div className="hotel-card__price">
          <span className="hotel-card__price-text">Price:</span>
          <span className="hotel-card__price-value">
            { new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0}).format(hotel.priceFrom) }
          </span>
          </div>
      </div>
    </li>
  );
}

export default Card;