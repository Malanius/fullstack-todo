import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome';
import NavError from '../../components/NavError/NavError';
import TodoList from '../TodoList/TodoList';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import Logout from '../../Auth/Logout';
import { Login } from '../../Auth/Login';
import AuthenticatedRoute from '../../Auth/AuthenticatedRoute';
import Todo from '../../components/Todo/Todo';

export class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />
                            <AuthenticatedRoute path="/logout" component={Logout} />
                            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                            <AuthenticatedRoute path="/todos/:id" component={Todo} />
                            <AuthenticatedRoute path="/todos" component={TodoList} />
                            <Route component={NavError} />
                        </Switch>
                        <Footer />
                    </>
                </Router>
            </div>
        )

    }
}