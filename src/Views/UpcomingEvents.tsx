import React, { ReactElement } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData"

export default function UpcomingEvents(): ReactElement {

    // NEED TO WRITE FILTER FUNCTION TO SORT DATE 
    return (
        <div className="container" >
            {eventData.map((data) => (
          <Event eventName = {data.eventName} date= { data.date} time = {data.time} place = {data.place} description = {data.description} participants = { data.participants} participantsMax = {data.participantsMax} comments = {data.comments} />
            ))}
    </div>
    )
}
