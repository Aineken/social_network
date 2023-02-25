import React, {useEffect, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profilePhoto from "../../../assets/images/user.png"
import {ProfileInfoDiv, ProfileInfos, ProfileText} from "../ProfileStyled";
import InputPhoto from "./InputPhoto";


const ProfileInfo = ({profile, mainUser, status, updateStatus,updatePhoto}) => {


    const [canEdit,setCanEdit] = useState(false);


    useEffect(() => {
        if ((profile && profile.userId) === mainUser) {
            setCanEdit(true)
        }
    }, [profile, mainUser])

    if (!profile) {
        return <Preloader/>
    }

    console.log(profile)
    return (

        <ProfileInfoDiv>
            <img alt='avatar' src={profile.photos.large || profilePhoto}/>
            {canEdit&&<InputPhoto updatePhoto={updatePhoto}/>}
            <ProfileInfos>
                <ProfileText>
                    {profile.fullName}
                </ProfileText>
                <ProfileText>
                    {profile.aboutMe}
                </ProfileText>
                <ProfileText>
                    Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}
                </ProfileText>
                {profile.lookingForAJob && <ProfileText>
                    {profile.lookingForAJobDescription}
                </ProfileText>}
            </ProfileInfos>
            <ProfileStatus status={status} updateStatus={updateStatus} canEdit={canEdit}/>
        </ProfileInfoDiv>
    )
}

export default ProfileInfo;