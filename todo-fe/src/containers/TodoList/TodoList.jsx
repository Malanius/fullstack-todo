import React, { Component } from 'react';

export class TodoList extends Component {

    state = {
        todos: [
            { id: 1, description: 'Learn React', done: true, dueDate: new Date() },
            { id: 2, description: 'Style the app', done: true, dueDate: new Date() },
            { id: 3, description: 'Make it shine', done: true, dueDate: new Date() },
            { id: 4, description: 'Verify user login', done: false, dueDate: new Date() },
        ]
    }

    render() {
        return (
            <div className="todoList">
                <h1>List of TODOs</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Due date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo => (
                                <tr>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? 'Yes' : 'No'}</td>
                                    <td>{todo.dueDate.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoList;
