import React, { ReactElement, useState, useEffect} from 'react'


export default function CreateEvent(): ReactElement {
    const [name, setName] = useState<string>()
    const [date, setDate] = useState<any>()
    const [time,setTime] = useState<any>()
    const [where, setWhere] = useState<string>()
    const [max, setMax] = useState<any>()
    const [description, setDescription] = useState<string>()

    let localEvents: any = localStorage.getItem("Events")
    console.log(localEvents)

    let eventObject: { eventName: string | undefined; date: any; time: any; place: string | undefined; participants: number; participantsMax: number; description: string | undefined; comments: string[] };

    function dateToNumber(date: any){
    let newDate = date.replaceAll('-', '')
    newDate = parseInt(newDate);
    return newDate
}

    useEffect(() => {
    if(!localEvents){
        localStorage.setItem("Events", "[]")
    }
  }, [])

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
            comments: []
        } 
        console.log(eventObject)
        let my = JSON.parse(localEvents)
        console.log(my)
        my.unshift(eventObject)
        console.log(my)
        localStorage.setItem("Events", JSON.stringify(my))
        console.log(localStorage.getItem("Events"))
    }

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
           </form>
        </div>
    )
}
