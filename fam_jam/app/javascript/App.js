import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { GroupsOne, GroupsTwo, GroupsThree } from './pages/Groups'
import EventsIndex from './components/EventsIndex'
import Event from './components/Event'
import Home from './components/Home'
import Header from './components/Header'

export default function App() {
    return (
        <Router>
            <Sidebar />
            <Route path="/" exact component={Home} />
                <Switch>
                <>
                <div className="container">
                    <Header />
                    <Route exact path="/events" component={EventsIndex} headerTitle={"All Events"} />
                    <Route exact path="/events/:id" component={Event} headerTitle={"Event"} />
                </div>
                </>
                </Switch>
                {/* <Route path="/groups/groups1" exact component={GroupsOne} />
                <Route path="/groups/groups2" exact component={GroupsTwo} />
                <Route path="/groups/groups3" exact component={GroupsThree} /> */}
        </Router>
    )
}
