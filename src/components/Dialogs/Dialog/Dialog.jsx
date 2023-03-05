import React from 'react';
import {MessageText} from "../DialogsStyled";


const Dialog = ({message, mainUserId,deleteMessage}) => {

    const senderFirstLetter=message.senderName.charAt(0).toUpperCase();

    return <MessageText main={message.senderId === mainUserId}>
        <div>{message.body}</div>
        <span onDoubleClick={()=>deleteMessage(message.id)}> {senderFirstLetter}</span>

    </MessageText>
}

export default Dialog;