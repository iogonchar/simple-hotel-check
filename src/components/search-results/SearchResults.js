import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hotelsRequest } from '../../store/actions/hotels';
import { addToFavourites, removeFromFavourites } from '../../store/actions/favourites';
import Card from '../card/Card';

import './SearchResults.css'

const SearchResults = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const checkInDate = new Date(store.hotels.checkInDate)

  const checkInDateRu = checkInDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })

  const checkInDateEn = checkInDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long'
  })

  const wordEnding = (count, endings) => {
    const countLastNum = count % 10;

    if (count > 10 && count < 20) { return endings[2]; }
    if (countLastNum > 1 && countLastNum < 5) { return endings[1]; }
    if (countLastNum === 1) { return endings[0]; }

    return endings[2]
  }

  useEffect(() => {
    console.log('useeffect v search')
    const today = new Date();
    // console.log(today)
    const checkInDate = today.toISOString().slice(0, 10);
    const checkOutDate = new Date(today.setDate(today.getDate() + 1)).toISOString().slice(0, 10);
    const location = 'Москва';
    // console.log('USEEFFECT:', checkInDate, checkOutDate)
    dispatch(hotelsRequest(location, checkInDate, checkOutDate, 1));
  }, [dispatch]);

  const handleAddToFavourites = (hotel, isAddedToFavourites) => {
    // const isAddedToFavourites = store.favourites.favourites.some(item => item.hotelId === hotel.hotelId);

    console.log(isAddedToFavourites)
    if (!isAddedToFavourites) {
      hotel.checkInDateEn = checkInDateEn;
      hotel.checkInDateYear = checkInDate.getFullYear();
      hotel.daysAmount = store.hotels.daysAmount;

      dispatch(addToFavourites(hotel));
    } else {
      dispatch(removeFromFavourites(hotel));
    }
  }

  return ( 
    <div className="search-results">
      <div className="search-results__header">
        <h2 className="search-results__title">{ `Отели - ${store.hotels.hotelLocation}` }</h2>
        <p>{ `${checkInDateRu} ${checkInDate.getFullYear()}` }</p>
      </div>
      <p>Слайдер</p>
      <hr />
      <p>Добавлено в избранное: {store.favourites.favourites.length} {wordEnding(store.favourites.favourites.length, ['отель', 'отеля', 'отелей'])}</p>
      <ul className="hotel-cards">
      { 
        store.hotels.hotels.map((hotel) => (
          <Card 
            key={hotel.hotelId}
            hotel={hotel}
            checkInDateEn={checkInDateEn}
            checkInDateYear={checkInDate.getFullYear()}
            daysAmount={store.hotels.daysAmount}
            onAddToFavourites={handleAddToFavourites}
          />
        )) 
      }
      </ul>
    </div>
  );
}

export default SearchResults;