import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRouteWrapper } from "./LoginRouteWraper";
import { ProtectedRoute } from "./MainRouteWraper";
import Login from "../pages/Login";
import Main from "../pages/Main";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRouteWrapper />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
