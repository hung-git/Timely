import React, { useState, useEffect } from "react";
import { Event } from "../requests";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import moment from "moment";
import "./myStyles.css";
import FilterBox from "./FilterBox";
import AddEvent from "./AddEvent";


const EventsIndex = ({ user }) => {
  const [ events, setEvents ] = useState([])
  const [ reminderFilter, setReminderFilter ] = useState(false)
  const [ completedFilter, setCompletedFilter ] = useState(false)
  const [ overdueFilter, setOverdueFilter ] = useState(false)
  const [ selected, setSelected ] = useState(null)


  useEffect(() => {
    // get events from the api using Event.index that we defined in request.js
    Event.index().then((data) => {
      // console.log(data)
      // update state with data we fetched from the API
      setEvents(data);
    });
  }, []);

  const today = new Date()

  const toggleDetails = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    Event.destroy(id);
  }

  const handleComplete = (id) => {
    // console.log('marked complete!')
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, is_complete: !event.is_complete, reminder: false } : event
      )
    );
    const currentEvent = events.find((item) => item.id === id);
    
    Event.update({ ...currentEvent, is_complete: !currentEvent.is_complete, reminder: currentEvent.reminder = false }, id);
  }

  const handleReminder = (id) => {
    // console.log("toggling", id);
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, reminder: !event.reminder, is_complete: false } : event
      )
    );
    const currentEvent = events.find((item) => item.id === id);
    Event.update({ ...currentEvent, reminder: !currentEvent.reminder, is_complete: false }, id);
  }

  const handleReminderFilter = () => {
    setReminderFilter(!reminderFilter)
  }

  const handleCompletedFilter = () => {
    // console.log('completed filter enabled')
    setCompletedFilter(!completedFilter)
  }

  return (
    <>
      <div className="column-container">
        <div className="left-column">
          <FilterBox 
              handleReminderFilter={handleReminderFilter}
              handleCompletedFilter={handleCompletedFilter}
            />
        </div>
        <section className="notification-section first-section">
          <div className="group-header">
            <div className="group-title">Today</div>
            <div className="group-date">{ moment(today).format("dddd, MMM D, YYYY") }</div>
          </div>
          <div className="accordion">
            <div className="notification-grid">
              {events.filter(e => {
                if ( !reminderFilter && !completedFilter && !overdueFilter ) {
                  return e 
                } else if ( completedFilter ) {
                  return e.is_complete
                } else if ( reminderFilter ) {
                  return e.reminder
                } else if ( overdueFilter ) {
                  return e.overdue
                }    
              }).map((e, index) => {
                return (
                  <>
                    <div className="avatar">
                      <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
                    </div>
                    <div className="notification-card">
                      <div className="notification-header">
                        <svg onClick={() => handleReminder(e.id)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className={e.reminder ? `reminder icon svg-inline--fa fa-bell fa-w-14` : "icon svg-inline--fa fa-bell fa-w-14"} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                        {/* <div className="notification-title"><Link to={`/events/${e.id}`}>{e.title}</Link></div> */}
                        <div className="notification-title" onClick={() => toggleDetails(index)}>{e.title}
                          <span>{selected === index ? '-' : '+'}</span>
                        </div>
                        <div className="notification-time">{moment(e.start_date).format('hh:mm a')}</div>
                      </div>
                      <div className={`notification-content ${e.reminder ? 'reminder' : ''}`}>
                        {e.description}
                        <div className="">
                          <svg onClick={() => handleComplete(e.id)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className={`${e.is_complete ? 'complete' : null } icon svg-inline--fa fa-check-circle fa-w-16`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                          <svg onClick={() => handleDelete(e.id)} aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="icon svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                        </div>
                      </div>
                      <div className={selected === index ? 'notification-details show' : 'notification-details'}>
                        <h3>More Details</h3>
                        <p>Start: {moment(e.start_date).format(' MMM D, YYYY, hh:mm a')}</p>
                        <p>End: {moment(e.end_date).format(' MMM D, YYYY, hh:mm a')}</p>
                        <p>Guests: {e.guests}</p>
                      </div>
                    </div>
                  </>
                )
                })}
            </div>
          </div>
        </section>
        <div>
        </div>
        <section>
          <div className="group-header">
            <div className="group-title">Yesterday</div>
            <div className="group-date">{ moment(today.setDate(today.getDate() - 1)).format("dddd, MMM D, YYYY") }</div>
          </div>            
        </section>
      </div>
    </>
  );
};

export default EventsIndex;
