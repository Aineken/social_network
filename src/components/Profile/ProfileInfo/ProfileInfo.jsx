import React, {useEffect, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profilePhoto from "../../../assets/images/user.png"
import {ProfileInfoDiv} from "../ProfileStyled";
import InputPhoto from "./InputPhoto";
import ProfileInfos from "./ProfileInfoForm/ProfileInfos";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";




const ProfileInfo = ({profile, mainUser, status, updateStatus, updatePhoto,updateInfo}) => {
    const [isOwner, setIsOwner] = useState(false);
    const [editInfo, setEditInfo] = useState(false);


    useEffect(() => {
        if ((profile && profile.userId) === mainUser) {
            setIsOwner(true)
        }else{
        setIsOwner(false)
        }
    }, [profile, mainUser])

    if (!profile) {
        return <Preloader/>
    }

    return (

        <ProfileInfoDiv>
            <img alt='avatar' src={profile.photos.large || profilePhoto}/>
            {isOwner && <InputPhoto updatePhoto={updatePhoto}  />}
            {editInfo? <ProfileInfoForm profile={profile} updateInfo={updateInfo} setEditInfo={setEditInfo}  /> :
                <ProfileInfos profile={profile} setEditInfo={setEditInfo} isOwner={isOwner} />}
            <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
        </ProfileInfoDiv>
    )
}

export default ProfileInfo;