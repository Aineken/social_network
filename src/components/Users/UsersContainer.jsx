import React, { useEffect } from "react";
import Users from "./Users.jsx";
import { useDispatch } from "react-redux";
import { getUsers } from "../../app/user-reducer.js";

const UsersContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ currentPage: 2, pageSize: 14 }));
  }, [dispatch]);

  return <Users />;
};

export default UsersContainer;
