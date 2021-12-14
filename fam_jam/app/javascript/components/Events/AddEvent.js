import React, { useState } from 'react'
import { Event } from '../../requests'
import Header from '../Header/Header';
import PlacesAutocomplete from 'react-places-autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import './Event.css'

const AddEvent = (props) => {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ reminder, setReminder ] = useState(false)
    const [ startTime, setStartTime ] = useState(
            new Date()
        )
    const [ endTime, setEndTime ] = useState(
            new Date()
        )
    const [ guestList, setGuestList ] = useState([])
    const [ guest, setGuest ] = useState('')
    const [ errorMessages, setErrorMessages ] = useState([])
    const [modal, setModal] = useState(true);
    let history = useHistory()

  const toggleModal = () => {
    setModal(!modal);
  };

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log('logging from AddEvent.js: ', {title, description, location, startTime, endTime, guestList, reminder})
        console.log(guestList)
        

        const params = {
            title: title,
            description: description,
            location: location,
            start_date: startTime,
            end_date: endTime,
            reminder: reminder,
            guests: guestList.join(', ')
        }

        Event.create(params) 
            .then((event) => {
                if (event.errors) {
                    // console.log(`Event Errors: ${event.errors}`)
                    setErrorMessages([...errorMessages, {errors: event.errors}])
                } else {
                    props.history.push(`/events`)
                }
            })
    }

    const handleLocation = (value) => {
        setLocation(value)
    }

    const handleStartChange = (value) => {
        setStartTime(value)
    }

    const handleEndChange = (value) => {
        setEndTime(value)
    }
    
    const handleAddGuest = (e) => {
        e.preventDefault()
        
        setGuestList([...guestList, guest])
        
        // console.log(guestList)
        setGuest('')
    }

    const handleClick = () => {
        toggleModal()
        history.goBack()
    }
    
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    return (
        <>
        {modal && (
            <div className="modal">
            <div onClick={handleClick} className="overlay"></div>
            <div className="modal-content">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Header title={"Add Event"}/>
                <form className="add-form" onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>
                            Event Name
                        </label>
                        <input type="text" placeholder="Add Event Name" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
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
                        <PlacesAutocomplete value={location} onChange={handleLocation} onSelect={handleLocation}>
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
                                                <div key={index}>
                                                    <div {...getSuggestionItemProps(suggestion, {style})}>
                                                    {suggestion.description}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>
                    <div className="form-control">
                        <label>
                            Start Time
                        </label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker value={startTime} onChange={handleStartChange} 
                                minDate={new Date()}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="form-control">
                        <label>
                            End Time
                        </label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker value={endTime} onChange={handleEndChange} />
                        </MuiPickersUtilsProvider>
                    </div>        
                    <div>
                        <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" onChange={(e) => {setReminder(!reminder)}} />
                        <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Set Reminder</label>
                        <br/>
                    </div>
                    <div className="form-control">      
                        <input type="email" id="email" name="guest" placeholder="Add Guest" value={guest} onChange={e => setGuest(e.target.value)}/>
                    </div>
                    <button className="btn" onClick={handleAddGuest}>
                        + Guest
                    </button>  
                    <br/>
                    <input type="submit" value="Save Event" className="btn btn-block" />
                </form>
                {/* <pre>
                    {JSON.stringify(guestList, null, 2)}
                </pre> */}
            </div>
            </div>
        )}
        </>
    )
}

export default AddEvent
