import React, { useState } from 'react'
import Header from '../Header/Header'
import { Session } from '../../requests'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (event) => {
        event.preventDefault()

        Session.create({email, password}).then(data => {
            if (data.id) {
                props.onSignIn()
                //Navigate to the index page from the browser
                //We can "push" on history to manipulate the browser
                //and direct our user to any page in our app
                props.history.push('/events')
            }
        })
    }
    
    return (
        <div className="container">
            <Header title={"Sign In"}/>
            <form className="add-form" onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="first_name">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />   
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />   
                </div>
                <input type="submit" value="Sign In" className="btn btn-block" />
            </form>
        </div>
    )
}

export default SignIn
