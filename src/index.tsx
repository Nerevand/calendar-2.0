import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18n"
import { I18nextProvider } from "react-i18next"

import { CalendarProvider } from './Context'
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CalendarProvider>
        <App />
      </ CalendarProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
