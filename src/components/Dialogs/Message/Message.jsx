import React from 'react';
import {MessageText} from "../DialogsStyled";


const Message = ({message, mainUserId}) => {

const senderFirstLetter=message.senderName.charAt(0).toUpperCase();
    return <MessageText main={message.senderId === mainUserId}>
        <div>{message.body}</div>
        <span>{senderFirstLetter}</span>

    </MessageText>
}

export default Message;