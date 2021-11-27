import React from 'react'
import moment from 'moment'

const EventDetails = (props) => {
    return (
        <div className="">
            {/* <h3>{props.title}</h3> */}
            <p>{props.description}</p>
            <p>Location: {props.location}</p>
            <p>Start: {moment(props.start_date).format('MMMM Do YYYY')}</p>
            <p>End: {moment(props.end_date).format('MMMM Do YYYY')}</p>
            <p>Status: {props.is_complete ? 'Complete' : 'Not Complete'}</p> 
        </div>
    )
}

export default EventDetails
