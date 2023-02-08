import React from 'react';
import { Field, Form, Formik} from "formik";
import {Textarea} from "../../common/FormsControls/FormsControls";


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
                    <Field name={"newMessageBody"}>
                        {(props) => {
                            return (
                              <Textarea {...props} placeholder="Enter your message" />
                            );
                        }}
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>


    )
}

export default AddMessageForm;

























