import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDiv} from "./ProfileStyled";

const Profile = (props) => {
    return (
       <ProfileDiv>


            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
       </ProfileDiv>

    )
}

export default Profile;