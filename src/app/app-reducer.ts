import {getAuthUserData} from "./auth-reducer";

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



type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():InitializedSuccessType => ({type: INITIALIZED_SUCCESS});


const slowCode = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
};
export const initializeApp = () => async (dispatch:any) => {
    await slowCode();
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        }).catch(error=>{
        console.log(error)
    });
}

export default appReducer;