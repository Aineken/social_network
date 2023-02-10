import React from 'react';
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {Navigate} from "react-router-dom";
import {login} from "../../app/auth-reducer";
import {connect} from "react-redux";
import {Container, FormContainer} from "./LoginStyled";





const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return <Container>
    <FormContainer>
      <AddLoginForm onSubmit={onSubmit} />
    </FormContainer>
  </Container>



}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);