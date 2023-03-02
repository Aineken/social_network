import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {DialogDiv, DialogImg} from "../DialogsStyled";
import userPhoto from "../../../assets/images/user.png";


const DialogItem = ({dialog}) => {
    const path = "/dialogs/" + dialog.id;
    const navigate=useNavigate();

    const navUser=()=>{
        if(dialog){
        navigate(`/profile/${dialog.id}`)
        }
    }


    return (
        <DialogDiv>
            <DialogImg onClick={navUser} src={dialog.photos.small || userPhoto} alt="user-photo"/>
            <NavLink to={path} activeclassname={"active"}>
                {dialog.userName}
            </NavLink>
        </DialogDiv>)
}

export default DialogItem;