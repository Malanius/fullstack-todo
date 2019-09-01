import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';

import Auth from '../../Auth/Auth';
import TodoDataService from '../../containers/TodoList/TodoDataService';

export default class Todo extends Component {

    state = {
        id: this.props.match.params.id,
        description: '',
        deadline: moment(new Date()).format('YYYY-MM-DD')
    }

    componentDidMount() {
        this.fetchTodo();
    }

    fetchTodo() {
        TodoDataService.getTodoById(Auth.getUser(), this.state.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    deadline: moment(response.data.deadline).format('YYYY-MM-DD')
                })
            })
    }

    validate(values) {
        let errors = {};

        if (!values.description) {
            errors.description = 'Description must be entered!'
        } else if (values.description.length < 5) {
            errors.description = 'Description must have at least 5 characters'
        }

        if (!moment(values.deadline).isValid || !values.deadline) {
            errors.deadline = 'Deadline must be entered!'
        }

        return errors;
    }

    onSubmit(values) {
        TodoDataService.updateTodo(Auth.getUser(), this.state.id, {
            id: this.state.id,
            description: values.description,
            deadline: values.deadline
        }).then(() => this.props.history.push('/todos'));
        
    }

    render() {

        let { description, deadline } = this.state;

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{ description, deadline }}
                        onSubmit={(values) => this.onSubmit(values)}
                        validate={(values) => this.validate(values)}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <ErrorMessage name="deadline" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Deadline</label>
                                        <Field className="form-control" type="date" name="deadline" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
