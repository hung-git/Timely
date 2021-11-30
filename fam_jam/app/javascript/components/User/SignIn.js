import React, { useState } from 'react'
import Header from '../Header/Header'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (event) => {
        event.preventDefault()
        console.log('Signing in')
    }
    
    return (
        <div className="container">
            <Header title={"Sign In"}/>
            <form className="add-form" onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="first_name">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />   
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
