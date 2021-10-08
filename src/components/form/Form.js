import React from 'react';

import './Form.css';

const Form = ({ title, buttonText, children }) => {

  return (
    <div className="form-container">
      <h2 className="form-container__title">{ title }</h2>
      <form className="form">
        { children }
        <button className="form__submit-btn">{ buttonText }</button>
      </form>
    </div>
  );
}

export default Form;