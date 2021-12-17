import React, { ReactElement, useState, useEffect} from 'react'


export default function CreateEvent(): ReactElement {
    const [name, setName] = useState<string>()
    const [date, setDate] = useState<any>()
    const [time,setTime] = useState<any>()
    const [where, setWhere] = useState<string>()
    const [max, setMax] = useState<any>()
    const [description, setDescription] = useState<string>()
    const [submitResponse, setSubmitResponse] = useState<string>()

    let localEvents: any = localStorage.getItem("Events")

    let eventObject: { eventName: string | undefined; date: any; time: any; place: string | undefined; participants: number; participantsMax: number; description: string | undefined; rating: any; comments: string[] };

    function dateToNumber(date: any){
    let newDate = date.replaceAll('-', '')
    newDate = parseInt(newDate);
    return newDate
}

function verifyInput (data: any) {
        if (data.eventName.length < 3) {
            setSubmitResponse("Your event name need to be longer than 3 characters")
            return false
        }
        else if(data.time.length < 4){
            setSubmitResponse("Please enter a time for your event")
            return false
        }
         else if(data.description.length < 10){
            setSubmitResponse("Your description of the event need to be a bit longer")
            return false
        }
        setSubmitResponse("Nice! Your event is successfully submitted")
        return eventObject
  }

  function submitEvent(event: any) {
        event.preventDefault(); 
        eventObject = {
            eventName: name,
            date: dateToNumber(date),
            time: time,
            place: where,
            participants: 0,
            participantsMax: parseInt(max),
            description: description,
            rating: [],
            comments: []
        } 
        let my = JSON.parse(localEvents)
        my.unshift(eventObject)
        localStorage.setItem("Events", JSON.stringify(my))
        setSubmitResponse("Nice! Your event is successfully submitted")
    }

    useEffect(() => {
    if(!localEvents){
        localStorage.setItem("Events", "[]")
    }
  }, [])

    return (
        <div className="createContainer">
           <form className="createEventForm"  action="">
               <input type="text" placeholder='Name of event' onChange={event => setName(event.target.value)} />
               <div>
               <input type="date" onChange={event => setDate(event.target.value)} />
               <input onChange={event => setTime(event.target.value)} type="time" />
               </div>
               <div>
               <input onChange={event => setWhere(event.target.value)} type="text" placeholder='Where' />
               <input type="number" placeholder='Maximum participants' onChange={event => setMax(event.target.value)} />
               </div>
               <textarea onChange={event => setDescription(event.target.value)} name="description" rows={5}
          cols={50}placeholder='Description'></textarea>
          <button onClick={submitEvent} >Submit new Event</button>
          <h3>{submitResponse}</h3>
           </form>
        </div>
    )
}

/*

import React, { ReactElement, useState, useEffect} from 'react'


export default function CreateEvent(): ReactElement {
    const [name, setName] = useState<string>()
    const [date, setDate] = useState<string | number>()
    const [time,setTime] = useState<string>()
    const [where, setWhere] = useState<string>()
    const [max, setMax] = useState<any>()
    const [description, setDescription] = useState<string>()
    const [submitResponse, setSubmitResponse] = useState<string>()

    let eventObject: { eventName: string | undefined; date: any; time: any; place: string | undefined; participants: number; participantsMax: number; description: string | undefined; comments: string[] };

    let localEvents: any = localStorage.getItem("Events")    
    console.log(localEvents)

    function dateToNumber(date: any){
    let newDate = date.replaceAll('-', '')
    return parseInt(newDate);
    }

    function verifyInput (data: any) {
        if (data.eventName.length < 3) {
            setSubmitResponse("Your event name need to be longer than 3 characters")
            return false
        }
        else if(data.time.length < 4){
            setSubmitResponse("Please enter a time for your event")
            return false
        }
         else if(data.description.length < 10){
            setSubmitResponse("Your description of the event need to be a bit longer")
            return false
        }
        console.log("Verification completed")
        return eventObject
  }
    function submitEvent(event: any) {
    // FINNS DE NÅN BÄTTRE TYP TILL EVENT ÄN ANY?
        event.preventDefault(); 
        eventObject = {
            eventName: name,
            date: dateToNumber(date),
            time: time,
            place: where,
            participants: 0,
            participantsMax: parseInt(max),
            description: description,
            comments: []
        } 
        if (verifyInput(eventObject)){
            console.log(localEvents)
        let my = JSON.parse(localEvents)
        console.log(my)
        my.unshift(eventObject)
        localStorage.setItem("Events", JSON.stringify(my))
        setSubmitResponse("Nice! Your event is successfully submitted")
        }
    }

    useEffect(() => {
    if(!localEvents){
        localStorage.setItem("Events", "[{name: 'Funni'}]")
    }
  }, [])

    return (
        <div className="createContainer">
           <form className="createEventForm"  action="">
               <input type="text" placeholder='Name of event' onChange={event => setName(event.target.value)} />
               <div>
               <input type="date" onChange={event => setDate(event.target.value)} />
               <input onChange={event => setTime(event.target.value)} type="time" />
               </div>
               <div>
               <input onChange={event => setWhere(event.target.value)} type="text" placeholder='Where' />
               <input type="number" placeholder='Maximum participants' onChange={event => setMax(event.target.value)} />
               </div>
               <textarea onChange={event => setDescription(event.target.value)} name="description" rows={5}
          cols={50}placeholder='Description'></textarea>
          <button onClick={submitEvent} >Submit new Event</button>
          <h3>{submitResponse}</h3>
           </form>
        </div>
    )
}
*/