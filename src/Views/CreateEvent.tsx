import React, { ReactElement, useState, useEffect } from 'react';

export default function CreateEvent(): ReactElement {
  const [name, setName] = useState<any>();
  const [date, setDate] = useState<any>();
  const [time, setTime] = useState<any>();
  const [where, setWhere] = useState<string>();
  const [max, setMax] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [submitResponse, setSubmitResponse] = useState<string>();
  const [searchWords, setSearchWords] = useState<string>();

  let localEvents: any = localStorage.getItem('Events');

  let eventObject: {
    eventName: string | undefined;
    date: any;
    time: any;
    place: string | undefined;
    participants: number;
    participantsMax: number;
    description: any | undefined;
    rating: any;
    comments: string[];
    searchWords: any;
  };

  function dateToNumber(date: any) {
    if (date) {
      let newDate = date.replaceAll('-', '');
      newDate = parseInt(newDate);
      return newDate;
    }
  }

  function verifyInput(
    name: string,
    time: string,
    place: any,
    participants: number,
    description: string,
    date: string,
    searchWords: any
  ) {
    if (!name || name.length < 3) {
      setSubmitResponse('Your event name need to be longer than 3 characters');
      return false;
    } else if (!place || place.length < 2) {
      setSubmitResponse('Please enter a valid place');
      return false;
    } else if (!participants) {
      setSubmitResponse('Please enter a valid number of participants');
      return false;
    } else if (!description || description.length < 10) {
      setSubmitResponse(
        'Your description of the event need to be a bit longer'
      );
      return false;
    } else if (searchWords || searchWords.length < 2) {
      setSubmitResponse('Please enter some valid search words for your event');
    }
    setSubmitResponse('Nice! Your event is successfully submitted');
    return true;
  }

  function submitEvent(event: any) {
    event.preventDefault();
    if (verifyInput(name, time, where, max, description, date, searchWords)) {
      eventObject = {
        eventName: name,
        date: dateToNumber(date),
        time: time,
        place: where,
        participants: 0,
        participantsMax: parseInt(max),
        description: description,
        rating: [],
        comments: [],
        searchWords: searchWords
      };
      let my = JSON.parse(localEvents);
      my.unshift(eventObject);
      localStorage.setItem('Events', JSON.stringify(my));
      setSubmitResponse('Nice! Your event is successfully submitted');
    }
  }

  useEffect(() => {
    if (!localEvents) {
      localStorage.setItem('Events', '[]');
    }
  }, []);

  return (
    <div className='createContainer'>
      <form className='createEventForm' action=''>
        <input
          type='text'
          placeholder='Name of event'
          onChange={(event) => setName(event.target.value)}
          data-testid='eventName'
        />
        <div>
          <input
            type='date'
            onChange={(event) => setDate(event.target.value)}
            data-testid='date'
          />
          <input
            onChange={(event) => setTime(event.target.value)}
            type='time'
            data-testid='time'
          />
        </div>
        <div>
          <input
            onChange={(event) => setWhere(event.target.value)}
            type='text'
            placeholder='Where'
            data-testid='location'
          />
          <input
            type='number'
            placeholder='Maximum participants'
            onChange={(event) => setMax(event.target.value)}
            data-testid='participants'
          />
        </div>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          name='description'
          rows={5}
          cols={50}
          placeholder='Description'
          data-testid='description'
        ></textarea>
        <input
          type='text'
          placeholder='Enter one search word'
          data-testid='searchWord'
          onChange={(event) => setSearchWords(event.target.value)}
        />
        <button onClick={submitEvent} data-testid='submit'>
          Submit new Event
        </button>
        <h3 data-testid='response'>{submitResponse}</h3>
      </form>
    </div>
  );
}
