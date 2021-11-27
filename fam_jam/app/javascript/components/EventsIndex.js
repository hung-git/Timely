import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import { Link } from 'react-router-dom'
import Header from './Header'

const EventsIndex = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        // get events from the api using what we defined in request.js
        Event.index()
            .then((data) => {
                // console.log(data)
                // update events in the state
                setEvents(data)
            })
    }, [])

    return (
        <div className="">
            <Header title={("All Events")}/>
            {/* <h1>This is where the Events Index will go</h1> */}
            {events.map((e) => {
                return (
                <h1 key={e.id}>
                    <Link to={`/events/${e.id}`}>{e.title}</Link>
                </h1>
                )
            })}
        </div>
    )
}

export default EventsIndex
