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
      const mergedList = events.concat(localEvents)
      console.log(mergedList, mergedList.length)
        for(let i = 0; i< mergedList.length; i++){
        if(mergedList[i].date > todaysDate){
            mergedList[i].previous = false;
            newArray.push(mergedList[i])
        } else {
            console.log("item date: ", mergedList[i].date, "Todays date: ", todaysDate)
        }
    }
    setOnlyNewEvents(newArray)
  }

  useEffect(() => {
      console.log("UseEffect is running: ", localEvents, typeof localEvents)
      let parsed = JSON.parse(localEvents)
    removeOldEvents(eventData, parsed, dateInOrder)
  }, [])

console.log(onlyNewEvents)



    // NEED TO WRITE FILTER FUNCTION TO SORT DATE 
    return (
        <div className="container" >
            {onlyNewEvents && onlyNewEvents.map((data: any) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} previous={data.previous} comments = {data.comments} />
            ))}
    </div>
    )
}
