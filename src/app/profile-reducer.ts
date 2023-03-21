import {profileAPI, usersAPI} from "../api/index";
import {toast} from "react-toastify";
import {PhotosType, ProfileType} from "../types/types";
import { ThunkAction} from "@reduxjs/toolkit";
import {RootStateType} from "./store";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO_SUCCESS = "UPDATE_PHOTO_SUCCESS";


type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as PostsType[],
    profile: null as ProfileType | null,
    status: "",
    newPostText: "",
    id: 5
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.id + 1,
                message: action.newPostText,
                likesCount: state.id + 1
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
                id: state.id + 1
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case UPDATE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileType }
        }
        default:
            return state;
    }
}
type ActionTypes = AddPostActionCreatorActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | UpdatePhotoSuccessActionType

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText:string
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status})

type UpdatePhotoSuccessActionType = {
    type : typeof UPDATE_PHOTO_SUCCESS
    photo: PhotosType
}
export const updatePhotoSuccess = (photo:PhotosType):UpdatePhotoSuccessActionType => ({type: UPDATE_PHOTO_SUCCESS, photo})

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionTypes>

export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
    const {data} = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data))
}

export const getStatus = (userId:number):ThunkType => async (dispatch) => {
    const {data} = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    const {data} = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updatePhoto = (photo:PhotosType):ThunkType => async (dispatch) => {
    const {data} = await profileAPI.updatePhoto(photo);
    console.log(data)
    if (data.resultCode === 0) {
        console.log(data)
        dispatch(updatePhotoSuccess(data.data.photos));
    }
}

export const updateInfo = (newInfo:ProfileType):ThunkType => async (dispatch, getState:any) => {
    const userId = getState().profilePage.profile.userId;
    const {data} = await profileAPI.updateInfo(newInfo);

    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else if (data.resultCode === 1) {
        toast.info(data.messages[0])
        return Promise.reject(data.messages);
    } else {
        return Promise.reject("some other reason")
    }
}

export default profileReducer;