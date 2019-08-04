import React, { Component } from 'react';
import './Counter.css';
import IncrementButton from './incrementButton/IncrementButton';

export default class Counter extends Component {


    state = {
        counter: 0
    }

    increment = (increment) => {
        const oldCount = this.state.counter;
        const newCount = oldCount + increment;
        this.setState({ counter: newCount });
    }

    render() {
        return (
            <div className="counter" >
                <IncrementButton incrementBy="1" incrementFunction={() => this.increment(1)}/>
                <IncrementButton incrementBy="5" incrementFunction={() => this.increment(5)}/>
                <IncrementButton incrementBy="10" incrementFunction={() => this.increment(10)}/>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
}


