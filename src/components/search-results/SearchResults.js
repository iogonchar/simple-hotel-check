import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../card/Card';
import Carousel from '../carousel/Carousel';

import { hotelsRequest } from '../../store/actions/hotels';
import { addToFavouritesRequest, removeFromFavouritesRequest } from '../../store/actions/favourites';
import { wordEnding } from '../../utils/utils';

import './SearchResults.css'
import arrowImg from '../../images/arrow.svg';

const SearchResults = () => {
  const { hotels, checkInDate, daysAmount } = useSelector((store) => store.hotels);
  const { favourites } = useSelector((store) => store.favourites);
  const dispatch = useDispatch();

  const currentCheckInDate = new Date(checkInDate)
  const checkInDateRu = currentCheckInDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
  const checkInDateEn = currentCheckInDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long'
  })

  useEffect(() => {
    const today = new Date();
    const checkInDate = today.toISOString().slice(0, 10);
    const checkOutDate = new Date(today.setDate(today.getDate() + 1)).toISOString().slice(0, 10);
    const location = 'Москва';

    dispatch(hotelsRequest({ location, checkInDate, checkOutDate, daysAmount: 1 }));
  }, [dispatch]);

  const handleFavouritesClick = (hotel, isAddedToFavourites) => {
    if (!isAddedToFavourites) {
      hotel.checkInDateEn = checkInDateEn;
      hotel.checkInDateYear = currentCheckInDate.getFullYear();
      hotel.daysAmount = daysAmount;

      dispatch(addToFavouritesRequest(hotel));
    } else {
      dispatch(removeFromFavouritesRequest(hotel));
    }
  }

  return ( 
    <div className="search-results">
      <div className="search-results__header">
        <h2 className="search-results__title">Отели<img src={arrowImg} alt="-" className="search-results__title-img" />{ hotels.hotelLocation }</h2>
        <p className="search-results__date">{ `${checkInDateRu} ${currentCheckInDate.getFullYear()}` }</p>
      </div>
      <Carousel />
      <p className="search-results__favourites">
        Добавлено в избранное: 
        <span className="search-results__favourites-number"> {favourites.length} </span>
        {wordEnding(favourites.length, ['отель', 'отеля', 'отелей'])}
      </p>
      <ul className="hotel-cards">
      { 
        hotels.map((hotel) => (
          <Card 
            key={hotel.hotelId}
            hotel={hotel}
            checkInDateEn={checkInDateEn}
            checkInDateYear={currentCheckInDate.getFullYear()}
            daysAmount={daysAmount}
            onFavouritesClick={handleFavouritesClick}
          />
        )) 
      }
      </ul>
    </div>
  );
}

export default SearchResults;