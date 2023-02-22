import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = ({dialog}) => {
    let path = "/dialogs/" + dialog.id;

    return <NavLink to={path} activeclassname={"active"}> {dialog.name}</NavLink>
}

export default DialogItem;