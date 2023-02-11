import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import {redirect, useParams} from "react-router-dom";


const ProfileContainer = (props) => {


    let {userId} = useParams();
    const [mainId, setMainId] = useState(userId)

    if (!mainId) {
        setMainId(props.authorizedUserId)
        if (!mainId) {
            redirect("/login")
        }
    }
    const {getUserProfile,getStatus}=props
    useEffect(()=>{
        getUserProfile(mainId);
        getStatus(mainId);
    },[])


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




