import React from 'react'
import Button from './Button'

const Header = ({title, text, onToggle}) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* <Button color={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onToggle={onToggle} /> */}
            {/* <Button color='green' text={text} onToggle={onToggle} /> */}
        </header>
    )
}

export default Header
