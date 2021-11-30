import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import Header from './Header/Header';

const AddEvent = (props) => {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({title, description, location})
        
        Event.create({title, description, location}) 
            .then((event) => {
                setTitle(title)
                setDescription(description)
                setLocation(location)
                props.history.push(`/events/${event.id}`)
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
                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        </div>
    )
}

export default AddEvent
