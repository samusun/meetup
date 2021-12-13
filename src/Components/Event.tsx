import React, { ReactElement, useState } from 'react'
import Rate from "./Rate"
import Comments from "./Comments"
import "./Event.css"

interface Props {
    eventName: string
    time: number
    place: string
    description: string
    previous: boolean
    participants: number
    participantsMax: number
    comments: { user: string, comment: string }[]
}

export default function Event({eventName, time, place, description, previous, participants, participantsMax, comments}: Props): ReactElement {
    const [showComments, setShowComments] = useState(false)
    return (
        <div className="event" >
            <div className="left">
            <div className="eventHead">
                <h1>{eventName}</h1>
                <p>Attendees: {participants}/{participantsMax}</p>
            </div>
            <h3>Time: {time} Place: {place}</h3>
            <p>{description}</p>
            <button>Attend</button>
            <button onClick={() => setShowComments(true)}>Comment</button>
            </div>
            <div className="right" >
            {showComments && <Comments comments={comments} /> }
            </div>
        </div>
    )
}
