import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
