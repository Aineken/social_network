import React, {memo} from 'react';

import Post from './Post/Post';
import AddPostForm from "./AddPostForm/AddPostForm";
import {MyPostsDiv} from "./MyPostsStyled";





const MyPosts = memo((props) => {
    let postsElements =
        [...props.posts].reverse().map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
       <MyPostsDiv>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost} />
            <div>
                {postsElements}
            </div>
       </MyPostsDiv>
    )
})



export default MyPosts;