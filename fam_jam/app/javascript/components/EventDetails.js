import React from 'react'
import moment from 'moment'

const EventDetails = (props) => {
    return (
        <div className="">
            {/* <h3>{props.title}</h3> */}
            <p>Description: {props.description}</p>
            <p>Location: {props.location}</p>
            <p>Start: {moment(props.start_date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <p>End: {moment(props.end_date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <p>Status: {props.is_complete ? 'Complete' : 'Not Complete'}</p> 
            <p>Guests: {props.guests}</p>
        </div>
    )
}

export default EventDetails
