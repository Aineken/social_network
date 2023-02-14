import React, {useEffect} from "react";
import Users from "./Users.jsx";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../app/user-reducer.js";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../app/users-selectors";

const UsersContainer = (props) => {


    const {currentPage, pageSize,requestUsers,setCurrentPage} = props;

    useEffect(() => {
       requestUsers(currentPage, pageSize);
    }, [ currentPage, pageSize]);

    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, props.pageSize);
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
        />}
    </>;
};


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)