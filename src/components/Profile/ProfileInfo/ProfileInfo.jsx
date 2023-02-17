import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profilePhoto from "../../../assets/images/user.png"
import {ProfileInfoDiv} from "../ProfileStyled";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
            <ProfileInfoDiv>
                <img alt='avatar' src={props.profile.photos.large || profilePhoto} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </ProfileInfoDiv>
    )
}

export default ProfileInfo;