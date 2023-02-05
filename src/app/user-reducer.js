import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersAPI} from "../api/index.js";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followSuccess: (state, action) => {
            state.users = state.users.map((u) => {
                if (u.id === action.payload) {
                    return {...u, followed: true};
                }
                return u;
            });
        },
        unfollowSuccess: (state, action) => {

            state.users = state.users.map((u) => {
                if (u.id === action.payload) {
                    return {...u, followed: false};
                }
                return u;
            });
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalUsersCount: (state, action) => {
            state.totalUsersCount = action.payload;
        },
        toggleIsFetching: (state, action) => {


            state.isFetching = action.payload;
        },
        toggleFollowingProgress: (state, action) => {
            state.followingInProgress = state.isFetching
                ? [...state.followingInProgress, action.payload]
                : state.followingInProgress.filter((id) => id !== action.payload);

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {

                // toggleIsFetching(false)
                // setUsers(action.payload.items);
                // setTotalUsersCount(action.payload.totalCount);
            })
            .addCase(getUsers.pending, (state, action) => {
                debugger


            });
        // .addCase(follow.fulfilled, (state, action) => {
        //     if (action.payload.resultCode == 0) {
        //         followSuccess(userId)
        //     }
        //     toggleFollowingProgress(false, userId)
        // })
        // .addCase(follow.pending, (state, action) => {
        //     toggleFollowingProgress(true, userId)
        // })
        // .addCase(unfollow.fulfilled, (state, action) => {
        //
        //     if (action.payload.resultCode == 0) {
        //         unfollowSuccess(userId)
        //     }
        //     toggleFollowingProgress(false, userId)
        // })
        // .addCase(unfollow.pending, (state, action) => {
        //     toggleFollowingProgress(true, userId)
        // })
    },
});

export const {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
} = usersSlice.actions;



toggleIsFetching(false);

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async ({currentPage, pageSize},{dispatch}) => {
        try {
            const {data} = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data));
        } catch (error) {
            console.log(error);
        }
    }
);


// export const follow = createAsyncThunk("users/follow", async (userId) => {
//     try {
//         const {data} = await usersAPI.follow(userId)
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// });
// export const unfollow = createAsyncThunk("users/unfollow", async (userId) => {
//     try {
//         const {data} = await usersAPI.unfollow(userId)
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// });

export default usersSlice.reducer;
