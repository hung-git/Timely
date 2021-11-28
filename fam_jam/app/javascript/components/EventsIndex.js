import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import * as FaIcons from 'react-icons/fa'
import moment from 'moment';
import AddEvent from './AddEvent'

const EventsIndex = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        // get events from the api using what we defined in request.js
        Event.index()
            .then((data) => {
                console.log(data)
                // update events in the state
                setEvents(data)
            })
    }, [])

    const createEvent = (params) => {
        setEvents(
            [
                ...events,
                {
                    id: (Math.max(...events.map(event => event.id)) + 1),
                    ...params
                }
            ]
        )
    }

    const deleteEvent = (id) => {
        console.log('shit')
        setEvents(
            events.filter(event => event.id !== id)
        )
        Event.destroy(id)
        
    }
    
    return (
        <div className="">
            {/* <AddEvent createEvent={createEvent} /> */}
            <Header title={"All Events"} text={'Hello'} />
            {/* <h1>This is where the Events Index will go</h1> */}
            {events.map((e) => {
                return (
            
                <div className={"event"} key={e.id}> 
                <h3>
                    <Link to={`/events/${e.id}`}>{e.title}</Link> 
                    <FaIcons.FaTimes style={{color:'red', cursor:'pointer'}} 
                        onClick={() => {
                            deleteEvent(e.id)
                            // console.log("shit")
                        }}/>
                    
                </h3>
                <p>Due: {moment(e.end_date).format('MMM Do, YYYY')}</p>
                {/* <p>{e.end_date}</p> */}
                </div>
                )
            })}
            
        </div>
    )
}

export default EventsIndex
