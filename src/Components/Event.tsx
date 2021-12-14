import React, { ReactElement, useState, useEffect } from 'react'
import Rate from "./Rate"
import Comments from "./Comments"
import "./Event.css"

interface Props {
    eventName: string
    time: Date
    place: string
    description: string
    previous: boolean
    participants: number
    participantsMax: number
    comments: { user: string, comment: string }[]
}

export default function Event({eventName, time, place, description, previous, participants, participantsMax, comments}: Props): ReactElement {
    const [showComments, setShowComments] = useState(false)
    const [attend, setAttend] = useState(participants)

    return (
        <div className="event" >
            <div className="left">
            <div className="eventHead">
                <h1>{eventName}</h1>
                <p>{time.toString()}</p>
            </div>
            <h3>Attendees: {attend}/{participantsMax}, Place: {place}</h3>
            <p>{description}</p>
            {(attend === participants + 1) && <p><b>You are attending</b></p>}
            <button onClick={() => setAttend(participants + 1)} >Attend</button>
            <button onClick={() => setShowComments(true)}>Comment</button>
            </div>
            <div className="right" >
            {showComments && <Comments eventName={eventName} comments={comments} /> }
            </div>
        </div>
    )
}
