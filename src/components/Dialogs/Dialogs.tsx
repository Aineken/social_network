import React, {useEffect} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {DialogItemsDiv, DialogsDiv, MessageDiv, MessagesDiv} from "./DialogsStyled";
import {useNavigate, useParams} from "react-router-dom";
import {DialogsType, MessagesType} from "../../types/types";


type PropsType = {
    dialogsPage: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
    sendMessage: (userId: number, newMessageBody: string) => void
    deleteMessage: (messageId: number) => void
    mainUserId: number | undefined
requestDialogs: (userId: number, page?: number , count?: number) => void
}

const Dialogs:React.FC<PropsType> = ({requestDialogs, ...props}) => {

    let {dialogId} = useParams();
    let {dialogs, messages} = props.dialogsPage;


    const navigate = useNavigate();

    useEffect(() => {
            if (dialogId) {
                requestDialogs(+dialogId)
            }else{
                // requestDialogs(dialogs[0].id)
                navigate(`/dialogs/${dialogs[0].id}`)
            }


        }, [dialogs,dialogId, requestDialogs,navigate]
    )

    let dialogsElements = dialogs.slice(0,9).map(dialog => <DialogItem dialog={dialog} key={dialog.id}/>);
    let messagesElements = messages.slice(0,9).map(message => <Dialog deleteMessage={props.deleteMessage} mainUserId={props.mainUserId} message={message} key={message.id}/>);

    let addNewMessage = (newMessageBody:string) => {
        if (dialogId) {
            props.sendMessage(+dialogId, newMessageBody)
        }
    }


    return (
        <DialogsDiv>
            <DialogItemsDiv>
                {dialogsElements}
            </DialogItemsDiv>
            <MessagesDiv>
                <MessageDiv>{messagesElements}</MessageDiv>

                <AddMessageForm onSubmit={addNewMessage}/>
            </MessagesDiv>
        </DialogsDiv>
    )
}

export default Dialogs;

























