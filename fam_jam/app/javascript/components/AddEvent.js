import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import Header from './Header/Header';

const AddEvent = (props) => {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ startTime, setStartTime ] = useState('')
    const [ endTime, setEndTime ] = useState('')
    const [ guests, setGuests ] = useState([])
    


    const onSubmit = (e) => {
        e.preventDefault()
        // console.log({title, description, location, startTime, endTime, guests})
        console.log(guests)


        
        Event.create({title, description, location, startTime, endTime, guests}) 
            .then((event) => {
                setTitle(title)
                setDescription(description)
                setLocation(location),
                setStartTime('2015-05-28T09:00:00-07:00'),
                setEndTime('2015-05-28T17:00:00-07:00'),
                setGuests(guests)
                props.history.push(`/events/${event.id}`)
                // console.log(event)
            })
        
        setTitle('')
        setDescription('')
        setLocation('')
        
    }

    return (
        <div className="container">
            <Header title={"Add Event"}/>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>
                        Event Title
                    </label>
                    <input type="text" placeholder="Add Task" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>
                        Event Description
                    </label>
                    <input type="text" placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>
                        Location
                    </label>
                    <input type="text" placeholder="Add Location" value={location} onChange={(e) => setLocation(e.currentTarget.value)} />
                </div>
                <div className="form-control">
                    <label>
                        Start Time
                    </label>
                    <input type="text" placeholder="Set Event Start" value={startTime} onChange={(e) => setStartTime(e.currentTarget.value)} />
                </div>
                <div className="form-control">
                    <label>
                        End Time
                    </label>
                    <input type="text" placeholder="Set Event End" value={endTime} onChange={(e) => setEndTime(e.currentTarget.value)} />
                </div>
                <div className="form-control">
                    <label>
                        Guests
                    </label>
                    <input type="text" placeholder="Guest Emails" value={guests} onChange={(e) => setGuests(e.currentTarget.value)} />
                </div>
                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        </div>
    )
}

export default AddEvent
