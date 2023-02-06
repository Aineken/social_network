import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer"

export const store = configureStore({
    reducer: {
        usersPage: usersReducer,

    },
});



window.store=store.getState().usersPage;