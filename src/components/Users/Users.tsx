import React from 'react';
import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import {MainContainer, SecContainer} from "./UsersStyled";
import {UsersType} from "../../types/types";


type PropsType = {
    setCurrentPortion: (currentNumber: number) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize?: number
    currentPortion?: number
    followingInProgress:number[]
    follow:(userId: number)=>void
    unfollow:(userId: number)=>void
    users:UsersType[]
}
type StateType ={

}


let Users:React.FC<PropsType> = (props) => {


    const {
        currentPage,
        onPageChanged,
        totalUsersCount,
        pageSize,
        currentPortion,
        portionSize,
        setCurrentPortion
    } = props

    return <MainContainer>
        <Pagination
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPortion={currentPortion}
            portionSize={portionSize}
            setCurrentPortion={setCurrentPortion}
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