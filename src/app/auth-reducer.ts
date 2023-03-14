import {authAPI} from "../api/index";
import {toast} from "react-toastify";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captcha: null as null | string,
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


type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: InitialStateType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captcha: string | null): SetAuthUserDataActionType => ({
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


export const getAuthUserData = () => async (dispatch: any) => {
    const {data} = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    } else if (data.resultCode === 1) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }

}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const {data} = await authAPI.captchaUrl();
    dispatch(setCaptchaData(data.url));
}
export const login = (email: string, password: string, rememberMe: boolean , captcha: string) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    const {data} = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}


export default authReducer;