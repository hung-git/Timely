import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { GroupsOne, GroupsTwo, GroupsThree } from './pages/Groups'
import EventsIndex from './components/EventsIndex'
import Event from './components/Event'
import Home from './components/Home'
// import Front from './components/Front'
import Header from './components/Header/Header'
import AddEvent from './components/AddEvent'
import SignUp from './components/User/SignUp'
import SignIn from './components/User/SignIn'
import { Session, User } from './requests'
import SignOut from './components/User/SignOut'
import Profile from './components/User/Profile'
import Groups from './components/Groups/Groups.js'
import Board from './components/Board'
import Card from './components/Card'

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
        })
    }

    const onSignOut = () => { 
        console.log('user signed out')
        Session.destroy()
        setUser('') 
    }

    return (
            <BrowserRouter>
                <Sidebar user={user} />
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
                        <Route
                            exact path='/sign_out'
                            render={(routeProps) => <SignOut {...routeProps} onSignOut={onSignOut} user={user} message={"Are You Sure?"} />}>
                        </Route>
                        <Route exact path="/events" component={EventsIndex} user={user} />
                        <Route exact path="/events/new/new" component={AddEvent} />
                        <Route exact path="/events/:id" component={Event} />
                        <Route exact path="/profile" component={Profile} user={user} />
                        <Route exact path="/groups" component={Groups} />
                    </>
                    </Switch>
            </BrowserRouter>
    )
}
