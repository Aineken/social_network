import {authAPI} from "../api";
import {toast} from "react-toastify";
import {ThunkAction} from "@reduxjs/toolkit";
import {RootStateType} from "./store";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    userId: undefined as undefined | number,
    email: undefined as undefined | string,
    login: undefined as undefined | string,
    isAuth: false,
    captcha: undefined as undefined | string,
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


type ActionTypes = SetAuthUserDataActionType
    | SetCaptchaDataActionType


type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: InitialStateType
}
export const setAuthUserData = (userId: number | undefined, email: string | undefined, login: string | undefined, isAuth: boolean, captcha: string | undefined): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth, captcha}
});

type SetCaptchaDataActionType = {
    type: typeof SET_CAPTCHA
    payload: { captcha: string }
}
export const setCaptchaData = (captcha: string): SetCaptchaDataActionType => ({
    type: SET_CAPTCHA, payload: {captcha}
});


export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const {data} = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true, undefined));
    } else if (data.resultCode === 1) {
        dispatch(setAuthUserData(undefined, undefined, undefined, false, undefined));
    }

}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const {data} = await authAPI.captchaUrl();
    dispatch(setCaptchaData(data.url));
}
export const login = (email: string, password: string, rememberMe: boolean|undefined, captcha: string|undefined): ThunkType => async (dispatch) => {
    const {data} = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        toast.success("Success login!!!");
        return dispatch(getAuthUserData())
    } else if (data.resultCode === 1) {
        toast.warn(data.messages[0]);
        // dispatch(getCaptchaUrl())
    } else if (data.resultCode === 10) {
        toast.warn(data.messages[0]);
        dispatch(getCaptchaUrl())
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const {data} = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, undefined, undefined, false, undefined));
    }
}


export default authReducer;