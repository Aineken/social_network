import React from 'react';
import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import {MainContainer, SecContainer} from "./UsersStyled";


let Users = (props) => {


    const {currentPage, onPageChanged, totalUsersCount, pageSize} = props

    return <MainContainer>
        <Pagination
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
        />

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