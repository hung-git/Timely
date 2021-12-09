import React, { useState } from 'react'
import Header from '../Header/Header'
import { Session } from '../../requests'
import { useHistory } from 'react-router-dom';
import "./User.css";

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(true);
    let history = useHistory()

    const toggleModal = () => {
      setModal(!modal);
    };

    const handleSignOut = () => {
      props.onSignOut()
      toggleModal()
    }

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

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    return (
        <div className="">
            {/* <Header title={"Sign In"}/> */}
            {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
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
                    {/* <button className="btn" onClick={handleSignOut}>Yes</button>
                    <button className="btn" onClick={()=>history.goBack()}>Cancel</button> */}
                  </div>
                </div>
            )}
        </div>
    )
}

export default SignIn
