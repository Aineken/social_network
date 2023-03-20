import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import {UserContainer} from "./UserStyled";
import {Button} from "../../../styles/GlobalComponents";
import {UsersType} from "../../../types/types";


type PropsType = {
    user: UsersType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
const User:React.FC<PropsType> = ({user, follow, unfollow, followingInProgress}) => {

    return (
        <UserContainer>
            <div>
                <NavLink to={'/profile/' + user.id}>

                    <img alt="user" src={user.photos.small !== null ? user.photos.small : userPhoto}
                    />
                </NavLink>
            </div>

            {
                user.followed
                    ? <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</Button>
                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</Button>
            }


            <div>
                <p>{user.name}</p>
                <p>{user.status || "my status"}</p>
            </div>

        </UserContainer>
    );
};

export default User;