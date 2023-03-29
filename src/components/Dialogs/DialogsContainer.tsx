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
    }, [requestAllDialogs])

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
    requestDialogs: (userId: number, page: number | undefined, count: number| undefined) => void
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

const mapDispatchToProps = {
    sendMessage,
    deleteMessage,
    requestAllDialogs,
    requestDialogs,
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: (newMessageBody) => {
//             dispatch(sendMessageCreator(newMessageBody));
//         },
//         requestDialogs:() => {
//             dispatch(requestDialogs());
//         },
//     }
// }
export default compose<PropsType>(connect<MapStatePropsType,MapStatePropsType,OwnType,RootStateType>(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer);