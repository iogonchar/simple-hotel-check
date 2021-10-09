import React from 'react';
import { useDispatch } from 'react-redux';

import Form from '../form/Form'

import { useFormValidation } from '../../hooks/useFormValidation';

import { authRequest } from '../../store/actions/auth';

import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Пытаюсь войти, отправляю диспатч');

    dispatch(authRequest());
  }

  return (
    <Form
      title="Simple Hotel Check"
      buttonText="Войти"
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <label className="form__field" htmlFor="email-input">
        <span className={ errors.email ? 'form__label form__label--error' : 'form__label' }>Логин</span>
        <input 
          type="email"
          className={ errors.email ? 'form__input form__input--error' : 'form__input' }
          id="email-input" 
          name="email"
          required
          onChange={handleChange}
          value={values.email || ''}
        />
        <span className={ errors.email ? 'form__error' : 'form__error form__error--hidden' }>{ errors.email }</span>
      </label>
      

      <label className="form__field" htmlFor="password-input">
        <span className={ errors.password ? 'form__label form__label--error' : 'form__label' }>Пароль</span>
        <input 
          type="password"
          className={ errors.password ? 'form__input form__input--error' : 'form__input' }
          id="password-input"
          name="password"
          required 
          minLength="8"
          onChange={handleChange}
          value={values.password || ''}
        />
        <span className={ errors.password ? 'form__error' : 'form__error form__error--hidden' }>{ errors.password }</span>
      </label>
      
    </Form>
  );
}

export default LoginForm;