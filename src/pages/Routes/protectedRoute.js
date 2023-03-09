import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCookie } from "../../utils/cookies";
import { getUserInfo } from "../../features/auth/authRequests";
import Loader from "../../components/Loader/Loader";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.auth.success);
  const isAuth = useSelector((store) => store.auth.isLogged);
  const error = useSelector((store) => store.auth.error);
  const isLoading = useSelector((store) => store.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return !user ? (
    error ? (
      <Navigate to="/login" />
    ) : (
      <Loader />
    )
  ) : isAuth ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
