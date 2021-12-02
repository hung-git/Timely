import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.addToGcal} className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

export default Button
