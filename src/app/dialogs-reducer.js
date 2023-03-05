import {messagesAPI} from "../api";


const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const SEND_REQUEST = 'SEND_REQUEST';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    dialogs: [],
    messages: [],
    isFetching: true,
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state, messages: [...state.messages, action.message]
            }
        }
        case
        SET_ALL_DIALOGS: {
            return {...state, dialogs: action.dialogs}
        }
        case
        SET_DIALOGS: {
            return {...state, messages: action.dialogs}
        }
        case
        TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case
        DELETE_MESSAGE: {
            return {...state, messages: state.messages.filter((message) => message.id !== action.messageId)}
        }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const sendMessageSuccess = (message) => ({type: SEND_MESSAGE, message});
export const deleteMessageSuccess = (messageId) => ({type: DELETE_MESSAGE, messageId});
export const setAllDialogs = (dialogs) => ({type: SET_ALL_DIALOGS, dialogs});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const sendMessageRequestSuccess = (request) => ({type: SEND_REQUEST, request})


export const sendMessageRequest = (userId) => async (dispatch) => {
    const {data} = await messagesAPI.startChatting(userId)
    dispatch(sendMessageRequestSuccess(data))
}
export const requestAllDialogs = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const {data} = await messagesAPI.getAllDialogs();
    dispatch(setAllDialogs(data));
    dispatch(toggleIsFetching(false));
}
export const requestDialogs = (userId, page, count) => async (dispatch) => {
    const {data} = await messagesAPI.getDialogs(userId, page, count);
    dispatch(setDialogs(data.items));

}
export const sendMessage = (userId, body) => async (dispatch) => {
    const {data} = await messagesAPI.sendMessage(userId, body)
    dispatch(sendMessageSuccess(data.data.message))
}

export const deleteMessage = (messageId) => async (dispatch) => {
    try  {
        await messagesAPI.deleteMessage(messageId)
        dispatch(deleteMessageSuccess(messageId))
    } catch (error) {
        console.log(error)
    }
}

export default dialogsReducer;