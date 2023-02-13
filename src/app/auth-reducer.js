import {authAPI} from "../api/index";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});

export const getAuthUserData = () => (dispatch) => {
     return authAPI.me()
        .then(({data}) => {
            console.log(data)
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            if (data.resultCode === 1) {
                dispatch(setAuthUserData(null, null, null, false));
            }

            }
        ).catch(error => {
            console.log(error)
        }
    );
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(({data}) => {
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        }).catch(error=>{
        console.log(error)
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;