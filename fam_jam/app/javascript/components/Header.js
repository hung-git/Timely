import React from 'react'
// import Button from './Button'

const Header = ({title, onToggle, showForm}) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* <Button color={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onToggle={onToggle} /> */}
        </header>
    )
}

export default Header
