import React from 'react';
import PropTypes from 'prop-types';

const IncrementButton = (props) => {
    return (
        <div>
            <button onClick={() => props.incrementFunction(props.incrementBy)}>{props.incrementBy}</button>
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