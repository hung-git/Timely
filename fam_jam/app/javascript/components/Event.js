import React, { useState, useEffect} from 'react'
import Header from './Header/Header'
import { Event } from '../requests'
import EventDetails from './EventDetails'

const EventShow = (props) => {
    const [event, setEvent] = useState({})
    
    const gapi = window.gapi
    const CLIENT_ID = "835005991691-tptpiic7khfttqmgnf3md2kjr5e5lm3e.apps.googleusercontent.com"
    const API_KEY = "AIzaSyDdwT6xesx15AzgJ9za9dJm_RyHbIJoH2E"
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/calendar.events";

    const addToGcal = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })
            gapi.client.load('calendar', 'v3', () => console.log('woot!'))

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                const gCalEvent = {
                    'summary': event.title,
                    'location': event.location,
                    'description': event.description,
                    'start': {
                      'dateTime': event.start_date,
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': event.end_date,
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=1'
                    ],
                    'attendees': [
                      {'email': event.guests.split(',')[0]},
                      {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                  }

                  const request = gapi.client.calendar.events.insert({
                      'calendarId': 'primary',
                      'resource': gCalEvent,
                  })

                  request.execute(event => {
                      window.open(event.htmlLink)
                  })
            })
        })
    }

    useEffect(() => {
        Event.show(props.match.params.id)
            .then((eventData) => {
                // console.log(eventData.guests)
                
                setEvent(eventData)
                
            })
    }, [])

    return (
        <div className="container">
            <Header title={event.title} text={"Add To Calendar"}  addToGcal={addToGcal}/>
        
            <EventDetails
                title = {event.title}
                description = {event.description}
                location = {event.location}
                start_date = {event.start_date}
                end_date = {event.end_date}
                reminder = {event.reminder}
                guests = {event.guests}
                
            />
        </div>
    )
}

export default EventShow
