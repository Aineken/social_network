import React from 'react';
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {Navigate} from "react-router-dom";
import {login} from "../../app/auth-reducer";
import {connect} from "react-redux";
import {Container, FormContainer} from "./LoginStyled";
import {RootStateType} from "../../app/store";


type MapStatePropsType = {
    captcha: string | undefined
    isAuth: boolean
}
type OwnType = {
}

type MapDispatchPropsType = {
    login: (email: string,
            password: string,
            rememberMe: boolean |undefined,
            captcha: string|undefined) => void
}


type FormDataType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const {captcha, isAuth} = props;
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);

    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <Container>
        <FormContainer>
            <AddLoginForm captcha={captcha} onSubmit={onSubmit}/>
            {captcha && <img src={captcha} alt="captcha img"/>}
        </FormContainer>
    </Container>


}
const mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect<MapStatePropsType, MapDispatchPropsType,OwnType , RootStateType>(mapStateToProps, {login})(Login);