import React, { useState, useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { GroupsOne, GroupsTwo, GroupsThree } from './pages/Groups'
import EventsIndex from './components/EventsIndex'
import Event from './components/Event'
import Home from './components/Home'
import Header from './components/Header/Header'
import AddEvent from './components/AddEvent'

export default function App() {

    return (
        <BrowserRouter>
            <Sidebar />
            <Route path="/" exact component={Home} />
                <Switch>
                <>
                <div className="container">
                    {/* <Header title={title}/> */}
                    <Route exact path="/events" component={EventsIndex} />
                    <Route exact path="/events/new/new" component={AddEvent} />
                    <Route exact path="/events/:id" component={Event} />
                </div>
                </>
                </Switch>
                {/* <Route path="/groups/groups1" exact component={GroupsOne} />
                <Route path="/groups/groups2" exact component={GroupsTwo} />
                <Route path="/groups/groups3" exact component={GroupsThree} /> */}
        </BrowserRouter>
    )
}
