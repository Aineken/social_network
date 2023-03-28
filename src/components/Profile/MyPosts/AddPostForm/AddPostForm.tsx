import React, {FC} from 'react';
import {Field, Form, Formik, FormikProps} from "formik";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {Button} from "../../../../styles/GlobalComponents";


type ValuesType = {
    newPostText:string
}
type ProspType = {
    onSubmit: (values:ValuesType) => void
}



const AddPostForm: FC<ProspType > = (props) => {

    const initialState={
        newPostText: ''
    }
    return (
        <Formik initialValues={initialState}
                validate={
                    values => {
                        const errors:Partial<FormikProps<ValuesType>['errors']> = {};
                        if (!values.newPostText) {
                            errors.newPostText = 'Field is required';
                        } else if (values.newPostText.length > 100) {
                            errors.newPostText = "Max length is 100 symbols";
                        }
                        return errors
                    }
                }

                onSubmit={
                    async (values:ValuesType, {setSubmitting, resetForm}) => {
                        await props.onSubmit(values)
                        setSubmitting(false);
                        resetForm ({values: initialState})
                    }
                }
        >


            {({isSubmitting}) => (
                <Form>
                    <Field name="newPostText">
                        {(fieldProps:any) => {
                            return (
                                <Textarea {...fieldProps} placeholder="Enter your message"/>
                            );
                        }}
                    </Field>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddPostForm;