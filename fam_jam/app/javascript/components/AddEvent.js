import React, { useState, useEffect } from 'react'

const AddEvent = () => {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')
    
    return (
        <form className="add-form" onSubmit={console.log('form')}>
            <div className="form-control">
                <label>
                    Event Title
                </label>
                <input type="text" placeholder="Add Task" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>
                    Event Description
                </label>
                <input type="text" placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-control">
                <label>
                    Location
                </label>
                <input type="text" placeholder="Add Description" value={location} onChange={(e) => setLocation(e.currentTarget.value)} />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddEvent
