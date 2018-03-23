import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import store from './redux/store';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('container')
);
