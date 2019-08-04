import React from 'react';
import PropTypes from 'prop-types';
import './CounterButtons.css';

const IncrementButton = (props) => {
    return (
        <div>
            <button
                className="ctrButton"
                onClick={() => props.incrementFunction(props.incrementBy)}>
                +{props.incrementBy}
            </button>
            <button
                className="ctrButton"
                onClick={() => props.incrementFunction(props.incrementBy * -1)}>
                -{props.incrementBy}
            </button>
        </div>
    )
}

IncrementButton.propTypes = {
    incrementFunction: PropTypes.func.isRequired,
    incrementBy: PropTypes.number.isRequired
}

IncrementButton.defaultProps = {
    incrementBy: 1
}

export default IncrementButton;