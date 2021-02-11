import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from "react-i18next"

import Weekly from 'pages/Weekly'
import MonthlyCalendar from 'pages/Calendar'
import i18n from "i18n"

import { CalendarProvider } from './Context'
import './App.scss';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <CalendarProvider>
        <div className="app">
          <div className="wrapper">
            <BrowserRouter>
              <Route exact path='/calendar-2.0/month' component={MonthlyCalendar} />
              <Route exact path='/calendar-2.0/week' component={Weekly} />

              <Redirect from='/' to="/calendar-2.0/month" />
            </BrowserRouter>
          </div>
        </div>
      </ CalendarProvider>
    </I18nextProvider>
  );
}

export default App;
