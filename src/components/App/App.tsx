import "../../vendor/normalize.css";
import { FC } from "react";
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
import ProtectedRoute from "../../pages/Routes/protectedRoute";
import FreeRoute from "../../pages/Routes/freeRoute";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import { OrderIngredients } from "../OrderIngredients/OrderIngredients";
import { useEffect } from "react";
import { getUserInfo } from "../../features/auth/authRequests";
import { useAppDispatch } from "../../hooks/storeHooks";
import { fetchIngredients } from "../../features/ingredients";

export const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(getUserInfo());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Routes location={background ?? location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={
              <FreeRoute>
                <Login />
              </FreeRoute>
            }
          />
          <Route
            path="registration"
            element={
              <FreeRoute>
                <Registration />
              </FreeRoute>
            }
          />
          <Route
            path="forgotpass"
            element={
              <FreeRoute>
                <ForgotPass />
              </FreeRoute>
            }
          />
          <Route
            path="restorepass"
            element={
              <FreeRoute>
                <RestorePass />
              </FreeRoute>
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
            <Route path="ordershistory" element={<Orders />} />
          </Route>
          <Route path="orderfeed" element={<OrderFeed />} />
          <Route
            path="/orderfeed/:id"
            element={<OrderPage isUserOrder={false} />}
          />

          <Route
            path="profile/ordershistory/:id"
            element={
              <ProtectedRoute>
                <OrderPage isUserOrder={true} />
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
          <Route
            path="/orderfeed/:id"
            element={
              <Modal handleClose={handleCloseModal}>
                <OrderIngredients isUserOrder={false}/>
              </Modal>
            }
          />
          <Route
            path="profile/ordershistory/:id"
            element={
              <Modal handleClose={handleCloseModal}>
                <OrderIngredients isUserOrder={true}/>
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
