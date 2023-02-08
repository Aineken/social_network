import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import appReducer from "./app-reducer";

export const store = configureStore({
    reducer: {
        usersPage: usersReducer,
        auth: authReducer,
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        app: appReducer
    },
});



window.store=store.getState().usersPage;