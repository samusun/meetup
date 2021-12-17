import React, { ReactElement, useEffect, useState } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData"

export default function UpcomingEvents(): ReactElement {
const today = new Date();
const dateInOrder = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate()
const localEvents: any = localStorage.getItem("Events")
const [onlyNewEvents, setOnlyNewEvents] = useState([])


  function removeOldEvents(events: any, localEvents: any, todaysDate: any) {
      let newArray: any = []
      let mergedList: any = []
      localEvents ? mergedList = events.concat(localEvents) : mergedList = events
        for(let i = 0; i< mergedList.length; i++){
        if(mergedList[i].date > todaysDate){
            mergedList[i].previous = false;
            newArray.push(mergedList[i])
        }
    }
    sortByDate(newArray)
    setOnlyNewEvents(newArray)
  }

  function sortByDate(input: any){
input.sort((a: any, b: any) => (a.date < b.date ? -1 : 1));
  }

  useEffect(() => {
      let parsed = JSON.parse(localEvents)
    removeOldEvents(eventData, parsed, dateInOrder)
  }, [])

    return (
        <div className="container" >
            {onlyNewEvents && onlyNewEvents.map((data: any, index) => (
          <Event key={index} eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} previous={data.previous} rating={data.rating} comments = {data.comments} />
            ))}
    </div>
    )
}
