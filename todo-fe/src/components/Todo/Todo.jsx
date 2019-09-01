import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

export default class Todo extends Component {

    state = {
        id: this.props.match.params.id,
        description: 'Todo 1',
        deadline: moment(new Date()).format('YYYY-MM-DD')
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Deadline</label>
                                        <Field className="form-control"type="date" name="deadline"/>
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
