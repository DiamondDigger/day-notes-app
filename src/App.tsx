import React from 'react';
import { Counter } from './features/counter/Counter';
import  Calendar  from './features/calendar/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
