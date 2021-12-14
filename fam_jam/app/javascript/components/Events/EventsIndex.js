import React, { useState, useEffect } from "react";
import { Event } from "../../requests";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import * as FaIcons from "react-icons/fa";
import moment from "moment";
import Board from "../Board";
import Card from "../Card";
import "./Event.css";

const EventsIndex = ({ user }) => {
  const [events, setEvents] = useState([]);

  const iconStyles = {
    width: '20px',
    height: '20px',
    color: '#999'
  }

  useEffect(() => {
    // get events from the api using Event.index that we defined in request.js
    Event.index().then((data) => {
      // console.log(data)
      // update state with data we fetched from the API
      setEvents(data);
    });
  }, []);

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    Event.destroy(id);
  };

  const toggleReminder = (id) => {
    console.log("toggling", id);
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, reminder: !event.reminder } : event
      )
    );
    const currentEvent = events.find((item) => item.id === id);
    Event.update({ ...currentEvent, reminder: !currentEvent.reminder }, id);
  };

  return (
    <>
      <section className="notification-section">
        <div className="group-header">
          <div className="group-title">Today</div>
          <div className="group-date">{  }</div>
        </div>
        <div className="left-box">
          here's a new div
        </div>
        <div className="notification-grid">
          {events.map((e, index) => {
            return (
              <>
              <div className="avatar">
                <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
              </div>
              <div className="notification-card">
                <div className="notification-header">
                  <svg onClick={() => toggleReminder(e.id)} style={iconStyles} className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                  <div className="notification-title"><Link to={`/events/${e.id}`}>{e.title}</Link></div>
                  <div className="notification-time">{moment(e.start_date).format('HH:mm a')}</div>
                </div>
                <div className={`notification-content ${e.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(e.id)}>
                    {e.description}
                    {/* <svg style={iconStyles}aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> */}
                    <svg style={iconStyles} className="icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                </div>
              </div>
              
                {/* <Card key={index} id={`card-${index}`} className="card" draggable="true">
                <div className={`event ${e.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(e.id)} key={index}>
                    <h3>
                        
                        <FaIcons.FaTimes style={{color:'', cursor:'pointer'}} onClick={() => {deleteEvent(e.id)}}/>
                    </h3>
                    <p>Due: {moment(e.end_date).format('MMM Do, YYYY')}</p>
                </div>
                </Card> */}

                </>
            )
            })}
        </div>
        
          {/* 
          
            
              <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
              
            
            
          </div>
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
              <div className="notification-title">This is a title</div>
              <div className="notification-time">5:00pm</div>
            </div>
            <div className="notification-content"></div>
          </div>
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
              <div className="notification-title">This is a title</div>
              <div className="notification-time">5:00pm</div>
            </div>
            <div className="notification-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              aliquid similique tenetur illum expedita magni deleniti impedit.
              Corrupti earum nulla molestiae accusantium, cum error,
              voluptatibus et fugiat, quasi reprehenderit a!
            </div>
          </div>
        </div> */}
      </section>
    
    </>
    // <div classNameName='flexbox'>
    //     <Board id="board-1" className="board">
    //         {
    //         (events.length < 1) ?
    //         <Header title={"All Done"} />
    //         :
    //         <Header title={"To Do"} text={'Add Event'} color={'green'} />
    //         }
    //         {/* <Header title={"To Do"} text={'Add Event'} color={'green'}/> */}
    //         {events.map((e, index) => {
    //         return (
    //             <Card key={index} id={`card-${index}`} className="card" draggable="true">
    //             <div className={`event ${e.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(e.id)} key={index}>
    //                 <h3>
    //                     <Link to={`/events/${e.id}`}>{e.title}</Link>
    //                     <FaIcons.FaTimes style={{color:'', cursor:'pointer'}} onClick={() => {deleteEvent(e.id)}}/>
    //                 </h3>
    //                 <p>Due: {moment(e.end_date).format('MMM Do, YYYY')}</p>
    //             </div>
    //             </Card>
    //         )
    //         })}
    //     </Board>
    //     {
    //     (events.length > 0) ?
    //     <Board id="board-2" className="board">
    //         <Header title={"In Progress"} />
    //     </Board>
    //     :
    //     null
    //     }
    //     {/* <Board id="board-3" className="">
    //     </Board> */}
    // </div>
  );
};

export default EventsIndex;
