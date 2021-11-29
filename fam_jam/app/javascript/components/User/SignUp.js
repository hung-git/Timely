import React, {useState} from 'react'
import { User } from '../../requests'
import Header from '../Header/Header'


const SignUp = (props) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const user_params = { first_name, last_name, email, password, password_confirmation }

    const handleSignUp = (event) => {
        event.preventDefault()
        if (password !== password_confirmation) {
            alert('Passwords do not match!')
            return
        }
    
        User.create(user_params).then(user => {
            if (user?.id) {
                console.log('user created')
                props.history.push('/') //navigate to index
            } else {
                console.log('failed to create')
                alert('Sorry, something went wrong. Please try again.')
            }
        })
        
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
    }

    return(
        <>
            <Header title={"Sign Up"}/>
            <form className="add-form" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />   
                </div>
                <div className="form-control">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />   
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />   
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />   
                </div>
                <div className="form-control">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />   
                </div>
                <input type="submit" value="Sign Up" className="btn btn-block" />
            </form>
        </>
    )
}

export default SignUp
