import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, PostsType} from "../../../app/profile-reducer";
import {AppDispatch, RootStateType} from "../../../app/store";

type MapStatePropsType = {
    posts:PostsType[]
    newPostText : string
}
type MapDispatchPropsType = {
    addPost: (newPostText:string) => void
}

type OwnPropsType = {}

const mapStateToProps = (state:RootStateType):MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:AppDispatch):MapDispatchPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

