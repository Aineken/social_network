import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"

export const store = configureStore({
    reducer: {
        userPage: usersReducer,
    },
});


window.store=store.getState();