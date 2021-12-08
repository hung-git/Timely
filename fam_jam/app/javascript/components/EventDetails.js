import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const EventDetails = (props) => {
    return (
        <div className="">
            {console.log("logging from EventDetails.js: ", props.guests)}
            {/* <h3>{props.title}</h3> */}
            <p><strong>Description:</strong> {props.description}</p>
            <br/>
            <p>Location: <Link to={'#'}>{props.location}</Link> </p>
            <br/>
            <p>Start: {moment(props.start_date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <br/>
            <p>End: {moment(props.end_date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <br/>
            <p>Reminder: {props.reminder ? "Enabled" : 'No Reminder'}</p> 
            <br/>
            <p>Guests: {props.guests}</p>
        </div>
    )
}

export default EventDetails
