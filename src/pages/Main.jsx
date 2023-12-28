import React from "react";
import { useDispatch } from "react-redux";
import {
  changeEmail,
  changePassword,
  logoutUser,
} from "../redux/user/userSlice";

export default function Main() {
  const dispatch = useDispatch();
  const loggout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    dispatch(changeEmail(""));
    dispatch(changePassword(""));
    dispatch(logoutUser());
  };

  return (
    <div>
      <button onClick={loggout}>LogOut</button>
    </div>
  );
}
