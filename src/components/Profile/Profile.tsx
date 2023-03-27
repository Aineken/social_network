import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDiv} from "./ProfileStyled";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    mainUser: number | null
    isAuth: boolean
    updateStatus: (status: string) => void
    updatePhoto: (photo: File) => void
    updateInfo: (values: ProfileType) => void
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