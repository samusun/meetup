import React, { ReactElement, useEffect, useState } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData"

export default function UpcomingEvents(): ReactElement {
const localEvents = localStorage.getItem("Events")
const [parsed, setParsed] = useState([])

    useEffect(() => {
    if(localEvents){
        setParsed(JSON.parse(localEvents))
    } 
  }, [])


    // NEED TO WRITE FILTER FUNCTION TO SORT DATE 
    return (
        <div className="container" >
            {parsed && parsed.map((data: any) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} comments = {data.comments} />
            ))}

            {eventData.map((data) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} comments = {data.comments} />
            ))}
    </div>
    )
}
