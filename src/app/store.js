import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"
import authReducer from "./auth-reducer";

export const store = configureStore({
    reducer: {
        usersPage: usersReducer,
        auth: authReducer,

    },
});



window.store=store.getState().usersPage;