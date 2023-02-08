import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import profilePhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
           {/*<div>*/}
           {/*     <img*/}
           {/*         src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
           {/* </div>*/}
            <div className={s.descriptionBlock}>
                <img alt='avatar' src={props.profile.photos.large || profilePhoto} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;