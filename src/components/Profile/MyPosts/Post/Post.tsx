import React, {FC} from 'react';
import userPhoto from "../../../../assets/images/user.png";
import {LikeDiv, MessageDiv, PostDiv} from "./PostStyled";

type PropsType = {
    message:string
    likesCount:number
}

const Post:FC<PropsType> = (props) => {
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