import React from 'react';
import './style.css';

function DOBSearch(props) {
    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-3'>
                    <form id="dob" action="/action_page.php">
                        <label for="DOB" >DOB:</label>
                        <input type="date"></input>
                    </form>
                </div>
            </div>
                </div>
    )
}

export default DOBSearch;