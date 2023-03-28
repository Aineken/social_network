import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../app/auth-reducer";
import {RootStateType} from "../../app/store";

import {
    Container,
    Div1,
    Div2, HeaderButton,
    HeaderDiv,
    NavLink,
} from "./HeaderStyled";
import logo from "../../utils/andrzul_logo.svg";
import {Link} from "react-router-dom";


const Header:React.FC<MapStatePropsType & MapDispatchPropsType>=(props) =>{

    const setSubmit= ()=>{
        props.logout();
    }

    return (
        <Container>
            <HeaderDiv>
                <Div1>
                    <Link to="/">
                        <NavLink logo >
                            <img src={logo} alt="Logo"/>
                            <span>Social Network</span>
                        </NavLink>
                    </Link>
                </Div1>
                <Div2>
                    {props.isAuth
                        ? <NavLink>
                            <span>{props.login}</span>
                            <HeaderButton onClick={setSubmit}> Logout</HeaderButton>
                        </NavLink>
                        : <Link to="/login">
                            <HeaderButton>Login</HeaderButton>
                        </Link>}

                </Div2>
            </HeaderDiv>
        </Container>
    );
}





type MapStatePropsType = {
    isAuth: boolean
    login: string |undefined
}
type OwnType = {
}

type MapDispatchPropsType = {
    logout: () => void
}


const mapStateToProps = (state : RootStateType):MapStatePropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect<MapStatePropsType,MapDispatchPropsType,OwnType, RootStateType>(mapStateToProps, {logout})(Header);