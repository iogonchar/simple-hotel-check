import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromFavourites } from '../../store/actions/favourites';

import Card from '../card/Card';
import Dropdown from '../dropdown/Dropdown';

import './Favourites.css';

const Favourites = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const ratingOptions = [
    { text: 'Рейтинг', value: 'RATING_HIGH' },
    { text: 'Рейтинг', value: 'RATING_LOW' }
  ]

  const priceOptions = [
    { text: 'Цена', value: 'PRICE_HIGH' },
    { text: 'Цена', value: 'PRICE_LOW' }
  ]

  const handleAddToFavourites = (hotel) => {
    dispatch(removeFromFavourites(hotel));
  }
  
  return (
    Boolean(store.favourites.favourites.length) && <div className="favourites">
      <h2 className="favourites__title">Избранное</h2>
      <div className="favourites__filters">
        <Dropdown 
          options={ratingOptions}
          selectedInit={'Рейтинг'}
        />
        <Dropdown 
          options={priceOptions}
          selectedInit={'Цена'}
        />
      </div>
      <ul className="hotel-cards hotel-cards__favourites">
        { 
          store.favourites.favourites.map((hotel) => (
            <Card 
              key={hotel.hotelId}
              hotel={hotel}
              checkInDateEn={hotel.checkInDateEn}
              checkInDateYear={hotel.checkInDateYear}
              daysAmount={hotel.daysAmount}
              onAddToFavourites={handleAddToFavourites}
              isFavourites={true}
            />
          )) 
        }
      </ul>
    </div>
  );
}

export default Favourites;