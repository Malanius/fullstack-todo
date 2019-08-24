import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from './Auth';

export default (props) => {

    var route = <Redirect to="/login" />
    if (Auth.isLoggedIn()) {
        route = <Route {...props} />
    }

    return (
        <>
            {route}
        </>
    )
} 
