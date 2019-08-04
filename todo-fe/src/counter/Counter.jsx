import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {


    state = {
        counter: 0
    }

    increment = () => {
        console.log('increment');
        const oldCount = this.state.counter;
        const newCount = oldCount + 1;
        this.setState({ counter: newCount });
    }

    render() {
        return (
            <div className="counter" >
                <button onClick={() => this.increment()}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
}


