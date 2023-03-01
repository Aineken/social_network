import {messagesAPI, usersAPI} from "../api";


const SEND_MESSAGE = 'SEND_MESSAGE';
const SEND_REQUEST = 'SEND_REQUEST';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    dialogs: [],
    messages: [],
    id: 6,
    isFetching: true,
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.id + 1, message: body}],
                id: state.id + 1
            }
        }
        case SET_ALL_DIALOGS: {
            return {...state, dialogs: action.dialogs}
        }
        case SET_DIALOGS:{
            return{
                ...state,messages: action.dialogs
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const setAllDialogs = (dialogs) => ({type: SET_ALL_DIALOGS, dialogs});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const sendMessageRequestSuccess = (request) => ({type: SEND_REQUEST, request})



export const sendMessageRequest = (userId) => async (dispatch) => {
    console.log(userId)
    const {data} = await messagesAPI.startChatting(userId)
    dispatch(sendMessageRequestSuccess(data))
}
export const requestAllDialogs = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const {data} = await messagesAPI.getAllDialogs();
    dispatch(setAllDialogs(data));
    dispatch(toggleIsFetching(false));
}
export const requestDialogs =(userId,page,count)=>async (dispatch)=>{
    const {data} = await messagesAPI.getDialogs(userId,page,count);
    console.log(data);
    dispatch(setDialogs(data));
}

export default dialogsReducer;