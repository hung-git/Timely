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
          <div className="group-date">Saturday, Dec 11, 2021</div>
        </div>
        <div className="notification-grid">
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
              <div className="notification-title">This is a title</div>
              <div className="notification-time">5:00pm</div>
            </div>
            <div className="notification-content">
              The photo of you and your stinky shoe was liked
            </div>
          </div>
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
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
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
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
        </div>
      </section>
      <section className="notification-section">
        <div className="group-header">
          <div className="group-title">Yesterday</div>
          <div className="group-date">Friday, Dec 10, 2021</div>
        </div>
        <div className="notification-grid">
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
              <div className="notification-title">This is a title</div>
              <div className="notification-time">5:00pm</div>
            </div>
            <div className="notification-content">
              The photo of you and your stinky shoe was liked
            </div>
          </div>
          <div className="avatar">
            <img src="https://source.unsplash.com/mEZ3PoFGs_k" />
          </div>
          <div className="notification-card">
            <div className="notification-header">
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
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
              {/* <svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg> */}
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
        </div>
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
