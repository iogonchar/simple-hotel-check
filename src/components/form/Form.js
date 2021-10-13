import React from 'react';

import './Form.css';

const Form = ({ title, buttonText, onSubmit, children }) => {

  return (
    <div className="form-container">
      { title && <h2 className="form-container__title">{ title }</h2> }
      <form className="form" onSubmit={onSubmit}>
        { children }
        <button className="form__submit-btn">{ buttonText }</button>
      </form>
    </div>
  );
}

export default Form;