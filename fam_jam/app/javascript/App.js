import React, { useState, useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { GroupsOne, GroupsTwo, GroupsThree } from './pages/Groups'
import EventsIndex from './components/EventsIndex'
import Event from './components/Event'
import Home from './components/Home'
import Header from './components/Header/Header'
import AddEvent from './components/AddEvent'
import SignUp from './components/User/SignUp'
import SignIn from './components/User/SignIn'
import { Session, User } from './requests'
import Modal from './components/Modal/Modal'

export default function App() {
    const [user, setUser] = useState('')

    useEffect(() => {
        getCurrentUser();
    }, [])

    const getCurrentUser = () => {
        return User.current().then(user => {
            if (user?.id) {
              setUser(user)
            }
            // console.log(user)
        })
    }

    const onSignOut = () => { 
        console.log('user signed out')
        Session.destroy()
        setUser('') 

    }

    // const addToGcal = () => {
    //     gapi.load('client:auth2', () => {
    //         console.log('loaded client')

    //         gapi.client.init({
    //             apiKey: API_KEY,
    //             clientId: CLIENT_ID,
    //             discoveryDocs: DISCOVERY_DOCS,
    //             scope: SCOPES
    //         })
    //         gapi.client.load('calendar', 'v3', () => console.log('woot!'))

    //         gapi.auth2.getAuthInstance().signIn()
    //         .then(() => {
    //             const gCalEvent = {
    //                 'summary': event.title,
    //                 'location': event.location,
    //                 'description': event.description,
    //                 'start': {
    //                   'dateTime': '2015-05-28T09:00:00-07:00',
    //                   'timeZone': 'America/Los_Angeles'
    //                 },
    //                 'end': {
    //                   'dateTime': '2015-05-28T17:00:00-07:00',
    //                   'timeZone': 'America/Los_Angeles'
    //                 },
    //                 'recurrence': [
    //                   'RRULE:FREQ=DAILY;COUNT=2'
    //                 ],
    //                 'attendees': [
    //                   {'email': 'lpage@example.com'},
    //                   {'email': 'sbrin@example.com'}
    //                 ],
    //                 'reminders': {
    //                   'useDefault': false,
    //                   'overrides': [
    //                     {'method': 'email', 'minutes': 24 * 60},
    //                     {'method': 'popup', 'minutes': 10}
    //                   ]
    //                 }
    //               }

    //               const request = gapi.client.calendar.events.insert({
    //                   'calendarId': 'primary',
    //                   'resource': gCalEvent,
    //               })

    //               request.execute(event => {
    //                   window.open(event.htmlLink)
    //               })
    //         })
    //     })
    // }

    return (
            <BrowserRouter>
                <Sidebar user={user} onSignOut={onSignOut} />
                {/* <Modal /> */}
                    <Switch>
                    <>            
                        <Route path="/" exact component={Home} />
                        <Route
                            exact path='/sign_up'
                            render={(routeProps) => <SignUp {...routeProps} onSignUp={getCurrentUser} />}>
                        </Route>
                        <Route
                            exact path='/sign_in'
                            render={(routeProps) => <SignIn {...routeProps} onSignIn={getCurrentUser} />}>
                        </Route>
                        <Route exact path="/events" component={EventsIndex} />
                        <Route exact path="/events/new/new" component={AddEvent} />
                        <Route exact path="/events/:id" component={Event} />
                    </>
                    </Switch>
            </BrowserRouter>
    )
}
