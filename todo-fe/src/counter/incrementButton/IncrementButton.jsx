import React from 'react'

export default function IncrementButton(props) {
    return (
        <div>
            <button onClick={props.incrementFunction}>{props.incrementBy}</button>
        </div>
    )
}
