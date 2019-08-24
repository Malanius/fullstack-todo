import React from 'react';

export default (props) => {
    return (
        <div>
            Welcome to the TODO app, {props.match.params.name}!
        </div>
    )
}
