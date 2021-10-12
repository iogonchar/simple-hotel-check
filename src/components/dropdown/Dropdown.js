import { useState } from "react";
import { useDispatch } from 'react-redux';

import { sortFavourites } from '../../store/actions/favourites';

import './Dropdown.css';

const Dropdown = ({ options, selectedInit }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({text: selectedInit, value: null});
  const [isActive, setIsActive] = useState(false);

  const handleSelectChange = (option) => {
    setSelected(option);
    setIsActive(false);
    dispatch(sortFavourites(option.value));
  }

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        {selected.text}
        {
          !selected.value 
            ? <span className="dropdown__both-arrows-inactive"></span>
            : selected.value === 'RATING_HIGH' || selected.value === 'PRICE_HIGH'
              ? <span className="dropdown__active-down-arrow"></span>
              : <span className="dropdown__active-up-arrow"></span>
        }
      </div>

      {
        isActive && <ul className="dropdown__list">
          {
            options.map((option) => (
              <div 
                key={option.value}
                className="dropdown__item"
                onClick={() => { handleSelectChange(option) }}
              >
                { option.text }
                {
                  option.value === 'RATING_HIGH' || option.value === 'PRICE_HIGH'
                    ? (<span className="dropdown__active-arrow-down"></span>)
                    : (<span className="dropdown__active-arrow-up"></span>) 
                }
              </div>
            ))
          }
        </ul>
      }
    </div>
  );
}

export default Dropdown;