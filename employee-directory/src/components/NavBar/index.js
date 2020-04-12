import React from 'react';
import './style.css';
import DOBSearch from '../DOBSearch';

function NavBar(props) {
    const clickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <DOBSearch />
                        </li>
                        <li className="nav-item">
                            <DOBSearch />
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input
                            value={props.search}
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        ></input>
                        <button className="btn btn-outline-success" type="submit" onClick={()=>props.clickHandler(...props.args)}>Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;