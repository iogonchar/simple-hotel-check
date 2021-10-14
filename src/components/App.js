import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './login/Login';
import Header from './header/Header';
import Main from './main/Main';

import { authRequest } from '../store/actions/auth';

import './App.css';

const App = () => {
  const { isLoggedIn } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  // проверяем наличие токена
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authRequest());
    }
  }, [dispatch]);

  return (
    <div className="content">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          {
            isLoggedIn 
              ? <>
                  <Header />
                  <Main />
                </> 
              : <Redirect to="/login" />
          }
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
