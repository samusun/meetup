import React, { ReactElement } from 'react'
import Event from "../Components/Event"
import {eventData} from "../data/eventData.js"


export default function UpcomingEvents(): ReactElement {
    return (
        <div className="container" >
            {eventData.map((data) => (
          <Event eventName = {data.eventName} time = {data.time} place = {data.place} description = {data.description} previous = {data.previous} participants = { data.participants} participantsMax = {data.participantsMax} comments = {data.comments} />
            ))}
    </div>
    )
}
