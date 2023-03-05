import React, {useEffect} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {DialogItemsDiv, DialogsDiv, MessageDiv, MessagesDiv} from "./DialogsStyled";
import {useParams} from "react-router-dom";

const Dialogs = ({requestDialogs, ...props}) => {

    let {dialogId} = useParams();
    useEffect(() => {
            if (dialogId) {
                requestDialogs(dialogId)
            }
        }, [dialogId, requestDialogs]
    )

    let {dialogs, messages} = props.dialogsPage;

    console.log(dialogs)
    console.log(messages)


    let dialogsElements = dialogs.slice(0,9).map(dialog => <DialogItem dialog={dialog} key={dialog.id}/>);
    let messagesElements = messages.slice(0,9).map(message => <Dialog deleteMessage={props.deleteMessage} mainUserId={props.mainUserId} message={message} key={message.id}/>);

    let addNewMessage = (values) => {
        if (dialogId) {
            props.sendMessage(dialogId, values)
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

























