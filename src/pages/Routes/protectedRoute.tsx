import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Navigate } from "react-router-dom";
import { FC, ReactElement, useEffect } from "react";
import { getUserInfo } from "../../features/auth/authRequests";
import Loader from "../../components/Loader/Loader";

type TProtectedRoute = {
  children: ReactElement,
}

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
  const user = useAppSelector((store) => store.auth.success);
  const isAuth = useAppSelector((store) => store.auth.isLogged);
  const error = useAppSelector((store) => store.auth.error);
  const dispatch = useAppDispatch();

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
