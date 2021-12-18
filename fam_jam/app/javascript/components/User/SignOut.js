import React from 'react'
import Modal from '../Modal/Modal'


const SignOut = ({message, onSignOut, user}) => {
    
    return (
        <div className="no-border-container">
            {!user ? <h1>Thanks for using Timely, See You Next Time!</h1> : null}
            <Modal message={message} onSignOut={onSignOut} />
        </div>
    )
}

export default SignOut
