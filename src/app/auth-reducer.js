import {authAPI} from "../api/index";
import {toast} from "react-toastify";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
};

const authReducer = (state = initialState, action) => {
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
export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth, captcha}
});
export const setCaptchaData = (captcha) => ({
    type: SET_CAPTCHA, payload: {captcha}
});


export const getAuthUserData = () => async (dispatch) => {
    const {data} = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    } else if (data.resultCode === 1) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }

}
export const getCaptchaUrl = () => async (dispatch) => {
    const {data} = await authAPI.captchaUrl();
    dispatch(setCaptchaData(data.url));
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    const {data} = await authAPI.login(email, password, rememberMe, captcha);
    console.log(data)
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

export const logout = () => async (dispatch) => {
    const {data} = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}


export default authReducer;