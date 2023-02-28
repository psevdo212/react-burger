import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserInfo } from "../features/auth/authRequests";
import { getCookie } from "../utils/cookies";

export const ProtectedRoute = ({ children, notLogged = false}) => {
  const user = useSelector((store) => store.auth.userInfo);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch(getUserInfo());
    }
  }, [dispatch]);

  const from = location.state?.from || "/";

  if (user && notLogged) {
    return <Navigate to={from} />;
  }

  if (!user && !notLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;