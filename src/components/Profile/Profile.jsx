import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDiv} from "./ProfileStyled";



const Profile = (props) => {


    return (

       <ProfileDiv>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
       </ProfileDiv>

    )
}

export default Profile;