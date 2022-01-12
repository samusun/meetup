import React, { ReactElement, useEffect, useState } from 'react';
import Event from '../Components/Event';
import { eventData } from '../data/eventData';
import { correctDate } from '../data/dateFormat';

export default function PreviousEvents(): ReactElement {
  const localEvents: any = localStorage.getItem('Events');
  const [onlyPreviousEvents, setOnlyPreviousEvents] = useState([]);

  function removeOldEvents(events: any, localEvents: any, todaysDate: any) {
    let newArray: any = [];
    let mergedList: any = [];
    localEvents
      ? (mergedList = events.concat(localEvents))
      : (mergedList = events);
    for (let i = 0; i < mergedList.length; i++) {
      if (mergedList[i].date.toString() < todaysDate) {
        mergedList[i].previous = true;
        newArray.push(mergedList[i]);
      }
    }
    sortByDate(newArray);
    setOnlyPreviousEvents(newArray);
  }

  function sortByDate(input: any) {
    input.sort((a: any, b: any) => (a.date < b.date ? -1 : 1));
  }

  useEffect(() => {
    let parsed = JSON.parse(localEvents);
    removeOldEvents(eventData, parsed, correctDate);
  }, []);

  // NEED TO WRITE FILTER FUNCTION TO SORT DATE
  return (
    <div className='container'>
      {onlyPreviousEvents &&
        onlyPreviousEvents.map((data: any, index) => (
          <Event
            key={index}
            eventName={data.eventName}
            date={data.date}
            time={data.time}
            place={data.place}
            description={data.description}
            participants={data.participants}
            participantsMax={data.participantsMax}
            rating={data.rating}
            comments={data.comments}
            previous={true}
          />
        ))}
    </div>
  );
}
