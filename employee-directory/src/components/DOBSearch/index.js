import React from 'react';
import './style.css';

function DOBSearch(props) {
    return (
        <div className="container">
            <input
                onChange={props.handleStartInputChange}
                name="start"
                type="date"
                className="form-control"
                id="startingDate"
            />
            <input
                onChange={props.handleEndInputChange}
                name="end"
                type="date"
                className="form-control"
                id="endingDate"
            />
        </div>
    )
}

export default DOBSearch;