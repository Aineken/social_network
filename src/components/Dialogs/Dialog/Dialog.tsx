import React from 'react';
import {MessageText} from "../DialogsStyled";
import {MessagesType} from "../../../types/types";



type PropsType = {
    message: MessagesType
    mainUserId: number | undefined
    deleteMessage: (messageId: number) => void
}
const Dialog:React.FC<PropsType> = ({message, mainUserId,deleteMessage}) => {

    const senderFirstLetter=message.senderName.charAt(0).toUpperCase();

    return <MessageText main={message.senderId === mainUserId}>
        <div>{message.body}</div>
        <span onDoubleClick={()=>deleteMessage(+message.id)}> {senderFirstLetter}</span>

    </MessageText>
}

export default Dialog;