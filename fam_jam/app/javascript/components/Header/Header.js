import React from 'react'
import Button from './Button'

const Header = ({ title, text, addToGcal }) => {
    return (
        <header className="header" >
            <h1>{title}</h1>
            {text==="Add To Calendar" ? <Button color='green' text={text} addToGcal={addToGcal}/> : null}
        </header>
    )
}

export default Header
