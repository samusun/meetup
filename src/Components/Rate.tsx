import React, { ReactElement, useState, useEffect } from 'react'
import "./Rate.css"
import {eventData} from "../data/eventData"
import { stringify } from 'querystring'


interface Props {
    eventName: string
}

export default function Rate({eventName}: Props): ReactElement {
    const localEvents: any = localStorage.getItem("Events")
    const [ratingResponse, setRatingResponse ] = useState("")
    const [ avgRating, setAvgRating] = useState(3)
    const [merged, setMerged] = useState<any>([])
    const [newRating, setNewRating] = useState(3)
    const [average, setAverage] = useState<number>()
    
    function getAllEvents() {
      let mergedList: any = []
      localEvents ? mergedList = eventData.concat(JSON.parse(localEvents)) : mergedList = eventData
      setMerged(mergedList)
    }

    function findByName(events: any) {
        return events.eventName === eventName
    }

    function pushRating(ratedObject: any, rating: number){
        for (let i = 0; i< eventData.length; i++) {
            if(eventData[i].eventName === ratedObject.eventName){
            eventData[i].rating.push(rating)
            calcAverage(eventData[i].rating)
            }
        }
    }

    function pushLocalRating(ratedObject: any, rating: number){
        let newArray = JSON.parse(localEvents)
        for (let i = 0; i< newArray.length; i++) {
            if(newArray[i].eventName === ratedObject.eventName){
            newArray[i].rating.push(rating)
            calcAverage(newArray[i].rating)
            }
        }
        newArray = JSON.stringify(newArray)
        localStorage.setItem("Events", newArray)
    }

        function sendRating(rating: any) {
        getAllEvents();
        console.log(merged)
        let ratedObject = merged.find(findByName)
        let parsedRating = parseInt(rating.value)

        ratedObject.rating.push(parsedRating)
        removeAndReplace(ratedObject, parsedRating);
        setRatingResponse(`Thank you for rating ${rating.value}`)
    }

    function removeAndReplace(ratedObject: any, rating: number) {
        if(eventData.find(findByName)){
            pushRating(ratedObject, rating)
        }
        else {
            pushLocalRating(ratedObject, rating)
        }
    }

    function calcAverage(ratingArray: any) {
        console.log(ratingArray)
        let total = 0;
        let divider = 0
        for( let i = 0; i<ratingArray.length; i++){
            total += ratingArray[i]
            divider = i+1
        } 
        setAverage(Math.round(total/divider * 10) / 10)
    }

    useEffect(() => {
    getAllEvents();
  }, [])

    return (
    <>
    <div className="ratingBox" >
    <form className="rating">
  <label>
    <input type="radio" name="stars" value="1" onClick={event => sendRating(event.target)} />
    <span  data-testid="rate3" className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="2" onClick={event => sendRating(event.target)} />
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="3" onClick={event => sendRating(event.target)} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span  className="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" value="4" onClick={event => sendRating(event.target)} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" value="5" onClick={event => sendRating(event.target)} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
</form>
 {average && <div data-testid="average" >avg: {average}</div> }
</div>
 {average && <p data-testid="ratingResponse" className="ratingResponse" >{ratingResponse}</p> }
</>
    )
}
