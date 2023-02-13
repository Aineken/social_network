import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import {Navigate, redirect, useParams} from "react-router-dom";


const ProfileContainer = (props) => {
    let {profileId} = useParams();

    let userId = profileId;
    useEffect(() => {

        if (!userId) {
            userId = props.authorizedUserId;

        }
            props.getUserProfile(userId);
            props.getStatus(userId);
    }, [profileId, props.authorizedUserId, props.getUserProfile, props.getStatus])

    if (!userId) {
        return <Navigate to='/login'/>
    }
    return (
        <Profile {...props} />
    )

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    })
)(ProfileContainer);




