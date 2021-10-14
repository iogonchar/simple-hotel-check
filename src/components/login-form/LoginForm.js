import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Form from '../form/Form';

import { loginRequest } from '../../store/actions/auth';

import './LoginForm.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(loginRequest());
  };

  return (
    <Form
      title="Simple Hotel Check"
      buttonText="Войти"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form__field" htmlFor="email-input">
        <span className={ errors.email ? 'form__label form__label--error' : 'form__label' }>Логин</span>
        <input 
          className={ errors.email ? 'form__input form__input--error' : 'form__input' }
          id="email-input"
          type="email"
          {...register("email", {required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i})} 
        />
        <span className={ errors.email ? 'form__error' : 'form__error form__error--hidden' }>
          {errors.email?.type === 'required' && "Поле должно быть заполнено"}
          {errors.email?.type === 'pattern' && "Некорректный email"}
        </span>
      </label>

      <label className="form__field" htmlFor="password-input">
        <span className={ errors.password ? 'form__label form__label--error' : 'form__label' }>Пароль</span>
        <input
          className={ errors.password ? 'form__input form__input--error' : 'form__input' }
          id="password-input"
          type="password"
          {...register("password", {required: true, minLength: 8})} 
        />
        <span className={ errors.password ? 'form__error' : 'form__error form__error--hidden' }>
          {errors.password?.type === 'required' && "Поле должно быть заполнено"}
          {errors.password?.type === 'minLength' && "Минимальная длина пароля: 8 символов"}
        </span>
      </label>
    </Form>
  );
}

export default LoginForm;
