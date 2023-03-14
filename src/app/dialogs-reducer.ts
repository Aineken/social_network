import {messagesAPI} from "../api";
import {DialogsType, MessagesType} from "../types/types";

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const SEND_REQUEST = 'SEND_REQUEST';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    dialogs: [] as Array<DialogsType>,
    messages: [] as Array<MessagesType>,
    isFetching: true,
};

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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



type ToggleIsFetchingActionType={
    type:typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type SendMessageSuccessActionType={
    type:typeof SEND_MESSAGE
    message:string
}
export const sendMessageSuccess = (message:string):SendMessageSuccessActionType => ({type: SEND_MESSAGE, message})

type DeleteMessageSuccessActionType = {
    type:typeof DELETE_MESSAGE
    messageId:number
}
export const deleteMessageSuccess = (messageId:number):DeleteMessageSuccessActionType => ({type: DELETE_MESSAGE, messageId})

type SetAllDialogsActionType={
    type:typeof SET_ALL_DIALOGS
    dialogs:Array<DialogsType>
}
export const setAllDialogs = (dialogs:Array<DialogsType>):SetAllDialogsActionType => ({type: SET_ALL_DIALOGS, dialogs})

type SetDialogsActionType ={
    type: typeof SET_DIALOGS
    dialogs:MessagesType
}
export const setDialogs = (dialogs:MessagesType):SetDialogsActionType => ({type: SET_DIALOGS, dialogs})

type SendMessageRequestSuccessActionType={
    type:typeof SEND_REQUEST
    request:string
}
export const sendMessageRequestSuccess = (request:string): SendMessageRequestSuccessActionType => ({type: SEND_REQUEST, request})


export const sendMessageRequest = (userId:number) => async (dispatch:any) => {
    const {data} = await messagesAPI.startChatting(userId)
    dispatch(sendMessageRequestSuccess(data))
}
export const requestAllDialogs = () => async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    const {data} = await messagesAPI.getAllDialogs();
    dispatch(setAllDialogs(data));
    dispatch(toggleIsFetching(false));
}
export const requestDialogs = (userId:number, page:number, count:number) => async (dispatch:any) => {
    const {data} = await messagesAPI.getDialogs(userId, page, count);
    dispatch(setDialogs(data.items));

}
export const sendMessage = (userId:number, body:string) => async (dispatch:any) => {
    const {data} = await messagesAPI.sendMessage(userId, body)
    dispatch(sendMessageSuccess(data.data.message))
}

export const deleteMessage = (messageId:number) => async (dispatch:any) => {
    try {
        await messagesAPI.deleteMessage(messageId)
        dispatch(deleteMessageSuccess(messageId))
    } catch (error) {
        console.log(error)
    }
}

export default dialogsReducer;