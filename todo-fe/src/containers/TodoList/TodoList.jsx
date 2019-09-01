import React, { Component } from 'react';

import Auth from '../../Auth/Auth';
import TodoDataService from './TodoDataService';

export class TodoList extends Component {

    state = {
        todos: []
    }

    componentDidMount(){
        TodoDataService.retrieveAllTodos(Auth.getUser())
        .then(response => this.setState({todos: response.data}))
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
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? 'Yes' : 'No'}</td>
                                    <td>{todo.deadline}</td>
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
