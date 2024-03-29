import React from 'react';
import {ProfileInfoContainer, ProfileText} from "../../ProfileStyled";
import {ProfileType} from "../../../../types/types";


type PropsType = {
    profile:ProfileType
    setEditInfo:(edit: boolean) => void
    isOwner:boolean

}
const ProfileInfos:React.FC<PropsType> = ({profile,setEditInfo,isOwner}) => {
    return (
        <ProfileInfoContainer>
            {isOwner && <button onClick={()=> setEditInfo(true)} >Edit me</button>}
            <ProfileText>
                <b>Full name</b>: {profile.fullName || "null"}
            </ProfileText>
            <ProfileText>
                <b>About Me</b>: {profile.aboutMe || "null"}
            </ProfileText>
            <ProfileText>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
            </ProfileText>
            {profile.lookingForAJob && <ProfileText>
                <b>My professional Skills</b>: {profile.lookingForAJobDescription}
            </ProfileText>}
            {Object.keys(profile.contacts).filter((arr) =>profile.contacts[arr]!==""&&profile.contacts[arr]!==null).map((data) => (
                <ProfileText key={data}>
                    <b>{data}</b>: <a href={profile.contacts[data]} target="_blank" rel="noreferrer" > {profile.contacts[data]} </a>
                </ProfileText>
            ))}
        </ProfileInfoContainer>
    );
};

export default ProfileInfos;

