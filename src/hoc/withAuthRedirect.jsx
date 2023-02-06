import React from "react";
import {connect} from "react-redux";
import {redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {

        // console.log(props.isAuth);
        // if(!props.isAuth){
        // return redirect("/login")
        // }
        rredirect("/login")

        // return <Component {...props}/>




    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;