import React from 'react';

import './Form.css';

const Form = ({ title, buttonText, onSubmit, isDisabled, children }) => {

  return (
    <div className="form-container">
      <h2 className="form-container__title">{ title }</h2>
      <form className="form" onSubmit={onSubmit} noValidate>
        { children }
        <button className="form__submit-btn" disabled={isDisabled}>{ buttonText }</button>
      </form>
    </div>
  );
}

export default Form;