import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import * as FaIcons from 'react-icons/fa'
import moment from 'moment';

const EventsIndex = ({currentUser}) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        // get events from the api using Event.index that we defined in request.js
        Event.index()
            .then((data) => {
                // console.log(data)
                // update state with data we fetched from the API
                setEvents(data)
            })
    }, [])

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id))
        Event.destroy(id) 
    }
    
    return (
        <div className="container">
            {
            (events.length < 1) ? 
                <Header title={"There Are Currently No Events to Display"} /> 
                : 
                <Header title={"All Events"} text={'Add Event'} color={'green'} />
            }
            {events.map((e, index) => {
                return (
                    <div className={"event"} key={index}> 
                        <h3>
                            <Link to={`/events/${e.id}`}>{e.id} - {e.title}</Link> 
                            <FaIcons.FaTimes style={{color:'', cursor:'pointer'}} 
                                onClick={() => {
                                    deleteEvent(e.id)
                                }}/>
                        </h3>
                        <p>Due: {moment(e.end_date).format('MMM Do, YYYY')}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default EventsIndex
