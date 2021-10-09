import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './login/Login';
import Main from './main/Main';

import { authUser } from '../store/actions/auth';

import './App.css';

const App = ({ isLoggedIn }) => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  // проверяем наличие токена
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authUser());
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
            store.login.isLoggedIn ? <Main /> : <Redirect to="/login" />
          }
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
