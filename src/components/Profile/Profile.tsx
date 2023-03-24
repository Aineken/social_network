import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDiv} from "./ProfileStyled";
import {PhotosType, ProfileType,} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string | null
    mainUser: number | null
    isAuth: boolean
    updateStatus: (status: string) => void
    updatePhoto: (photo: PhotosType) => void
    updateInfo: (newInfo: ProfileType) => void
}

const Profile:React.FC<PropsType> = (props) => {


    return (
       <ProfileDiv>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
       </ProfileDiv>

    )
}

export default Profile;