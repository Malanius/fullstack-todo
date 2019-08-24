import React from 'react';
import { withRouter} from 'react-router';
import { NavLink } from 'react-router-dom';
import Auth from '../../../Auth/Auth';


const header = () => {
    
    const isUserLogged = Auth.isLoggedIn();
    var user = '';
    if(isUserLogged){
        user = Auth.getUser();
    }

    const homeLink = isUserLogged ? <li><NavLink className="nav-link" to={`/welcome/${user}`}>Home</NavLink></li> : null;

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a href="https://github.com/malanius" className="navbar-brand">Malanius</a>
                <ul className="navbar-nav">
                    {homeLink}                    
                    {isUserLogged && <li><NavLink className="nav-link" to="/todos">TODOs</NavLink></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLogged && <li><NavLink className="nav-link" to="/login">Login</NavLink></li>}
                    {isUserLogged &&<li><NavLink className="nav-link" to="/logout" onClick={() => Auth.deregisterLogin()}>Logout</NavLink></li>}
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(header);