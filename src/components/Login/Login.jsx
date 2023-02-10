import React from 'react';
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {Navigate} from "react-router-dom";
import {login} from "../../app/auth-reducer";
import {connect} from "react-redux";





const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <AddLoginForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);