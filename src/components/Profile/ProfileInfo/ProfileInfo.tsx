import React, {useEffect, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profilePhoto from "../../../assets/images/user.png"
import {ProfileInfoDiv} from "../ProfileStyled";
import InputPhoto from "./InputPhoto";
import ProfileInfos from "./ProfileInfoForm/ProfileInfos";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import {Button} from "../../Login/LoginStyled";
import {sendMessageRequest} from "../../../app/dialogs-reducer";
import {useNavigate} from "react-router-dom";
import {ProfileType} from "../../../types/types";
import {useAppDispatch} from "../../../app/store";


type PropsType = {
    profile: ProfileType | null
    status: string
    mainUser: number | null
    isAuth: boolean
    updateStatus: (status: string) => void
    updatePhoto: (photo: File) => void
    updateInfo: (values: ProfileType) => void
}



const ProfileInfo:React.FC<PropsType> = ({profile, mainUser, status, updateStatus, updatePhoto, updateInfo}) => {
    const [isOwner, setIsOwner] = useState(false);
    const [editInfo, setEditInfo] = useState(false);

    const navigate = useNavigate();


    const dispatch = useAppDispatch();

    const handleSendRequest = async (userId:number) => {
        await dispatch(sendMessageRequest(userId))
        navigate(`/dialogs/${userId}`)
    }

    useEffect(() => {
        if ((profile && profile.userId) === mainUser) {
            setIsOwner(true)
        } else {
            setIsOwner(false)
        }
    }, [profile, mainUser])


    if (!profile) {
        return <Preloader/>
    }

    return (

        <ProfileInfoDiv>
            <img alt='avatar' src={profile.photos.large || profilePhoto}/>
            {isOwner && <InputPhoto updatePhoto={updatePhoto}/>}
            {editInfo ? <ProfileInfoForm profile={profile} updateInfo={updateInfo} setEditInfo={setEditInfo}/> :
                <ProfileInfos profile={profile} setEditInfo={setEditInfo} isOwner={isOwner}/>}
            <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            {!isOwner && <Button onClick={() => handleSendRequest(profile.userId)}>Send Message</Button>}
        </ProfileInfoDiv>
    )
}

export default ProfileInfo;