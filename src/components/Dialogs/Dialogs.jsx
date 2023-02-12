import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let {dialogs,messages} = props.dialogsPage;

    let dialogsElements = dialogs.map(dialog => <DialogItem dialog={dialog} key={dialog.id} />);
    let messagesElements = messages.map(message => <Message message={message} key={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;

























