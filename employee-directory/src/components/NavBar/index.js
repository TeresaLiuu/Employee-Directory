import React from 'react';
import './style.css';
import DOB from '../DOB';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <DOB />
                        </li>
                        <li className="nav-item">
                            <DOB />
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            value={props.search}
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        ></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;