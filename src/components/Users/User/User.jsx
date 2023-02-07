import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import {UserContainer} from "./UserStyled";

const User = ({user,follow,unfollow, followingInProgress}) => {

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
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>
                                    Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>
                                    Follow</button>
                        }


                    <div>
                        <p>{user.name}</p>
                        <p>{user.status || "my status"}</p>
                    </div>

        </UserContainer>
    );
};

export default User;