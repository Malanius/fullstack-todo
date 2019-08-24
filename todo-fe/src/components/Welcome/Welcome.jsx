import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome to the TODO app, {props.match.params.name}!
                <p><Link to="/todos">View TODOs</Link></p>
            </div>
        </>
    )
}
