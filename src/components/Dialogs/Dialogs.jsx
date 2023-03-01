import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {DialogItemsDiv, DialogsDiv, MessageDiv, MessagesDiv} from "./DialogsStyled";

const Dialogs = (props) => {

    let {dialogs, messages} = props.dialogsPage;

    let dialogsElements = dialogs.map(dialog => <DialogItem dialog={dialog} key={dialog.id}/>);
    let messagesElements = messages.map(message => <Message message={message} key={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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

























