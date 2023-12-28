import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const LoginRouteWrapper = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};
