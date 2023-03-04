import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {useEffect} from "react";
import { getCookie } from "../utils/cookies";
import { getUserInfo } from "../features/auth/authRequests";

export const ProtectedRoute = ({ children, notLogged = false }) => {
  const user = useSelector((store) => store.auth.userInfo);
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from || "/";

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch(getUserInfo());
    }
  }, []);

  if (user && notLogged) {
    return <Navigate to={from} />;
  }

  if (!user && !notLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
