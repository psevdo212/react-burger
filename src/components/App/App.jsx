import "../../vendor/normalize.css";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import ForgotPass from "../../pages/ForgotPass/ForgotPass";
import RestorePass from "../../pages/RestorePass/RestorePass";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MainPage from "../../pages/MainPage/MainPage";
import OrderFeed from "../OrderFeed/OrderFeed";
import NotFound from "../../pages/NotFound/NotFound";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import Layout from "../Layout/Layout";
import Orders from "../Orders/Orders";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../../pages/protectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes location={background ?? location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={
              <ProtectedRoute notLogged={true}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="registration"
            element={
              <ProtectedRoute notLogged={true}>
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="forgotpass"
            element={
              <ProtectedRoute notLogged={true}>
                <ForgotPass />
              </ProtectedRoute>
            }
          />
          <Route
            path="restorepass"
            element={
              <ProtectedRoute notLogged={true}>
                <RestorePass />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile/*"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />
            <Route path="ordershistory" element={<Orders />} />
          </Route>
          <Route
            path="orderfeed"
            element={
              <ProtectedRoute>
                <OrderFeed />
              </ProtectedRoute>
            }
          />
          <Route path={`/ingredients/:id`} element={<IngredientPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal handleClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
