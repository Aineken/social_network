import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = ({dialog}) => {
    let path = "/dialogs/" + dialog.id;

    return <div>
        <NavLink to={path} activeclassname={"active"}> {dialog.userName}</NavLink>
    </div>
}

export default DialogItem;