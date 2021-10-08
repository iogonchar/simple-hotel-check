import React from 'react';

import LoginForm from '../login-form/LoginForm';

import './Login.css';

const Login = () => {

  return (
    <section className="login">
      <div className="login-content">
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;