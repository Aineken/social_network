import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {DialogDiv, DialogImg} from "../DialogsStyled";
import userPhoto from "../../../assets/images/user.png";
import {DialogsType} from "../../../types/types";


type PropsType = {
    dialog: DialogsType
}

const DialogItem: React.FC<PropsType> = ({dialog}) => {


    const path = "/dialogs/" + dialog.id;


    const navigate = useNavigate();

    const navUser = () => {
        if (dialog) {
            navigate(`/profile/${dialog.id}`)
        }
    }


    return (
        <DialogDiv>
            <DialogImg onClick={navUser} src={dialog.photos.small || userPhoto} alt="user-photo"/>
            <NavLink to={path} className={({isActive})=>isActive?"active":undefined}
            >
            {dialog.userName}
        </NavLink>
</DialogDiv>)
}

export default DialogItem;