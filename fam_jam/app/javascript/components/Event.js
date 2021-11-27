import React, { useState, useEffect} from 'react'
import Header from './Header'
import { Event } from '../requests'
import moment from 'moment'

const EventShow = (props) => {
    const [event, setEvent] = useState({})

    useEffect(() => {
        Event.show(props.match.params.id)
            .then((eventData) => {
                console.log(eventData)
                setEvent(eventData)
            })
    }, [])
    
    return (
        <>
            {/* <Header title={"Event"}/> */}
            <div className="">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>Location: {event.location}</p>
                <p>Start: {moment(event.start_date).format('MMMM Do YYYY')}</p>
                <p>End: {moment(event.end_date).format('MMMM Do YYYY')}</p>
                
            </div>
            

        </>
    )
}

export default EventShow
