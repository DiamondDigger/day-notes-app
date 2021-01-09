import React from 'react';
import { Counter } from './features/counter/Counter';
import  Calendar  from './features/calendar/Calendar';
import './App.css';
import GridCalendar from './features/GridCalendar/GridCalendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Calendar /> */}
        <GridCalendar />
      </header>
    </div>
  );
}

export default App;
