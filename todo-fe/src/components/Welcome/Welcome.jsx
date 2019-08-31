import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    const retrieveWelcomeMessage = () =>{
        console.log('retrieve message')
    }

    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome to the TODO app, {props.match.params.name}!
                <p><Link to="/todos">View TODOs</Link></p>
            </div>
            <div className="container">
                Click here to get customized message.
                <button onClick={retrieveWelcomeMessage} className="btn btn-success">Get welcome message</button>
            </div>
        </>
    )
}
