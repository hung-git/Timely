import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick} className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

export default Button
