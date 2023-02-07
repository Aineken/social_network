import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";


const AddMessageForm = (props) => {
    return (

        <Formik initialValues={{newMessageBody: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.newMessageBody) {
                        errors.newMessageBody = 'Field is required';
                    } else if (values.newMessageBody.length > 50) {
                        errors.newMessageBody = "Max length is 50 symbols";
                    }
                    return errors
                }}
                onSubmit={
                    async (values, {setSubmitting, resetForm}) => {
                        await props.onSubmit(values)
                        setSubmitting(false);
                        resetForm({newMessageBody: 'hello'})
                    }
                }
        >


            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="newMessageBody" placeholder="Enter your message"/>
                    <ErrorMessage name="newMessageBody" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>


    )
}

export default AddMessageForm;

























