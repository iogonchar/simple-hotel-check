import React from 'react';
import { useDispatch } from 'react-redux';

import { logoutRequest } from '../../store/actions/auth';

import './Header.css'

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutRequest());
  }

  return ( 
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <button className="logout-btn" onClick={handleLogout}>
        <span className="logout-btn__text">Выйти</span>
        <span className="logout-btn__image"></span>
      </button>
    </header>
  );
}

export default Header;