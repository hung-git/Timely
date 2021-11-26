import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import { GroupsOne, GroupsTwo, GroupsThree } from './pages/Groups'
import EventsIndex from './components/EventsIndex'
import EventShow from './components/EventShow'

export default function App() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/groups/groups1" exact component={GroupsOne} />
                <Route path="/groups/groups2" exact component={GroupsTwo} />
                <Route path="/groups/groups3" exact component={GroupsThree} /> */}
                <Route exact path="/events" component={EventsIndex} />
                <Route exact path="/events/:id" component={EventShow} />
            </Switch>
        </Router>
    )
}
