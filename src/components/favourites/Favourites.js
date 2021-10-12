import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromFavourites, sortFavourites } from '../../store/actions/favourites';

import Card from '../card/Card';

import './Favourites.css';

const Favourites = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleAddToFavourites = (hotel) => {
    dispatch(removeFromFavourites(hotel));
  }

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    dispatch(sortFavourites(e.target.value));
  }

  return (
    Boolean(store.favourites.favourites.length) && <div className="favourites">
      <h2 className="favourites__title">Избранное</h2>
      <div className="favourites__filters">
        <select onChange={handleSelectChange}>
          <option value="">-- Рейтинг --</option>
          <option value="RATING_HIGH">По убыванию</option>
          <option value="RATING_LOW">По возрастанию</option>
        </select>
        <select onChange={handleSelectChange}>
          <option value="">-- Цена --</option>
          <option value="PRICE_LOW">По возрастанию</option>
          <option value="PRICE_HIGH">По убыванию</option>
        </select>
      </div>
      <ul className="hotel-cards">
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