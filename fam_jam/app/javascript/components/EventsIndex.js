import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import * as FaIcons from 'react-icons/fa'
import moment from 'moment';

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
            
                <div className={"event"} key={e.id}> 
                <h3>
                    <Link to={`/events/${e.id}`}>{e.title}</Link> 
                    <FaIcons.FaTimes style={{color:'', cursor:'pointer'}} 
                        onClick={() => {
                            console.log('trying to delete')
                        }}/>
                </h3>
                <p>{moment(e.end_date).format('MMMM Do YYYY')}</p>
                {/* <p>{e.end_date}</p> */}
                </div>
                )
            })}
        </div>
    )
}

export default EventsIndex
