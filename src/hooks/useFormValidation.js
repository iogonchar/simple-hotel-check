import { useState } from 'react';

export const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({
      ...values,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: target.validationMessage
    });

    setIsValid(target.closest('.form').checkValidity());
  }

  return {
    values,
    errors,
    isValid,
    handleChange
  };
};