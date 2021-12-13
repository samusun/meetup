import React from 'react';
import Header from "./Views/Header"
import './App.css';
import UpcomingEvents from './Views/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Header/>
      <UpcomingEvents />
    </div>
  );
}

export default App;
