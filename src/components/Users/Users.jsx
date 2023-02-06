import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = 1;
    let pagesNum = Math.ceil(props.totalUsersCount / props.pageSize);
    if (pagesNum > 10) {
        pagesCount = 10;
    } else {
        pagesCount = pagesNum;
    }
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span key={index}
                             className={ props.currentPage === p ? styles.selectedPage:null}
                             onClick={(e) => {

                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>

                        <img alt="user" src={u.photos.small !== null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>
                                Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status || "my status"}</div>
                    </span>
                    <span>
                        <div>{"country"}</div>
                        <div>{"city"}</div>
                    </span>
                </span>
                </div>
            )


        }
    </div>
}


export default Users;