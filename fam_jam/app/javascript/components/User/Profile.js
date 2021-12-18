import React from 'react'
import { User } from '../../requests'

const Profile = ({user}) => {
    const currentUser = User.current

    return (
        <div>
            <h1>{currentUser.first_name}</h1>
        </div>
    )
}

export default Profile
