import {createSelector} from "@reduxjs/toolkit";
import {RootStateType} from "./store";

export const getUsersSelector = (state:RootStateType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state:RootStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state:RootStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state:RootStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state:RootStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state:RootStateType) => {
    return state.usersPage.followingInProgress;
}

export const getCurrentPortion = (state:RootStateType) => {
    return state.usersPage.currentPortion;
}
export const getPortionSize = (state:RootStateType) => {
    return state.usersPage.portionSize;
}



export const countSomethingDifficult = (state:RootStateType) => {
    debugger
    //for... math... big arrays
    let count = 23;
    return count;
}