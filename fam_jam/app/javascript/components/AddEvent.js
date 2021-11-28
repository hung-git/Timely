import React, { useState, useEffect } from 'react'
import { Event } from '../requests'

const AddEvent = (props) => {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({title, description, location})
        
        Event.create({title, description, location}) 
            .then((event) => {
                setTitle(title)
                setDescription(description)
                setLocation(location)
                props.history.push(`/events/${event.id}`)
            })
        
        setTitle('')
        setDescription('')
        setLocation('')
    }

    // createQuestion(params) {
    //     console.log(`Params: ${params.title} ${params.body}`)
    //     Question.create(params)
    //       .then((question) => {
    //         console.log(`question: ${question.errors}`)
    //         if (question.errors) {
    //           console.log(`QuestionErrors: ${question.errors}`)
    //           this.setState({ errors: question.errors });
    //         } else {
    
    //           // const id = question.id;
    //           // the history prop contains methods used to navigate
    //           this.props.history.push(`/questions/${question.id}`);
    //         }
    //     })
    // }

    return (
        <form className="add-form" onSubmit={onSubmit}>
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
