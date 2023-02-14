import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
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


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


const slowCode = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
};
export const initializeApp = () => async (dispatch) => {
    await slowCode();
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        }).catch(error=>{
        console.log(error)
    });
}

export default appReducer;