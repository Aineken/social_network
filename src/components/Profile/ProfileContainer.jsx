import React, {useEffect, useRef} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateInfo, updatePhoto, updateStatus} from "../../app/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";


const ProfileContainer = ({getUserProfile,getStatus,authorizedUserId, ...props}) => {

    let {profileId} = useParams();
    const navigate=useNavigate();

    let userId = useRef(profileId);

    useEffect(() => {
        if (!userId.current) {
            userId.current = authorizedUserId;
            if(!userId.current){
                navigate("/login")
            }else{
                getUserProfile(userId.current);
                getStatus(userId.current);
            }
        }else{
            getUserProfile(userId.current);
            getStatus(userId.current);
        }
    }, [profileId, authorizedUserId, getUserProfile, getStatus, navigate])


    return (
        <Profile {...props}  mainUser={authorizedUserId} />
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
        updateStatus,
        updatePhoto,
        updateInfo
    })
)(ProfileContainer);




