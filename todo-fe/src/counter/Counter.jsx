import React, { Component } from 'react';
import './Counter.css';
import CounterButtons from './counterButtons/CounterButtons';

export default class Counter extends Component {


    state = {
        counter: 0
    }

    increment = (increment) => {
        this.setState((prevState) => {
            return { counter: prevState.counter + increment }
        });
    }

    render() {
        return (
            <div className="counter" >
                <CounterButtons incrementBy={1} incrementFunction={this.increment} />
                <CounterButtons incrementBy={5} incrementFunction={this.increment} />
                <CounterButtons incrementBy={10} incrementFunction={this.increment} />
                <CounterButtons incrementBy={100} incrementFunction={this.increment} />
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
}


