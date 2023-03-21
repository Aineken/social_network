import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "@reduxjs/toolkit";
import {RootStateType} from "./store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}



type ActionTypes = InitializedSuccessType

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():InitializedSuccessType => ({type: INITIALIZED_SUCCESS});



export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionTypes>

const slowCode = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
};
export const initializeApp = ():ThunkType => async (dispatch) => {
    await slowCode();
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        }).catch(error=>{
        console.log(error)
    });
}

export default appReducer;