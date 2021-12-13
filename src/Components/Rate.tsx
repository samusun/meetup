import React, { ReactElement } from 'react'
import "./Rate.css"

interface Props {
    eventName: string
}

export default function Rate({eventName}: Props): ReactElement {

    function sendRating(rating: any) {
console.log(eventName, rating)
    }

    return (
    <form className="rating">
  <label>
    <input type="radio" name="stars" value="1" onClick={event => sendRating(event.target)} />
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="2" />
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="3" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" value="4" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="5" />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
</form>
    )
}
