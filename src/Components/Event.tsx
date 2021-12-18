import React, { ReactElement, useState, useEffect } from 'react'
import Rate from "./Rate"
import Comments from "./Comments"
import "./Event.scss"
import { Props } from "../interface/interface"


export default function Event({eventName, date, time, place, description, participants, participantsMax, previous, comments}: Props): ReactElement {
    
    const [showComments, setShowComments] = useState(false)
    const [attend, setAttend] = useState(participants)
    const [attendBtn, setAttendBtn] = useState("Attend")
    function setAttending() {
        if (attend === participants + 1){
            setAttend(participants)
            setAttendBtn("Attend")
        } else {
            setAttend(participants + 1)
            setAttendBtn("Regret")
        }
    }

    return (
        <div className="event" >
            <div className="left">
                <h1>{eventName}</h1>
                <p>{date}, {time}</p>
            <h3>Attendees: {attend}/{participantsMax}, Place: {place}</h3>
            <p>{description}</p>
            {(attend === participants + 1) && <p data-testid="attendResponse" ><b>You are attending</b></p>}
            <button data-testid="attend" className="button" disabled={previous} onClick={() => setAttending()} >{attendBtn}</button>
            <button data-testid="comment" className="button" onClick={() => setShowComments(!showComments)}>Comment</button>
            <Rate eventName={eventName}/>
            </div>
            <div className="right" >
            {showComments && <Comments  eventName={eventName} comments={comments} /> }
            </div>
        </div>
    )
}
