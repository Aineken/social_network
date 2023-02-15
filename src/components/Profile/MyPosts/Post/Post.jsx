import React from 'react';
import userPhoto from "../../../../assets/images/user.png";
import {LikeDiv, MessageDiv, PostDiv} from "./PostStyled";



const Post = (props) => {
  return (
    <PostDiv>
      <img alt='photoMain' src={userPhoto} />
        <MessageDiv>
            { props.message }
        </MessageDiv>
        <LikeDiv>
        <span>Like</span> { props.likesCount }
      </LikeDiv>
    </PostDiv>
  )
}

export default Post;