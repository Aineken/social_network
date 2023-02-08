import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateStatus} from "../../app/profile-reducer";
import { useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    let {userId} = useParams();
    const [newId, setNewId]=useState(userId)
    useEffect(()=>{
        if (!newId) {
            setNewId(props.authorizedUserId)
        }
        props.getUserProfile(newId);
        props.getStatus(newId);
    },[props,newId])



    return (<Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>)

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




