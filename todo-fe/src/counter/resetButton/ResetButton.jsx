import React from 'react';
import PropTypes from 'prop-types';
import './ResetButton.css';

const ResetButton = (props) => {
    return (
        <div>
            <button
                className="resetBtn"
                onClick={() => props.resetFunction()}>
                Reset
            </button>
        </div>
    )
}

ResetButton.propTypes = {
    resetFunction: PropTypes.func.isRequired
}

export default ResetButton;