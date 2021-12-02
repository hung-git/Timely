import React from 'react'

function Modal({closeModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=>{closeModal}}> X </button>
            <div className="title"></div>
                <h1>some random tag</h1>
            <div className="body"></div>
                <p>something else goes here</p>
            <div className="footer"></div>
                <button>ok</button>
                <button>cancel</button>
            </div>
        </div>
    )
}

export default Modal
