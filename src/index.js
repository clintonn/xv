import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'
import routes from './routes'
import App from './App';
import reducer from './reducers/'
import './index.css';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('container')
);
