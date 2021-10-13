import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Form from '../form/Form';

import { hotelsRequest } from '../../store/actions/hotels';

const SearchForm = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const location = getValues('location')
    const checkInDate = getValues('date')
    const date = new Date(checkInDate);
    const daysAmount = getValues('days');
    const checkOutDate = new Date(date.setDate(date.getDate() + Number(daysAmount))).toISOString().slice(0, 10);

    dispatch(hotelsRequest(location, checkInDate, checkOutDate, daysAmount));
  };

  return (
    <Form
      buttonText="Найти"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form__field" htmlFor="location-input">
        <span className={ errors.location ? 'form__label form__label--error' : 'form__label' }>Локация</span>
        <input 
          className={ errors.location ? 'form__input form__input--error' : 'form__input' }
          id="location-input"
          type="text"
          {...register("location", { required: true })} 
        />
        <span className={ errors.location ? 'form__error' : 'form__error form__error--hidden' }>
          {errors.location?.type === 'required' && "Поле должно быть заполнено"}
        </span>
      </label>

      <label className="form__field" htmlFor="date-input">
        <span className={ errors.date ? 'form__label form__label--error' : 'form__label' }>Дата заселения</span>
        <input 
          className={ errors.date ? 'form__input form__input--error' : 'form__input' }
          id="date-input"
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          {...register("date", { required: true })} 
        />
        <span className={ errors.date ? 'form__error' : 'form__error form__error--hidden' }>
          {errors.date?.type === 'required' && "Выберите дату"}
        </span>
      </label>

      <label className="form__field" htmlFor="days-input">
        <span className={ errors.days ? 'form__label form__label--error' : 'form__label' }>Количество дней</span>
        <input 
          className={ errors.days ? 'form__input form__input--error' : 'form__input' }
          id="days-input"
          type="number"
          min="1"
          {...register("days", { required: true, min: 1 })} 
        />
        <span className={ errors.days ? 'form__error' : 'form__error form__error--hidden' }>
          {errors.days?.type === 'required' && "Поле должно быть заполнено"}
        </span>
      </label>
    </Form>
  );
}

export default SearchForm;