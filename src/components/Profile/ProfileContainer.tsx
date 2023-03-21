import React, {useEffect, useRef} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose, current} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateInfo, updatePhoto, updateStatus} from "../../app/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import {PhotosType, ProfileType, UsersType} from "../../types/types";
import {RootStateType} from "../../app/store";


type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    updatePhoto: (photo: PhotosType) => void
    updateInfo: (newInfo: ProfileType) => void
}

type OwnPropsType = {}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType;
const ProfileContainer: React.FC<PropsType> = ({getUserProfile, getStatus, authorizedUserId, ...props}) => {

    let {profileId} = useParams();

    const navigate = useNavigate();


    let userId=null as number|null
    if(profileId){let userId = parseInt(profileId)}




    useEffect(() => {
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                navigate("/login")
            } else {
                getUserProfile(userId);
                getStatus(userId);
            }
        } else {
            getUserProfile(userId);
            getStatus(userId);
        }
    }, [profileId, authorizedUserId, getUserProfile, getStatus, navigate])


    return (
        <Profile {...props} mainUser={authorizedUserId}/>
    )

}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, RootStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        updatePhoto,
        updateInfo
    })
)(ProfileContainer);




