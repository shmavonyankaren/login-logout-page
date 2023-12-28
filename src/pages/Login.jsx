import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "../components/LoginButtonComponent";
import InputComponents from "../components/LoginInputComponents";
import share from "../assets/share.mp4";
import {
  changeEmail,
  changePassword,
  loginUser,
} from "../redux/user/userSlice";

export default function Login() {
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("loggedIn", "yes");

    dispatch(changeEmail(tempEmail));
    dispatch(changePassword(tempPassword));
    dispatch(loginUser());
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={share}
          type="video/mp4"
          controls={false}
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <form
            className="border-2 border-inherit rounded-lg	pt-16 pb-10 px-6 shadow-2xl bg-white/80 font-medium"
            onSubmit={onClickHandler}
          >
            <InputComponents
              type="email"
              text="Email"
              placeholderText="Please write your email"
              setValue={setTempEmail}
              value={tempEmail}
            />
            <InputComponents
              type="password"
              text="Password"
              placeholderText="Please write your password"
              setValue={setTempPassword}
              value={tempPassword}
            />
            <ButtonComponent text="Login" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
