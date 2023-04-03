import React from 'react';
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {Button} from "../../../styles/GlobalComponents";

type ValuesType = {
    newMessageBody:string
}
type ProspType = {
    onSubmit: (values:string) => void
}

const AddMessageForm:React.FC<ProspType> = (props) => {
    return (

        <Formik initialValues={{newMessageBody: ''}}
                validate={values => {
                    const errors:Partial<FormikProps<ValuesType>['errors']>  = {};
                    if (values.newMessageBody.length > 1000) {
                        errors.newMessageBody = "Max length is 1000 symbols";
                    }
                    return errors
                }}
                onSubmit={
                    async (values, {setSubmitting, resetForm}) => {

                        await props.onSubmit(values.newMessageBody)
                        setSubmitting(false);
                        resetForm({values: {newMessageBody: ''}})
                    }
                }
        >


            {({isSubmitting}) => (
                <Form>
                    <Field name="newMessageBody">
                        {(props: FieldProps<string>) => {
                            return (
                              <Textarea {...props} placeholder="Enter your message" />
                            );
                        }}
                    </Field>
                    <Button type="submit" disabled={isSubmitting}>
                        Send
                    </Button>
                </Form>
            )}
        </Formik>


    )
}

export default AddMessageForm;

























