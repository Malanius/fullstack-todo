import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../../components/Welcome/Welcome';
import NavError from '../../components/NavError/NavError';
import TodoList from '../TodoList/TodoList';


export class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/welcome/:name" component={Welcome} />
                        <Route path="/todos" component={TodoList} />
                        <Route component={NavError} />
                    </Switch>
                </Router>
            </div>
        )

    }
}