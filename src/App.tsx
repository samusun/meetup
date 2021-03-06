import React, { useState } from 'react';
import './App.scss';
import UpcomingEvents from './Views/UpcomingEvents';
import PreviousEvents from './Views/PreviousEvents';
import CreateEvent from './Views/CreateEvent';
import image from './assets/pics/meetup.png';

function App() {
  const [view, setView] = useState<string>();
  const VIEW_UPCOMING = 'Upcoming events',
    VIEW_PREVIOUS = 'Previous events',
    VIEW_CREATE = 'Create event';

  let main = null;

  if (view === VIEW_UPCOMING) {
    main = <UpcomingEvents />;
  } else if (view === VIEW_PREVIOUS) {
    main = <PreviousEvents />;
  } else if (view === VIEW_CREATE) {
    main = <CreateEvent />;
  }

  return (
    <div className='App'>
      <nav className='Header'>
        <img
          src={image}
          alt=''
          data-test='upcoming-btn'
          onClick={() => setView(VIEW_UPCOMING)}
        />
        <div className='navbar'>
          <button
            onClick={() => setView(VIEW_PREVIOUS)}
            data-test='previous-btn'
            id='previous'
          >
            {' '}
            Previous events{' '}
          </button>
          <button
            onClick={() => setView(VIEW_UPCOMING)}
            data-test='previous-btn'
            id='upcoming'
          >
            {' '}
            Upcoming Events{' '}
          </button>
          <button
            data-test='create-button'
            id='create'
            onClick={() => setView(VIEW_CREATE)}
          >
            {' '}
            Create new event{' '}
          </button>
        </div>
      </nav>
      <h2 className='mainHeader'>{view}</h2>
      <main>{main}</main>
    </div>
  );
}

export default App;
