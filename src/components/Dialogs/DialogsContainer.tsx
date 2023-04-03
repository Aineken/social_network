import React, {useEffect} from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {deleteMessage, requestAllDialogs, requestDialogs, sendMessage} from "../../app/dialogs-reducer";
import Preloader from "../common/Preloader/Preloader";
import {RootStateType} from "../../app/store";
import {DialogsType, MessagesType} from "../../types/types";


const DialogsContainer:React.FC<PropsType> = ({requestAllDialogs, isFetching, ...props}) => {

    useEffect(() => {
        requestAllDialogs();
    }, [])



    return (<>
        {isFetching? <Preloader/> : <Dialogs {...props}/>}
    </>
    );
};


type MapStatePropsType = {
    dialogsPage:{
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
    isFetching: boolean
    mainUserId: number | undefined
}
type OwnType = {
}

type MapDispatchPropsType = {
    sendMessage: (userId: number, body: string) => void
    deleteMessage: (messageId: number) => void
    requestAllDialogs: () => void
    requestDialogs: (userId: number, page?: number, count?: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnType

let mapStateToProps = (state:RootStateType):MapStatePropsType => {

    const {
        dialogsPage: {
            isFetching, ...restProps
        }
    } = state;

    return {
        dialogsPage: restProps,
        isFetching: isFetching,
        mainUserId: state.auth.userId,
    }
}

const mapDispatchToProps:MapDispatchPropsType = {
    sendMessage,
    deleteMessage,
    requestAllDialogs,
    requestDialogs,
}


// let mapDispatchToProps = (dispatch:DispatchType):MapDispatchPropsType => {
//     return {
//         sendMessage: (userId: number, body: string) => dispatch(sendMessage(userId, body)),
//         deleteMessage: (messageId: number) => dispatch(deleteMessage(messageId)),
//         requestAllDialogs: () => dispatch(requestAllDialogs()),
//         requestDialogs: (userId: number, page: number | undefined, count: number | undefined) => dispatch(requestDialogs(userId, page, count))
//     }
// }
export default compose(withAuthRedirect, connect<MapStatePropsType,MapDispatchPropsType,OwnType,RootStateType>(mapStateToProps, mapDispatchToProps))(DialogsContainer);