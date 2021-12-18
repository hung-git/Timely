import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(true);
  let history = useHistory()

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSignOut = () => {
    props.onSignOut()
    toggleModal()
  }
  
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Testing
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>
              {props.message}
            </h2>
            {/* <SignIn /> */}
            <button className="btn" onClick={handleSignOut}>Yes</button>
            <button className="btn" onClick={()=>history.goBack()}>Cancel</button>
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
      
    </>
  );
}
