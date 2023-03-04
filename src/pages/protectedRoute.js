import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children, notLogged = false }) => {
  const user = useSelector((store) => store.auth.userInfo);
  const location = useLocation();

  const from = location.state?.from || "/";

  if (user && notLogged) {
    return <Navigate to={from} />;
  }

  if (!user && !notLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
