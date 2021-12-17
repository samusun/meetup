import React, { ReactElement, useEffect, useState } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData"

export default function PreviousEvents(): ReactElement {
const today = new Date();
const dateInOrder = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate()
const localEvents: any = localStorage.getItem("Events")
const [onlyPreviousEvents, setOnlyPreviousEvents] = useState([])


  function removeOldEvents(events: any, localEvents: any, todaysDate: any) {
      let newArray: any = []
      let mergedList: any = []
      localEvents ? mergedList = events.concat(localEvents) : mergedList = events
        for(let i = 0; i< mergedList.length; i++){
        if(mergedList[i].date < todaysDate){
            mergedList[i].previous = true;
            newArray.push(mergedList[i])
        }
    }
    setOnlyPreviousEvents(newArray)
  }

  useEffect(() => {
      let parsed = JSON.parse(localEvents)
    removeOldEvents(eventData, parsed, dateInOrder)
  }, [])

    // NEED TO WRITE FILTER FUNCTION TO SORT DATE 
    return (
        <div className="container" >
            {onlyPreviousEvents && onlyPreviousEvents.map((data: any) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} rating = {data.rating} comments = {data.comments} previous = {data.previous} />
            ))}
    </div>
    )
}
