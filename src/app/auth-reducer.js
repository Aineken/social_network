import {authAPI} from "../api/index";

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


export const setAuthUserData = (userId, email, login, isAuth,captcha) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth,captcha}
});
export const setCaptchaData = (captcha) => ({
    type: SET_CAPTCHA, payload: {captcha}
});


export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(({data}) => {
                console.log(data)
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true,null));
                }
                if (data.resultCode === 1) {
                    dispatch(setAuthUserData(null, null, null, false, null));
                }

            }
        ).catch(error => {
                console.log(error)
            }
        );
}
export const getCaptchaUrl = () => (dispatch) => {
    return authAPI.captchaUrl()
        .then(({data}) => {
                dispatch(setCaptchaData(data.url));
            }
        ).catch(error => {
                console.log(error)
            }
        );
}
export const login = (email, password, rememberMe, captcha) => (dispatch) => {

    authAPI.login(email, password, rememberMe, captcha)
        .then(({data}) => {
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
        }).catch(error => {
        console.log(error)
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, null));
            }
        });
}


export default authReducer;