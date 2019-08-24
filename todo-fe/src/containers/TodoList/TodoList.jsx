import React, { Component } from 'react';

export class TodoList extends Component {

    state = {
        todos: [
            {id: 1, description: 'Learn React', done: false, dueDate: new Date()},
            {id: 2, description: 'Style the app', done: false, dueDate: new Date()},
            {id: 3, description: 'Make it shine', done: false, dueDate: new Date()}
        ]
    }

    render() {
        return (
            <div className="todoList">
                <h1>List of TODOs:</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Due date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done ? 'Yes' : 'No'}</td>
                                <td>{todo.dueDate.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;
