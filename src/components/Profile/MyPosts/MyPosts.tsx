import React, {memo} from 'react';

import Post from './Post/Post';
import AddPostForm from "./AddPostForm/AddPostForm";
import {MyPostsDiv, PostsContainer} from "./MyPostsStyled";
import {PostsType} from "../../../app/profile-reducer";


type PropsType = {
    posts: PostsType[]
    addPost: (values: string) => void
}

const MyPosts: React.FC<PropsType> = memo((props) => {
    let postsElements = [...props.posts].reverse()
        .map((p) => <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}/>);

    let onAddPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText);
    }

    return (<MyPostsDiv>
        <h3>My posts</h3>
        <AddPostForm onSubmit={onAddPost}/>
        <PostsContainer>
            {postsElements}
        </PostsContainer>

    </MyPostsDiv>)
})


export default MyPosts;