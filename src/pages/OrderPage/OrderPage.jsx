import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./orderPage.module.css";
import { wsInit, wsClose, wsInitWithCustomUrl } from "../../features/wsOrders";
import { getCookie } from "../../utils/cookies";
import { OrderIngredients } from "../../components/OrderIngredients/OrderIngredients";
import { useParams } from "react-router-dom";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isLogged);

  useEffect(() => {
    isAuth
      ? dispatch(
          wsInitWithCustomUrl(
            `wss://norma.nomoreparties.space/orders?token=${getCookie(
              "accessToken"
            )}`
          )
        )
      : dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
    // eslint-disable-next-line
  }, []);
  const orders = useSelector((store) => store.wsOrders.orders);
  const { id } = useParams();
  const order = orders.find((item) => item._id === id);

  return (
    order && (
      <div className={styles.main}>
        <OrderIngredients />
      </div>
    )
  );
};
