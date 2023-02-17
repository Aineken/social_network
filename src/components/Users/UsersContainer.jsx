import React, {useEffect} from "react";
import Users from "./Users.jsx";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage, setCurrentPortion,
    toggleFollowingProgress,
    unfollow
} from "../../app/user-reducer.js";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage, getCurrentPortion,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers
} from "../../app/users-selectors";

const UsersContainer = (props) => {


    const {currentPage, pageSize, requestUsers, setCurrentPage} = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const onPageChanged = (pageNumber) => {
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


const mapStateToProps = (state) => {
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
    follow, unfollow, setCurrentPortion, setCurrentPage, toggleFollowingProgress, requestUsers
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)