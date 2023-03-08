import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getCookie } from "../utils/cookies";
import { getUserInfo } from "../features/auth/authRequests";
import Loader from "../components/Loader/Loader";

export const ProtectedRoute = ({ children, notLogged = false }) => {
  const user = useSelector((store) => store.auth.success);
  const isLoading = useSelector((store) => store.auth.isLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch(getUserInfo());
    }
  }, [dispatch]);

  if (user && notLogged) {
    return <Navigate to={from} />;
  }

  if (!user && !notLogged) {
    isLoading ? <Loader/> : <Navigate to="/login" state={{ from: location }} replace/>;
  }

  return children;
};

export default ProtectedRoute;