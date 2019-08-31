import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloService from '../HelloService/HelloService';

export default class extends Component {

    state = {
        welcomeMessage: ''
    }

    retrieveWelcomeMessage = (name) => {
        // HelloService.executeHello()
        //     .then(response => this.setState({ welcomeMessage: response.data }))
        //     .catch(error => console.log(error));

        // HelloService.executeHelloBean()
        //     .then(response => this.setState({ welcomeMessage: response.data.message }))
        //     .catch(error => console.log(error));

        HelloService.executeHelloParam(name)
            .then(response => this.setState({ welcomeMessage: response.data.message }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome to the TODO app, {this.props.match.params.name}!
                <p><Link to="/todos">View TODOs</Link></p>
                </div>
                <div className="container">
                    Click here to get customized message.
                <button onClick={() => this.retrieveWelcomeMessage(this.props.match.params.name)}
                        className="btn btn-success">Get welcome message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
}
