import React from 'react';
import PropTypes from 'prop-types';
import './CounterButtons.css';

const CounterButtons = (props) => {
    return (
        <div>
            <button
                className="ctrButton"
                onClick={() => props.countFunction(props.by * -1)}>
                -{props.by}
            </button>
            <button
                className="ctrButton"
                onClick={() => props.countFunction(props.by)}>
                +{props.by}
            </button>
        </div>
    )
}

CounterButtons.propTypes = {
    countFunction: PropTypes.func.isRequired,
    by: PropTypes.number.isRequired
}

export default CounterButtons;