import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";


const ProfileContainer = ({getUserProfile,getStatus,authorizedUserId, ...props}) => {
    let {profileId} = useParams();
    const navigate=useNavigate();

    let userId = profileId;
    useEffect(() => {
        if (!userId) {
            userId = authorizedUserId;
            if(!userId){
                navigate("/login")
            }else{
                getUserProfile(userId);
                getStatus(userId);
            }
        }else{
            getUserProfile(userId);
            getStatus(userId);
        }


    }, [profileId, authorizedUserId, getUserProfile, getStatus])


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




