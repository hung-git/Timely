import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, text, addToGcal }) => {

    const handleClick = () => {
        text==="Add To Calendar" ? 
            addToGcal() : 
        text==="Add Event" ?
            console.log('click') :
        null
    }

    return (
        <header className="header" >
            <h1>{title}</h1>
            {
            text==="Add To Calendar" ? 
                <Button color='green' text={text} handleClick={handleClick}/> :
            text==="Nothing To Do" ?
                // <Button color='green' text={text} handleClick={handleClick}/> :
                <Link to="/events/new/new" className="btn">Add Event</Link> :
            null
            }
        </header>
    )
}

export default Header
