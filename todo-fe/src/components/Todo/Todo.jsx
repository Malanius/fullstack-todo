import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                Todo component for id - {this.props.match.params.id}
            </div>
        )
    }
}
