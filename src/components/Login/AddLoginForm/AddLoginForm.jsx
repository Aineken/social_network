import React from 'react';
import {Formik} from "formik";
import {Button, Field, Input, Label, LoginStyled} from "../LoginStyled";


const AddLoginForm = (props) => {


    const initialValues = {
        email: '', password: '', remember: false, captcha: ""
    }

    return (
        <Formik initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                }}

                onSubmit={async (values, {setSubmitting, ...rest}) => {
                    setSubmitting(true)
                    await props.onSubmit(values);
                    rest.resetForm({initialValues})
                    setSubmitting(false)

                }}

        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <LoginStyled onSubmit={handleSubmit}>
                    <Field>
                        <Label>
                            Email
                        </Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={((errors.email && touched.email) ? "error" : null)}
                        />

                    </Field>
                    <Field>
                        <Label>
                            Password
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={((errors.password && touched.password) ? "error" : null)}
                        />

                    </Field>
                    {props.captcha && <Field>
                        <Label>
                            Captcha
                        </Label>
                        <Input
                            type="text"
                            name="captcha"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.captcha}
                            className={((errors.captcha && touched.captcha) ? "error" : null)}
                        />

                    </Field>}
                    <Button type="submit" disabled={isSubmitting}>Login</Button>
                </LoginStyled>
            )}
        </Formik>
    );
};

export default AddLoginForm;

