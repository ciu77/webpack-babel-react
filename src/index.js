import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import data from './data/prova.json';

ReactDOM.render(
  <App dati={data} />,
  document.getElementById('app')
);
