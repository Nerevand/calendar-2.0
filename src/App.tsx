import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Weekly from 'pages/Weekly'
import MonthlyCalendar from 'pages/Calendar'

import './App.scss';


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <BrowserRouter>
          <Route exact path="/month" component={MonthlyCalendar} />
          <Route exact path="/week" component={Weekly} />

          <Redirect from='/' to='/month' />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
