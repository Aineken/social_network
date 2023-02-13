import React from 'react';
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {Navigate} from "react-router-dom";
import {login} from "../../app/auth-reducer";
import {connect} from "react-redux";
import {Container, FormContainer} from "./LoginStyled";





const Login = (props) => {


  const {captcha}=props;
  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }



  return <Container>
    <FormContainer>
      <AddLoginForm captcha={captcha} onSubmit={onSubmit} />
      {captcha&&<img src={captcha} alt="captcha img"/>}

    </FormContainer>
  </Container>



}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha:state.auth.captcha
})

export default connect(mapStateToProps, {login} )(Login);