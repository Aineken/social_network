import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {getStatus, getUserProfile, updateInfo, updatePhoto, updateStatus} from "../../app/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import { ProfileType} from "../../types/types";
import {AppDispatch, RootStateType} from "../../app/store";


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    updatePhoto: (photo: File) => void
    updateInfo: (values: ProfileType) => void
}

type OwnPropsType = {}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType;
const ProfileContainer: React.FC<PropsType> = ({getUserProfile, getStatus, authorizedUserId, ...props}) => {

    let {profileId} = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        let userId: number;
        if (profileId) {
            userId = parseInt(profileId);
            getUserProfile(userId);
            getStatus(userId);
        } else {
            if(authorizedUserId){
                getUserProfile(authorizedUserId);
                getStatus(authorizedUserId);
            }else{
                navigate("/login")
            }
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



let mapDispatchToProps = (dispatch:AppDispatch): MapDispatchPropsType => {
    return {
        getUserProfile: (userId: number) => {
            dispatch(getUserProfile(userId));
        },
        getStatus: (userId: number) => {
            dispatch(getStatus(userId));
        },
        updateStatus: (status: string) => {
            dispatch(updateStatus(status));
        },
        updatePhoto: (photo: File) => {
            dispatch(updatePhoto(photo));
        },
        updateInfo: (newInfo: ProfileType) => {
            dispatch(updateInfo(newInfo));
        }
    }
}

export default compose<PropsType>(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,RootStateType>(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);




