import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";

export const store = configureStore({
    reducer: {
        usersPage: usersReducer,
        auth: authReducer,
        dialogsPage: dialogsReducer,

    },
});



window.store=store.getState().usersPage;