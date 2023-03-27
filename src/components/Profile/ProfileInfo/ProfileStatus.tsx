import React, {useEffect, useState} from 'react';
import {ProfileStatusDiv} from "../ProfileStyled";


type PropsType = {
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {
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
        if (status) props.updateStatus(status);
    }

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <ProfileStatusDiv>
            {props.isOwner && <span onDoubleClick={activateEditMode}>✏️ Double Click to edit!!!</span>}
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