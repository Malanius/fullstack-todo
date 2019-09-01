import React, { Component } from 'react';

import Auth from '../../Auth/Auth';
import TodoDataService from './TodoDataService';

export class TodoList extends Component {

    state = {
        todos: [],
        message: ''
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        TodoDataService.retrieveAllTodos(Auth.getUser())
            .then(response => this.setState({ todos: response.data }))
    }

    deleteTodo(id) {
        TodoDataService.deleteTodo(Auth.getUser(), id)
            .then(response => {
                this.setState({ message: `Delete of todo ${id} sucessfull` });
                this.fetchTodos();
            })
    }

    render() {
        return (
            <div className="todoList">
                <h1>List of TODOs</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done?</th>
                                <th>Due date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? 'Yes' : 'No'}</td>
                                    <td>{todo.deadline}</td>
                                    <td><button className="btn btn-danger"
                                        onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                                    </td>
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
