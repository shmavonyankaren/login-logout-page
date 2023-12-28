import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRouteWrapper } from "./LoginRouteWraper";
import { ProtectedRoute } from "./MainRouteWraper";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRouteWrapper />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
