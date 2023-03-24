import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import appReducer from "./app-reducer";
import { useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {
        usersPage: usersReducer,
        auth: authReducer,
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        app: appReducer
    },
});



export type RootStateType = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch


// @ts-ignore
window.store=store.getState();