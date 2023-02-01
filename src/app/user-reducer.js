import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../api/index.js";
import {usersAPI} from "../api/index.js";


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followSuccess: (state, action) => {

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        },
        unfollowSuccess: (state, action) => {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        },
        setUsers: (state, action) => {
            return {...state, users: action.users}
        },
        setCurrentPage: (state, action) => {
            return {...state, currentPage: action.currentPage};
        },
        setTotalUsersCount: (state, action) => {
            return {...state, totalUsersCount: action.count}
        }, toggleIsFetching: (state, action) => {
            return {...state, isFetching: action.isFetching}
        }, toggleFollowingProgress: (state, action) => {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        },
    },

});



export const {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
} = usersSlice.actions;


export const getUsers = createAsyncThunk("users/getUsers", async (currentPage, pageSize) => {
    try {
        const { data } = await usersAPI.getUsers(currentPage, pageSize);
        return data;
    } catch (error) {
        console.log(error);
    }
});



// export const getUsers = (currentPage, pageSize) => {
//     return (dispatch) => {
//         dispatch(toggleIsFetching(true));
//
//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetching(false));
//             dispatch(setUsers(data.items));
//             dispatch(setTotalUsersCount(data.totalCount));
//         });
//     }
// }


export default usersSlice.reducer;
