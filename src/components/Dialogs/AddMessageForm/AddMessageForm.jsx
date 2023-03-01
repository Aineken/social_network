import React from 'react';
import { Field, Form, Formik} from "formik";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {Button} from "../../../styles/GlobalComponents";


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

                        await props.onSubmit(values.newMessageBody)
                        setSubmitting(false);
                        resetForm({newMessageBody: 'hello'})
                    }
                }
        >


            {({isSubmitting}) => (
                <Form>
                    <Field name="newMessageBody">
                        {(props) => {
                            return (
                              <Textarea {...props} placeholder="Enter your message" />
                            );
                        }}
                    </Field>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>


    )
}

export default AddMessageForm;

























