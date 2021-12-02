import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import Header from './Header/Header';
import PlacesAutocomplete from 'react-places-autocomplete';


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
        
        // setTitle('')
        // setDescription('')
        // setLocation('')
    }

    const handleChange = (value) => {
        setLocation(value)
    }

    return (
        <div className="container">
            <Header title={"Add Event"}/>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>
                        Event Name
                    </label>
                    <input type="text" placeholder="Add Event Name" value={title} onChange={(e) => setTitle(e.target.value)} />
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
                    <PlacesAutocomplete value={location} onChange={handleChange} onSelect={handleChange}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input {...getInputProps({ placeholder: "Enter Address ...", })} />
                                <div>
                                    {loading && <div>Loading ...</div>}
                                    {suggestions.map((suggestion, index) => {
                                        const style = suggestion.active ?
                                        { backgroundColor: 'lightgray', cursor: 'pointer' } :
                                        { backgroundColor: "white", cursor: 'pointer' }

                                        return (
                                            <div {...getSuggestionItemProps(suggestion, {style})}>
                                                {suggestion.description}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                    {/* <input type="text" placeholder="Add Location" value={location} onChange={(e) => setLocation(e.currentTarget.value)} /> */}
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
