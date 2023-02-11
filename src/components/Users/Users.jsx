import React from 'react';
import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import {MainContainer, SecContainer} from "./UsersStyled";


let Users = (props) => {
    let pagesCount=1 ;
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


    const {currentPage, onPageChanged} = props

    return <MainContainer>

        <Pagination pages={pages}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>

        <SecContainer>

            {
                props.users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}/>
                )


            }
        </SecContainer>
    </MainContainer>
}


export default Users;