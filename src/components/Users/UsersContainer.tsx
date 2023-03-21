import React, {useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage, setCurrentPortion,
    unfollow
} from "../../app/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage, getCurrentPortion,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers
} from "../../app/users-selectors";
import {RootStateType} from "../../app/store";
import {UsersType} from "../../types/types";


type MapStatePropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    portionSize?: number
    currentPortion?: number
    followingInProgress:number[]
    users:UsersType[]
    isFetching:boolean

}
type MapDispatchPropsType = {
    setCurrentPortion: (currentNumber: number) => void
    follow:(userId: number)=>void
    unfollow:(userId: number)=>void
    requestUsers:(pageNumber:number, pageSize:number)=>void
    setCurrentPage:(pageNumber:number)=>void
}

type OwnPropsType ={
testName:string
}

type PropsType = MapDispatchPropsType&MapStatePropsType&OwnPropsType;


const UsersContainer:React.FC<PropsType> = (props) => {


    const {currentPage, pageSize, requestUsers, setCurrentPage} = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [currentPage, pageSize,requestUsers]);

    const onPageChanged = (pageNumber:number) => {
        requestUsers(pageNumber, pageSize);
        setCurrentPage(pageNumber);
    }

    return <>
        {props.isFetching ? <Preloader/> :
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   users={props.users}
                   follow={props.follow}
                   unfollow={props.unfollow}
                   followingInProgress={props.followingInProgress}
                   portionSize={props.portionSize}
                   currentPortion={props.currentPortion}
                   setCurrentPortion={props.setCurrentPortion}
            />}
    </>;
};


const mapStateToProps = (state:RootStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
        currentPortion: getCurrentPortion(state)
    }
}

const mapDispatchToProps = {

  follow, unfollow, setCurrentPortion, setCurrentPage, requestUsers,
}
export default compose<PropsType>(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,RootStateType>(mapStateToProps,mapDispatchToProps)
)(UsersContainer)