import React from 'react';
import s from './../Dialogs.module.css';

const Message = ({message}) => {
    return <div className={s.dialog}>{message.message}</div>
}

export default Message;