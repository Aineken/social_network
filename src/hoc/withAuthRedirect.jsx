import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props)=> {

            if (!props.isAuth) return <Navigate to="/login"/>;

            return <Component {...props}/>

    }

   return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect;