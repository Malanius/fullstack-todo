import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a href="https://github.com/malanius" className="navbar-brand">Malanius</a>
                <ul className="navbar-nav">
                    {/* TODO: remove hardocded username from here */}
                    <li><NavLink className="nav-link" to="/welcome/test">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/todos">TODOs</NavLink></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                    <li><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
