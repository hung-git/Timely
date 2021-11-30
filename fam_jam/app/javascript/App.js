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

    return (
            <BrowserRouter>
                <Sidebar user={user} onSignOut={onSignOut} />
                
                    <Switch>
                    <>            
                    {/* <div className="container"> */}
                        <Route path="/" exact component={Home} />
                        <Route
                            exact path='/sign_up'
                            render={(routeProps) => <SignUp {...routeProps} onSignUp={getCurrentUser} />}
                        >
                        </Route>
                        <Route
                            exact path='/sign_in'
                            render={(routeProps) => <SignIn {...routeProps} onSignIn={getCurrentUser} />}
                        >
                        </Route>
                        <Route exact path="/events" component={EventsIndex} />
                        <Route exact path="/events/new/new" component={AddEvent} />
                        <Route exact path="/events/:id" component={Event} />
                    {/* </div> */}
                    </>
                    </Switch>
                    {/* <Route path="/groups/groups1" exact component={GroupsOne} />
                    <Route path="/groups/groups2" exact component={GroupsTwo} />
                    <Route path="/groups/groups3" exact component={GroupsThree} /> */}
            </BrowserRouter>
    )
}
