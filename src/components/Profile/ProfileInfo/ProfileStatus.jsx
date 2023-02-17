import React, {useEffect, useState} from 'react';
import {ProfileStatusDiv} from "../ProfileStyled";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
            setStatus(props.status)
        },
        [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <ProfileStatusDiv>
            <span onDoubleClick={activateEditMode}>✏️ Double Click to edit!!!</span>
            My Status:👇 <br/>
            {!editMode ?
                <p>{status || "-------"}</p>
                :
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>}


        </ProfileStatusDiv>
    )

}

export default ProfileStatus;