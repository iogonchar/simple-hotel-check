import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import history from './history';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import { authUser } from './store/actions/auth';

// ПОПРОБОВАТЬ ПЕРЕНЕСТИ ДИСПАТЧ В АПП
// ВЕРНУТЬ useDispatch, убрать mapState
// if (localStorage.getItem('token')) {
//   console.log('index')
//   store.dispatch(authUser());
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
