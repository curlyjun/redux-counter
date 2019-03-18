import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App.js';
import { Provider } from 'react-redux';
import counterReducers from './reducers';

const store = createStore(counterReducers);

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider> , document.getElementById('root'));