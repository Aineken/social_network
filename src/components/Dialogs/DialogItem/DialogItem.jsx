import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogDiv, DialogImg} from "../DialogsStyled";
import userPhoto from "../../../assets/images/user.png";


const DialogItem = ({dialog}) => {
    const path = "/dialogs/" + dialog.id;

    const username = dialog.userName;
    return (<NavLink to={path} activeclassname={"active"}>
        <DialogDiv>
            <DialogImg src={dialog.photos.small || userPhoto} alt="user-photo"/>
            <span>
             {username}
             </span>
        </DialogDiv>
    </NavLink>)
}

export default DialogItem;