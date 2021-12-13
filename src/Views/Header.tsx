import React, { ReactElement } from 'react'


export default function Header(): ReactElement {
    return (
        <div className='Header' >
            <button>Previous Events</button>
            <h1>Meetup for testers</h1>
            <button>Create Event</button>
        </div>
    )
}
