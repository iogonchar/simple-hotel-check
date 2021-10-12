import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../form/Form'

import { useFormValidation } from '../../hooks/useFormValidation';

import { hotelsRequest } from '../../store/actions/hotels';

const SearchForm = () => {
  const locationRef = useRef('');
  const dateRef = useRef('');
  const dayRef = useRef('');

  const dispatch = useDispatch();

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Отправляю диспатч на поиск');

    const location = locationRef.current.value;

    const checkInDate = dateRef.current.value;
    const date = new Date(checkInDate);
    const daysAmount = dayRef.current.value;
    const checkOutDate = new Date(date.setDate(date.getDate() + Number(daysAmount))).toISOString().slice(0, 10);

    dispatch(hotelsRequest(location, checkInDate, checkOutDate, daysAmount));
  }

  return (
    <Form
      buttonText="Найти"
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <label className="form__field" htmlFor="location-input">
        <span className="form__label">Локация</span>
        <input 
          ref={locationRef}
          type="text"
          className="form__input"
          id="location-input" 
          name="location"
          required
          onChange={handleChange}
          value={values.location || ''}
        />
        <span className={ errors.location ? 'form__error' : 'form__error form__error--hidden' }>{ errors.location }</span>
      </label>

      <label className="form__field" htmlFor="date-input">
        <span className="form__label">Дата заселения</span>
        <input 
          ref={dateRef}
          type="date"
          className="form__input"
          id="date-input" 
          name="date"
          required
          min={new Date().toISOString().slice(0, 10)}
          onChange={handleChange}
          value={values.date || ''}
        />
        <span className={ errors.date ? 'form__error' : 'form__error form__error--hidden' }>{ errors.date }</span>
      </label>

      <label className="form__field" htmlFor="days-input">
        <span className="form__label">Количество дней</span>
        <input 
          ref={dayRef}
          type="number"
          className="form__input"
          id="days-input" 
          name="days"
          required
          min="1"
          onChange={handleChange}
          value={values.days || ''}
        />
        <span className={ errors.days ? 'form__error' : 'form__error form__error--hidden' }>{ errors.days }</span>
      </label>
    </Form>
  );
}

export default SearchForm;