import {profileAPI, usersAPI} from "../api/index";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: "",
    id: 5
};

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    const {data} = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const {data} = await profileAPI.getStatus(userId);

    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    const {data} = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;