import React, { ReactElement, useEffect, useState } from 'react';
import Event from '../Components/Event';
import { eventData } from '../data/eventData';
import { correctDate } from '../data/dateFormat';

export default function UpcomingEvents(): ReactElement {
  const localEvents: any = localStorage.getItem('Events');
  const [onlyNewEvents, setOnlyNewEvents] = useState<any>([]);
  const [onlyNewEventsCopy, setOnlyNewEventsCopy] = useState<any>([]);
  const [search, setSearch] = useState<any>(false);

  function filterEvents(e: any) {
    e.preventDefault();
    let filtered = onlyNewEventsCopy.filter(
      (event: { searchWords: any }) => event.searchWords === search
    );
    setOnlyNewEvents(filtered);
  }

  function removeOldEvents(events: any, localEvents: any, todaysDate: any) {
    let newArray: any = [];
    let mergedList: any = [];
    localEvents
      ? (mergedList = events.concat(localEvents))
      : (mergedList = events);
    for (let i = 0; i < mergedList.length; i++) {
      if (mergedList[i].date.toString() > todaysDate) {
        mergedList[i].previous = true;
        newArray.push(mergedList[i]);
      }
    }
    sortByDate(newArray);
    setOnlyNewEvents(newArray);
    setOnlyNewEventsCopy(newArray);
  }

  function sortByDate(input: any) {
    input.sort((a: any, b: any) => (a.date < b.date ? -1 : 1));
  }

  useEffect(() => {
    let parsed = JSON.parse(localEvents);
    removeOldEvents(eventData, parsed, correctDate);
  }, []);

  return (
    <div className='container'>
      <form action=''>
        <input
          type='text'
          placeholder='Search'
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={(event) => filterEvents(event)}>Search</button>
      </form>
      {onlyNewEvents &&
        onlyNewEvents.map((data: any, index: React.Key | null | undefined) => (
          <Event
            key={index}
            eventName={data.eventName}
            date={data.date}
            time={data.time}
            place={data.place}
            description={data.description}
            participants={data.participants}
            participantsMax={data.participantsMax}
            previous={false}
            rating={data.rating}
            comments={data.comments}
          />
        ))}
    </div>
  );
}
