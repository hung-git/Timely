import React, { useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Event } from '../requests'

const EventDetails = (props) => {
    

    return (
        <div className="">
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
            <br/>
            <Link to={"#"} className="btn"> Reminder On </Link>
        </div>
    )
}

export default EventDetails
