import React, {useEffect} from "react";
import Users from "./Users.jsx";
import {connect, useDispatch} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../app/user-reducer.js";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
// import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

const UsersContainer = (props) => {
    const dispatch = useDispatch();

    const {currentPage, pageSize} = props;

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
    }, [dispatch, currentPage, pageSize]);

    const onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={onPageChanged}
               users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               followingInProgress={props.followingInProgress}
        />
    </>;
};


let mapStateToProps = (state) => {

    const data = {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
 return data;
}


// export default compose(
//     withAuthRedirect,

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
(UsersContainer)