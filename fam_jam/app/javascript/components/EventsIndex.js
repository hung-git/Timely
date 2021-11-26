import React, { useState, useEffect } from 'react'
import { Event } from '../requests'

const EventsIndex = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        //get events from the api using what we defined in request.js
        Event.index()
            .then((data) => {
                console.log(data)
                //update events in the state
                setEvents(data)
            })
    }, [])

    return (
        <div>
            {/* <h1>This is where the Events Index will go</h1> */}
            {events.map((e) => {
                console.log(e)
                return (
                <h1 key={e.id}>{e.title}</h1>
                )
            })}
        </div>
    )
}

export default EventsIndex
