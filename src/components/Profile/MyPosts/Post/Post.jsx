import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";


const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt='photoMain' src={userPhoto} />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;