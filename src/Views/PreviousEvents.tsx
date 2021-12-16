import React, { ReactElement, useEffect, useState } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData"

export default function UpcomingEvents(): ReactElement {
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
        } else {
            console.log("item date: ", mergedList[i].date, "Todays date: ", todaysDate)
        }
    }
    setOnlyPreviousEvents(newArray)
  }

  useEffect(() => {
      console.log("UseEffect is running: ", localEvents, typeof localEvents)
      let parsed = JSON.parse(localEvents)
    removeOldEvents(eventData, parsed, dateInOrder)
  }, [])

console.log(onlyPreviousEvents)



    // NEED TO WRITE FILTER FUNCTION TO SORT DATE 
    return (
        <div className="container" >
            {onlyPreviousEvents && onlyPreviousEvents.map((data: any) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} comments = {data.comments} previous = {data.previous} />
            ))}
    </div>
    )
}
