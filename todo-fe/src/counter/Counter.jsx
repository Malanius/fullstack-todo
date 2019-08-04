import React, { Component } from 'react';
import './Counter.css';
import CounterButtons from './counterButtons/CounterButtons';
import ResetButton from './resetButton/ResetButton';

export default class Counter extends Component {


    state = {
        counter: 0
    }

    handleCount = (increment) => {
        this.setState((prevState) => {
            return { counter: prevState.counter + increment }
        });
    }

    handleReset = () => {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <div className="counter" >
                <CounterButtons by={1} countFunction={this.handleCount} />
                <CounterButtons by={5} countFunction={this.handleCount} />
                <CounterButtons by={10} countFunction={this.handleCount} />
                <CounterButtons by={100} countFunction={this.handleCount} />
                <span className="count">{this.state.counter}</span>
                <ResetButton resetFunction={this.handleReset}/>
            </div>
        )
    }
}


