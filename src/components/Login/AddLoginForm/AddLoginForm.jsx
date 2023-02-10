import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";



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
                    return errors;
                }}

                onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        await props.onSubmit(values);
                        setSubmitting(false)

                }}

        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="email" name="email"placeholder={"Email"} />
                    <ErrorMessage name="email" component="div" /> <br/>
                    <Field type="password" name="password" placeholder={"Password"}  />
                    <ErrorMessage name="password" component="div" /><br/>
                    <Field type="checkbox" name="remember" /> <span>remember me! <br/></span>

                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
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