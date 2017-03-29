import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import routes from './routes'
import reducer from './reducers/'
import './index.css';

const store = applyMiddleware(reduxPromise)(createStore)(reducer)

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('xv')
);
