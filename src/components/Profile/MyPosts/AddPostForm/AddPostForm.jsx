import React from 'react';
import {Field, Form, Formik} from "formik";
import {Textarea} from "../../../common/FormsControls/FormsControls";




const AddPostForm = (props) => {
    return (
        <Formik initialValues={{newPostText: ''}}
                validate={
                    values => {
                        const errors = {};
                        if (!values.newPostText) {
                            errors.newPostText = 'Field is required';
                        } else if (values.newPostText.length > 100) {
                            errors.newPostText = "Max length is 100 symbols";
                        }
                        return errors
                    }
                }

                onSubmit={
                    async (values, {setSubmitting, resetForm}) => {
                        await props.onSubmit(values)
                        setSubmitting(false);
                        resetForm({newPostText: 'hello'})
                    }
                }
        >


            {({isSubmitting}) => (
                <Form>
                    <Field name="newPostText">
                        {(props) => {
                            return (
                                <Textarea {...props}  placeholder="Enter your message"/>
                            );
                        }}
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddPostForm;