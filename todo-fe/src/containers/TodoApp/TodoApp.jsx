import React, { Component } from 'react';
import { Login } from '../Login/Login';

export class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Login />
            </div>
        )

    }
}