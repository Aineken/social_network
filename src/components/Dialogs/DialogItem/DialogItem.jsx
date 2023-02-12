import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({dialog}) => {
    let path = "/dialogs/" + dialog.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{dialog.name}</NavLink>
    </div>
}

export default DialogItem;