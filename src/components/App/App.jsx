import "../../vendor/normalize.css";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { Login } from "../../pages/Login/Login";
import { Registration } from "../../pages/Registration/Registration";
import { ForgotPass } from "../../pages/ForgotPass/ForgotPass";
import { RestorePass } from "../../pages/RestorePass/RestorePass";
import Profile from "../../pages/Profile/Profile";
import EditProfile from "../../pages/EditProfile/EditProfile";
import MainPage from "../../pages/MainPage/MainPage";
import OrderFeed from "../../components/OrderFeed/OrderFeed";
import NotFound from "../../pages/NotFound/NotFound";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const background = location.state && location.state.background;

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="restorepass" element={<RestorePass />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="orderfeed" element={<OrderFeed />} />
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
