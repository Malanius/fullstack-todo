import React, { Component } from 'react'

export class Login extends Component {

    state = {
        username: '',
        password: '',
        correct: false,
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
        this.setState({
            showMessage: true,
            correct: this.state.username === 'test' && this.state.password === 'test'
        })

    }

    render() {
        let message = '';
        if (this.state.showMessage) {
            message = this.state.correct ? 'Login sucesfull...' : 'Login incorrect!'
        }

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
                <p>{message}</p>
            </div>
        )
    }

};