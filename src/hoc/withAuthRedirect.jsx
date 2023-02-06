import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {



       if(!props.isAuth){

       return  <Navigate replace to="/login" />
       }

      return  <Component {...props}/>


    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;