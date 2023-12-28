import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { loginUser } from "./redux/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const val = window.localStorage.getItem("loggedIn");
    if (val && val === "yes") {
      dispatch(loginUser());
    }
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
