import React, { useState, useEffect} from 'react'
import Header from './Header/Header'
import { Event } from '../requests'
import EventDetails from './EventDetails'

const EventShow = (props) => {
    const [event, setEvent] = useState({})
    

    useEffect(() => {
        Event.show(props.match.params.id)
            .then((eventData) => {
                // console.log(eventData)
                setEvent(eventData)
            })
    }, [])

    // build this out later
    const toggleStatus = (params) => {
        console.log("need to implement toggle status")
    }

    return (
        <div className="container">
            <Header title={event.title} text={"Done"} onToggle={toggleStatus} />
            <EventDetails
                title = {event.title}
                description = {event.description}
                location = {event.location}
                start_date = {event.start_date}
                end_date = {event.end_date}
                status = {event.is_complete}
            />
        </div>
    )
}

export default EventShow
