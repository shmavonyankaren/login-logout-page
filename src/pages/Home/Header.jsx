import React from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import {
  changeEmail,
  changePassword,
  logoutUser,
} from "../../redux/user/userSlice";
import Logo from "../../assets/Logo.png";
export default function Header() {
  const dispatch = useDispatch();
  const loggout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    dispatch(changeEmail(""));
    dispatch(changePassword(""));
    dispatch(logoutUser());
  };

  return (
    <div className="flex pb-3 bg-slate-300">
      <div className="flex justify-center items-center">
        <img
          className="max-h-[60px] min-h-[60px] max-w-[100px] min-w-[100px]"
          src={Logo}
          alt="Logo"
        />
        <h1 className="pl-5 text-black font-semibold text-4xl">Events</h1>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex items-center mr-3">
          <ButtonComponent
            type="button"
            text="Log Out"
            onClickHandler={loggout}
          />
        </div>
      </div>
    </div>
  );
}
