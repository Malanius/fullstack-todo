import React from 'react';
import PropTypes from 'prop-types';
import './IncrementButton.css';

const IncrementButton = (props) => {
    const title = props.incrementBy > 0 ? '+' + props.incrementBy : '-' + Math.abs(props.incrementBy)
    return (
        <div>
            <button
                onClick={() => props.incrementFunction(props.incrementBy)}>
                {title}
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