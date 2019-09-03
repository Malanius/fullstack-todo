import React, { Component } from 'react';
import Auth from './Auth';

export class Login extends Component {

    state = {
        username: '',
        password: '',
        showMessage: false
    }

    inputChangeHandler = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
                correct: false,
                showMessage: false
            });
    }

    loginHandler = () => {
        //for now valid user is test:test
        Auth.validateLogin(this.state.username, this.state.password)
            .then((response) => {
                Auth.registerLogin(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            })
            .catch((error) => {
                console.log(error);
                this.setState({ showMessage: true })
            })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    User:
                <input type="text"
                        name="username"
                        placeholder="your user name"
                        value={this.state.username}
                        onChange={(event) => this.inputChangeHandler(event)} />
                    Password:
                <input
                        type="password"
                        name="password"
                        placeholder="your password"
                        value={this.state.password}
                        onChange={(event) => this.inputChangeHandler(event)} />
                    <button
                        className="btn btn-success"
                        onClick={() => this.loginHandler()}>Login</button>
                    {this.state.showMessage && <p className="alert alert-warning">Login incorrect!</p>}
                </div>
            </div>
        )
    }

};