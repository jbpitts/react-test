import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBook } from '../../actions/index';

class BookCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = (formProps) =>  {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createBook(formValues);
    }

    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field 
                    label="Enter Title" 
                    name="title" 
                    component={this.renderInput}
                    />
                <Field 
                    label="Enter Description" 
                    name="description" 
                    component={this.renderInput} 
                    />
                <button className="ui button primary" >Submit</button>
            </form>
        );
    }
}

const validateForm = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title= 'Title is required';
    }

    if(!formValues.description) {
        errors.description= 'Description is required';
    }

    return errors;
};

const formWrapped = reduxForm({
    form: 'bookCreate',
    validate: validateForm
})(BookCreate);

export default connect(null, { createBook })(formWrapped);