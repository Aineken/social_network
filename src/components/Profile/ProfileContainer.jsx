import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import {redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId;
        let userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                redirect("/login")
            }
        }
        console.log(userId)
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }))(ProfileContainer);




