import React from 'react';
import ReactDOM from 'react-dom';
import LocationApp from './pages/LocationApp';
import reportWebVitals from './reportWebVitals';
import './assets/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <LocationApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
