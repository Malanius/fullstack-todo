import React, { Component } from 'react';

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
        if (this.state.username === 'test' && this.state.password === 'test') {
            this.props.history.push(`/welcome/${this.state.username}`);
        } else (
            this.setState({ showMessage: true })
        )

    }

    render() {
        return (
            <div className="login">
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
                <button onClick={() => this.loginHandler()}>Login</button>
                <p>{this.state.showMessage && 'Login incorrect!'}</p>
            </div>
        )
    }

};