import React from 'react';
import './style.css';

function Header() {
    return (
        <span className="d-block bg-dark text-white text-center">Employee Directory
            <br />
            <h5>click on carrots to filter by heading or use the search box to narrow your resutls.</h5>
        </span>
    )
}

export default Header;