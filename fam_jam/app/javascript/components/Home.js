import React from 'react'
import img from './calendar.jpg'


const Home = () => {
    return (
        <div className="home">
            {/* <h1>Welcome to Timely</h1> */}
            <img src={img} id="home-image" alt="calendar.jpg" />
        </div>
    )
}

export default Home
