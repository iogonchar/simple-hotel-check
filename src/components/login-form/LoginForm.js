import React from 'react';

import Form from '../form/Form'

import './LoginForm.css';

const LoginForm = () => {

  return (
    <Form
      title="Simple Hotel Check"
      buttonText="Войти"
    >
      <label className="form__field" for="email-input">
        <span className="form__label">Логин</span>
        <input className="form__input" id="email-input" />
        <span className="form__error form__error--hidden">Ошибка email</span>
      </label>
      

      <label className="form__field" for="password-input">
        <span className="form__label">Пароль</span>
        <input className="form__input" id="password-input" />
        <span className="form__error form__error--hidden">Ошибка пароль</span>
      </label>
      
    </Form>
  );
}

export default LoginForm;