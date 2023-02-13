import React, {memo} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from "./AddPostForm/AddPostForm";





const MyPosts = memo((props) => {
    let postsElements =
        props.posts.map( (p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})



export default MyPosts;