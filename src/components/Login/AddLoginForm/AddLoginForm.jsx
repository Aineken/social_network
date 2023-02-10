import React from 'react';
import { Formik} from "formik";
import {Button, Field, Input, Label, LoginStyled} from "../LoginStyled";


const AddLoginForm = (props) => {
    return (
        <Formik initialValues={{email: '', password: '', remember: false,}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password){
                        errors.password="Required";
                    }
                    return errors;
                }}

                onSubmit={async (values, {setSubmitting}) => {
                    setSubmitting(true)
                    await props.onSubmit(values);
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
                            className={((errors.email && touched.email)?"error":null)}
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
                            className={( (errors.password && touched.password)?"error":null)}
                        />

                    </Field>
                    <Button type="submit" disabled={isSubmitting}>Login</Button>
                </LoginStyled>
            )}
        </Formik>
    );
};

export default AddLoginForm;


// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Email"} name={"email"}
//                        validate={[required]}
//                        component={Input}/>
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} type={"password"}
//                        validate={[required]}
//                        component={Input}/>
//             </div>
//             <div>
//                 <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
//             </div>
//             { props.error && <div className={style.formSummaryError}>
//                 {props.error}
//             </div>
//             }
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }