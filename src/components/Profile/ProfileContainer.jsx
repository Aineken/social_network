import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import { useParams} from "react-router-dom";


const ProfileContainer = (props) => {
    let {profileId} = useParams();



    useEffect(() => {
        let userId = profileId;
        if (!userId) {
            userId = props.authorizedUserId;
            if(!userId){
                userId=27932;
            }
        }
        console.log(userId)
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [profileId])


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




