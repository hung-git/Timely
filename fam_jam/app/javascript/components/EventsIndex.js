import React, { useState, useEffect } from 'react'
import { Event } from '../requests'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import * as FaIcons from 'react-icons/fa'
import moment from 'moment';
import Board from './Board'
import Card from './Card'

const EventsIndex = ({user}) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        // get events from the api using Event.index that we defined in request.js
        Event.index()
            .then((data) => {
                // console.log(data)
                // update state with data we fetched from the API
                setEvents(data)
            })
    }, [])

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id))
        Event.destroy(id) 
    }

    const toggleReminder = (id) => {
        console.log('toggling', id)
        setEvents(events.map((event) => event.id === id ? {...event, reminder: !event.reminder} : event))
        const currentEvent = events.find((item) => item.id === id)
        Event.update({...currentEvent, reminder: !currentEvent.reminder}, id)
      }
    
    return (
        <div className='flexbox'>
            <Board id="board-1" className="board">
                {
                (events.length < 1) ? 
                <Header title={"All Done"} /> 
                :
                <Header title={"To Do"} text={'Add Event'} color={'green'} />
                }
                {/* <Header title={"To Do"} text={'Add Event'} color={'green'}/> */}
                {events.map((e, index) => {
                return (
                    <Card key={index} id={`card-${index}`} className="card" draggable="true">
                    <div className={`event ${e.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(e.id)} key={index}> 
                        <h3>
                            <Link to={`/events/${e.id}`}>{e.title}</Link> 
                            <FaIcons.FaTimes style={{color:'', cursor:'pointer'}} onClick={() => {deleteEvent(e.id)}}/>
                        </h3>
                        <p>Due: {moment(e.end_date).format('MMM Do, YYYY')}</p>
                    </div>
                    </Card>
                )
                })}
            </Board>
            {
            (events.length > 0) ? 
            <Board id="board-2" className="board">
                <Header title={"In Progress"} />
            </Board>
            :
            null
            }
            {/* <Board id="board-3" className="">
            </Board> */}
        </div>
    )
}

export default EventsIndex
